import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { getInitColorSchemeScript } from '@mui/material/styles';
import createEmotionCache from '../theme/createEmotionCache';
import HeadComponent from '../components/head';

const pageLoaderStyles = `
  #rbit-page-loader {
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.97);
    color: #202124;
    opacity: 1;
    visibility: visible;
    transition: opacity 220ms ease, visibility 220ms ease;
  }

  #rbit-page-loader.rbit-page-loader--hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .rbit-page-loader__panel {
    width: min(320px, calc(100vw - 48px));
    min-height: 188px;
    padding: 24px;
    border: 1px solid rgba(217, 69, 60, 0.16);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .rbit-page-loader__logo {
    width: 156px;
    height: 64px;
    object-fit: contain;
    border-radius: 4px;
    animation: rbitLogoPulse 1400ms ease-in-out infinite;
  }

  .rbit-page-loader__progress {
    width: 172px;
    height: 4px;
    border-radius: 999px;
    overflow: hidden;
    background: rgba(217, 69, 60, 0.14);
  }

  .rbit-page-loader__progress span {
    display: block;
    width: 42%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #D9453C, #000000);
    animation: rbitProgressSweep 1150ms ease-in-out infinite;
  }

  .rbit-page-loader__label {
    font-family: Roboto, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.62);
  }

  @keyframes rbitLogoPulse {
    0%, 100% {
      opacity: 0.88;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 1;
      transform: translateY(-2px) scale(1.015);
    }
  }

  @keyframes rbitProgressSweep {
    0% {
      transform: translateX(-115%);
    }
    100% {
      transform: translateX(250%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rbit-page-loader__logo,
    .rbit-page-loader__progress span {
      animation: none;
    }

    .rbit-page-loader__progress span {
      width: 66%;
    }
  }
`;

const pageLoaderScript = `
  (function () {
    var loader = document.getElementById('rbit-page-loader');
    if (!loader) return;

    function hideLoader() {
      loader.className += ' rbit-page-loader--hidden';
      window.setTimeout(function () {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 260);
    }

    if (document.readyState === 'complete') {
      window.setTimeout(hideLoader, 250);
    } else {
      window.addEventListener('load', function () {
        window.setTimeout(hideLoader, 250);
      }, { once: true });
      window.setTimeout(hideLoader, 3500);
    }
  })();
`;

const htmlLanguageByRoute = {
  '/': 'es-ES',
  '/ca': 'ca-ES',
  '/en': 'en',
};

const loaderLabelByRoute = {
  '/': 'Cargando RBIT',
  '/ca': 'Carregant RBIT',
  '/en': 'Loading RBIT',
};

class MyDocument extends Document {
  render() {
    const currentPage = this.props.__NEXT_DATA__?.page;
    const currentLocale = htmlLanguageByRoute[currentPage] || 'es-ES';
    const loaderLabel = loaderLabelByRoute[currentPage] || loaderLabelByRoute['/'];

    return (
      <Html lang={currentLocale} dir="ltr">
        <HeadComponent>
          <style
            id="rbit-page-loader-styles"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageLoaderStyles }}
          />
          {this.props.emotionStyleTags}
        </HeadComponent>
        <body>
          {getInitColorSchemeScript()}
          <div id="rbit-page-loader" role="status" aria-live="polite" aria-label={loaderLabel}>
            <div className="rbit-page-loader__panel">
              <img
                className="rbit-page-loader__logo"
                src="/images/logo-rbit.jpg"
                alt=""
                aria-hidden="true"
              />
              <div className="rbit-page-loader__progress" aria-hidden="true">
                <span />
              </div>
              <span className="rbit-page-loader__label">{loaderLabel}</span>
            </div>
          </div>
          <Main />
          <NextScript />
          <script
            id="rbit-page-loader-script"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageLoaderScript }}
          />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({ enhanceApp: (App) => (function EnhanceApp(props) { // eslint-disable-line
      return <App emotionCache={cache} {...props} />;
    }),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    namespacesRequired: ['common', 'education-landing'],
  };
};

export default MyDocument;
