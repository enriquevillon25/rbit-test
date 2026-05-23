import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import Fab from '@mui/material/Fab';
import ArrowIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'lib/useTranslation';
import navMenu from '../Header/menu';
import useStyles from './pagenav-style';

function createData(id, name, url) {
  return {
    id,
    name,
    url,
  };
}

interface SmoothAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  offset?: number;
}

const SmoothAnchor = React.forwardRef<HTMLAnchorElement, SmoothAnchorProps>(
  function SmoothAnchor(props, ref) {
    const { offset = 0, onClick, href, ...rest } = props;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (href?.startsWith('#')) {
        const target = document.getElementById(href.slice(1));

        if (target) {
          event.preventDefault();
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
          window.scroll({
            top: offsetTop - offset,
            behavior: 'smooth',
          });
        }
      }

      onClick?.(event);
    };

    return <a ref={ref} href={href} onClick={handleClick} {...rest} />;
  }
);

function PageNav() {
  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = (scroll > 500);
    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const { classes, cx } = useStyles() as any;
  const [menuList] = useState(
    navMenu.map((item, index) =>
      createData(index + 1, item, '#' + item.replace(/ /g, '_'))
    )
  );
  return (
    <div className={cx(classes.pageNav, show && classes.show)}>
      <nav className={classes.sectionNav}>
        <Scrollspy
          items={navMenu}
          currentClassName="active"
        >
          { menuList.map(item => (
            <li
              key={item.id.toString()}
              style={{ top: 30 * (navMenu.length - item.id) }}
              data-id={item.id}
            >
              <Tooltip
                title={t('education-landing.header_' + item.name)}
                placement="left"
                classes={{
                  tooltip: classes.tooltip
                }}
              >
                <span>
                  <SmoothAnchor href={item.url} />
                </span>    
              </Tooltip>
            </li>
          )) }
        </Scrollspy>
      </nav>
      <Tooltip
        title="To Top"
        placement="left"
        classes={{
          tooltip: classes.tooltip
        }}
      >
        <span>
          <Fab
            color="secondary"
            aria-label="To top"
            component={SmoothAnchor}
            href="#home"
            className={classes.fab}
          >
            <ArrowIcon />
          </Fab>
        </span>
      </Tooltip>
    </div>
  );
}

export default PageNav;
