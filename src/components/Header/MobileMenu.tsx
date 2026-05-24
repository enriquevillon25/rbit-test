import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'lib/useTranslation';
import routeLink from 'data/text/link';
import useStyles from './header-style';
import navMenu from './menu';
import LanguageSwitcher from './LanguageSwitcher';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Bail%C3%A8n%20109%20Local%202%20Barcelona';

interface MobileMenuProps {
  open: boolean;
  toggleDrawer: () => void;
}

function MobileMenu(props: MobileMenuProps) {
  const { classes, cx } = useStyles() as any;
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText primary={t('education-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
          <ListItem
            button
            component="a"
            href="#contact"
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary={t('education-landing.header_contact')} className={classes.menuList} />
          </ListItem>
          <Divider className={classes.dividerSidebar} />
          <ListItem
            button
            component="a"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary="Carrer de Bailèn 109" className={classes.menuList} />
          </ListItem>
          <Divider className={classes.dividerSidebar} />
          <div
            className={classes.mobileLanguage}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <LanguageSwitcher mobile />
          </div>
          <Divider className={classes.dividerSidebar} />
          {['login', 'register'].map((item, index) => (
            <ListItem
              button
              component="a"
              href={curLang + routeLink.education[item]}
              key={index.toString()}
              style={{ animationDuration: navMenu.length * 0.15 + 's' }}
            >
              <ListItemText primary={t('education-landing.header_' + item)} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

export default MobileMenu;
