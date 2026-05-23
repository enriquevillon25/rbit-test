import React, { useState, useEffect, Fragment } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Scrollspy from "react-scrollspy";
import { useTranslation } from "lib/useTranslation";
import useClientMediaQuery, { useIsMounted } from "lib/useClientMediaQuery";
import MobileMenu from "./MobileMenu";
import logo from "public/images/logo-rbit.jpg";
import routeLink from "data/text/link";
import useStyles from "./header-style";
import Link from "../Link";
import navMenu from "./menu";

let counter = 0;

interface HeaderProps {
  onToggleDark: () => void;
  onToggleDir: () => void;
  invert?: boolean;
}

interface HeaderMenuItem {
  id: number;
  name: string;
  url: string;
  offset: number;
}

interface SmoothAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  offset?: number;
}

function createData(name: string, url: string, offset: number): HeaderMenuItem {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const SmoothAnchor = React.forwardRef<HTMLAnchorElement, SmoothAnchorProps>(
  function SmoothAnchor(props, ref) {
    const { offset = 0, onClick, href, ...rest } = props;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (href?.startsWith("#")) {
        const target = document.getElementById(href.slice(1));

        if (target) {
          event.preventDefault();
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
          window.scroll({
            top: offsetTop - offset,
            behavior: "smooth",
          });
        }
      }

      onClick?.(event);
    };

    return <a ref={ref} href={href} onClick={handleClick} {...rest} />;
  }
);

function Header(props: HeaderProps) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useClientMediaQuery(theme.breakpoints.down("lg"));
  const isDesktop = useClientMediaQuery(theme.breakpoints.up("lg"));
  const isMounted = useIsMounted();

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const { classes, cx } = useStyles() as any;
  const { invert } = props;
  const { t } = useTranslation("common");

  const [menuList] = useState(navMenu.map(item => createData(item, "#" + item, 200)));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isMounted && isTablet && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, invert && classes.invert)}>
              {isMounted && isTablet && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <Link href={routeLink.education.home}>
                    <img src={logo} alt="logo" />
                  </Link>
                ) : (
                  <SmoothAnchor href="#home">
                    <img src={logo} alt="logo" />
                  </SmoothAnchor>
                )}
              </div>
            </nav>
            <nav className={cx(classes.navMenu, invert && classes.invert)}>
              {isMounted && isDesktop && (
                <Scrollspy items={navMenu} currentClassName="active">
                  {menuList.map((item) => (
                    <li key={item.id.toString()}>
                      {invert ? (
                        // eslint-disable-next-line
                        <Button component={Link as any} href={"/" + item.url}>
                          <span className={classes.text}>
                            {t("education-landing.header_" + item.name)}
                          </span>
                        </Button>
                      ) : (
                        // eslint-disable-next-line
                        <Button
                          component={SmoothAnchor as any}
                          offset={item.offset || 0}
                          href={item.url}
                        >
                          <span className={classes.text}>
                            {t("education-landing.header_" + item.name)}
                          </span>
                        </Button>
                      )}
                    </li>
                  ))}
                  <li>
                    <Button component={Link as any} href={routeLink.education.contact}>
                      <span className={classes.text}>
                        {t("education-landing.header_contact")}
                      </span>
                    </Button>
                  </li>
                </Scrollspy>
              )}
            </nav>
            {/* <nav className={cx(classes.navMenu, classes.navAuth)}>
              {!isMobile && (
                <Fragment>
                  <div className={classes.deco} />
                  <Button
                    component={Link}
                    className={classes.textBtn}
                    href={routeLink.education.login}
                  >
                    {t("education-landing.header_login")}
                  </Button>
                  <Button
                    component={Link}
                    className={classes.btnWhite}
                    href={routeLink.education.register}
                    variant="contained"
                  >
                    {t("education-landing.header_register")}
                  </Button>
                </Fragment>
              )}
              <Settings
                toggleDark={onToggleDark}
                toggleDir={onToggleDir}
                invert={invert}
              />
            </nav> */}
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.defaultProps = {
  invert: false,
};

export default Header;
