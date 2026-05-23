import React from 'react';
import { useTranslation } from 'lib/useTranslation';
import CheckIcon from '@mui/icons-material/Check';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import i18nextConfig from 'next-i18next.config';
import languageDetector from 'lib/languageDetector';

interface LanguageSwitchProps {
  locale: string;
  checked: boolean;
  toggleDir: (direction: string) => void;
  closePopup: () => void;
  ssg?: boolean;
}

const LanguageSwitch = ({
  locale,
  checked,
  toggleDir,
  ssg,
  closePopup,
}: LanguageSwitchProps) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeLang = (lang: string) => {
    languageDetector.cache(lang);
    closePopup();

    if (i18nextConfig.ssg) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }
        pName = pName.replace(`[${k}]`, String(router.query[k]));
      });
      if (lang) {
        href = pName;
      }
      router.push(href);
    } else {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
    }

    if (lang === 'ar') {
      toggleDir('rtl');
    } else {
      toggleDir('ltr');
    }
  };

  return ssg ? (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => changeLang(locale)}
    >
      <ListItemIcon className="flag">
        <i className={locale} />
      </ListItemIcon>
      <ListItemText primary={t(locale)} />
      {checked && (
        <ListItemSecondaryAction>
          <CheckIcon color="primary" />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  ) : (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => changeLang(locale)}
    >
      <ListItemIcon className="flag">
        <i className={locale} />
      </ListItemIcon>
      <ListItemText primary={t(locale)} />
      {checked && (
        <ListItemSecondaryAction>
          <CheckIcon color="primary" />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

LanguageSwitch.defaultProps = {
  ssg: false,
};

export default LanguageSwitch;
