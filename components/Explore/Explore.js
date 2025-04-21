import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import imgAPI from "public/images/imgAPI";
import imgLaptop from "public/images/laptop.jpg";
import imgMoviles from "public/images/moviles.jpg";
import imgComputer from "public/images/computer.jpg";
import imgiPhones from "public/images/iphones.webp";
import imgMacbooks from "public/images/macbooks.jpeg";
import DotParallax from "../Parallax/Dots";
import CategoryCard from "../Cards/Category";
import Title from "../Title";
import useStyles from "./explore-style";
import ComputerIcon from "@mui/icons-material/Computer";
const categoriesData = [
  {
    img: ComputerIcon,
    title: "Reparar ordenadores",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgLaptop,
    title: "Reparar portátiles",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgMoviles,
    title: "Reparar moviles",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgiPhones,
    title: "Reparar iPhones",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgMacbooks,
    title: "Reparar Macbooks",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
];

function Explore() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Translation Function
  const { t } = useTranslation("common");

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container fixed={isDesktop}>
        <Box p={isDesktop ? 6 : 0}>
          <Title
            head={t("education-landing.explore_title")}
            desc={t("education-landing.explore_desc")}
            align={isMobile ? "center" : "left"}
            color="primary"
          />
          <div className={classes.massonry}>
            <Grid container spacing={isMobile ? 2 : 6}>
              {categoriesData.map((item, index) => (
                <Grid item lg={4} xs={6} key={index.toString()}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={index * 200}
                    duration={0.4}
                  >
                    <div>
                      <CategoryCard
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  </ScrollAnimation>
                </Grid>
              ))}
              <Grid item lg={4} xs={6}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-100}
                  delay={categoriesData.length * 200}
                  duration={0.4}
                >
                  <div className={classes.cardWrap}>
                    <span className={classes.fold} />
                    <ButtonBase
                      className={classes.allCategoryCard}
                      focusRipple
                      href="#"
                    >
                      <span className={classes.figure}>
                        <img src={imgAPI.education[10]} alt="img" />
                      </span>
                      <span className={classes.property}>
                        <span className={classes.title}>
                          TODOS NUESTROS SERVICIOS
                        </span>
                        <ArrowIcon />
                      </span>
                    </ButtonBase>
                  </div>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Explore;
