import React, { useState, useEffect, Fragment, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "lib/useTranslation";
import useClientMediaQuery, { useIsMounted } from "lib/useClientMediaQuery";
import MobileMenu from "./MobileMenu";
import logo from "public/images/logo-rbit.jpg";
import routeLink from "data/text/link";
import useStyles from "./header-style";
import Link from "../Link";
import navMenu from "./menu";
import LanguageSwitcher from "./LanguageSwitcher";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Bail%C3%A8n%20109%20Local%202%20Barcelona";

let counter = 0;
const HEADER_SCROLL_GAP = 18;

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

function getHeaderOffset(): number {
  if (typeof document === "undefined") {
    return 104;
  }

  const header = document.getElementById("header");

  return (header?.offsetHeight || 86) + HEADER_SCROLL_GAP;
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
          const scrollOffset = typeof offset === "number" ? offset : getHeaderOffset();
          window.scroll({
            top: Math.max(offsetTop - scrollOffset, 0),
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
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop || 0;
      const headerOffset = getHeaderOffset();
      const activationLine = headerOffset + 24;
      const nextFixed = scroll > 80;
      const nextActiveSection =
        navMenu.find((item) => {
          const section = document.getElementById(item);

          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();

          return rect.top <= activationLine && rect.bottom > activationLine;
        }) || null;

      setFixed(nextFixed);
      setActiveSection(nextActiveSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  const { classes, cx } = useStyles() as any;
  const { invert } = props;
  const { t } = useTranslation("common");

  const menuList = useMemo(
    () => navMenu.map((item) => createData(item, "#" + item, getHeaderOffset())),
    []
  );
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
                <ul>
                  {menuList.map((item) => (
                    <li
                      key={item.id.toString()}
                      className={activeSection === item.name ? "active" : undefined}
                    >
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
                          offset={item.offset || getHeaderOffset()}
                          href={item.url}
                        >
                          <span className={classes.text}>
                            {t("education-landing.header_" + item.name)}
                          </span>
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </nav>
            <nav className={classes.navActions} aria-label={t("education-landing.header_language")}>
              {isMounted && isDesktop && (
                <Fragment>
                  <Button
                    component="a"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.locationLink}
                    startIcon={<LocationOnIcon />}
                  >
                    <span className={classes.locationPrimary}>
                      Carrer de Bailèn 109
                    </span>
                  </Button>
                  <LanguageSwitcher />
                </Fragment>
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
