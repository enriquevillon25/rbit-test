import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import App from 'next/app';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import RbitLoader from '../components/RbitLoader/RbitLoader';
import appTheme from '../theme/appTheme';
/* import css vendors */
import 'animate.css/animate.css';
import 'vendors/hamburger-menu.css';
import 'vendors/animate-slider.css';
import 'vendors/animate-extends.css';
import 'vendors/slick/slick.css';
import 'vendors/slick/slick-theme.css';

let themeType = '';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme');
}

const languageStorageKey = 'rbit-language';
const supportedLanguages = ['es', 'ca', 'en'];
const loaderLabelByLanguage = {
  es: 'Cargando RBIT',
  ca: 'Carregant RBIT',
  en: 'Loading RBIT',
};

function getCurrentLanguage(path) {
  const pathname =
    path ||
    (typeof window !== 'undefined' ? window.location.pathname : '/');
  const routeLanguage = pathname.split('?')[0].split('#')[0].split('/')[1];

  if (supportedLanguages.includes(routeLanguage)) {
    return routeLanguage;
  }

  if (typeof window === 'undefined') {
    return 'es';
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  return supportedLanguages.includes(storedLanguage) ? storedLanguage : 'es';
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const curLang = getCurrentLanguage(router.asPath || router.route);

  const themeName = 'smart';
  const defaultTheme = 'light';
  const [theme, setTheme] = useState({
    ...appTheme(themeName, defaultTheme),
    direction: 'ltr',
  });

  useEffect(() => {
    setIsMounted(true);

    // Set layout direction
    const themeDir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.dir = themeDir;
    document.documentElement.setAttribute('lang', curLang);

    // Set color mode and direction
    if (themeType === 'dark' || curLang === 'ar') {
      setTheme({
        ...appTheme(themeName, themeType || defaultTheme),
        direction: themeDir
      });
    }

    // Enable this code below for Server Side Rendering/Translation (SSR)
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: curLang });

    const hideInitialLoader = () => {
      window.setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };

    const initialLoaderFallback = window.setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    if (document.readyState === 'complete') {
      hideInitialLoader();
    } else {
      window.addEventListener('load', hideInitialLoader, { once: true });
    }

    return () => {
      window.clearTimeout(initialLoaderFallback);
      window.removeEventListener('load', hideInitialLoader);
    };
  }, []);

  useEffect(() => {
    const handleRouteStart = () => setIsLoading(true);
    const handleRouteDone = () => {
      window.setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router.events]);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.mode === 'light' ? 'dark' : 'light');

    setTheme({
      ...appTheme(themeName, newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    // set theme
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const muiTheme = createTheme(theme);
  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RbitLoader
          open={isMounted && isLoading}
          label={loaderLabelByLanguage[curLang] || loaderLabelByLanguage.es}
        />
        <div id="main-wrap">
          <Component
            {...pageProps}
            onToggleDark={toggleDarkTheme}
            onToggleDir={toggleDirection}
            key={router.route}
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
