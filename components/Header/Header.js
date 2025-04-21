import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";
import { useTranslation } from "next-i18next";
import Settings from "./Settings";
import MobileMenu from "./MobileMenu";
import logo from "public/images/logo-rbit.jpg";
import brand from "public/text/brand";
import routeLink from "public/text/link";
import useStyles from "./header-style";
import Link from "../Link";
import navMenu from "./menu";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir, invert } = props;
  const { t } = useTranslation("common");

  const [menuList] = useState([
    createData(navMenu[0], "#" + navMenu[0], 200),
    createData(navMenu[1], "#" + navMenu[1], 200),
    // createData(navMenu[2], "#" + navMenu[2], 200),
    createData(navMenu[3], "#" + navMenu[3], 200),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isTablet && (
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
              {isTablet && (
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
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                  </AnchorLink>
                )}
              </div>
            </nav>
            <nav className={cx(classes.navMenu, invert && classes.invert)}>
              {isDesktop && (
                <Scrollspy items={navMenu} currentClassName="active">
                  {menuList.map((item) => (
                    <li key={item.id.toString()}>
                      {invert ? (
                        // eslint-disable-next-line
                        <Button component={Link} href={"/" + item.url}>
                          <span className={classes.text}>
                            {t("education-landing.header_" + item.name)}
                          </span>
                        </Button>
                      ) : (
                        // eslint-disable-next-line
                        <Button
                          component={LinkBtn}
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
                    <Button component={Link} href={routeLink.education.contact}>
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

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};

export default Header;
