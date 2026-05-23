import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Container from "@mui/material/Container";
import { useTranslation } from "lib/useTranslation";
import useClientMediaQuery from "lib/useClientMediaQuery";
import { serviceCategories, serviceCta } from "data/siteContent";
import DotParallax from "../Parallax/Dots";
import CategoryCard from "../Cards/Category";
import Title from "../Title";
import useStyles from "./explore-style";

function Explore() {
  const theme = useTheme();
  const isDesktop = useClientMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useClientMediaQuery(theme.breakpoints.down("sm"));

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
              {serviceCategories.map((item, index) => (
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
                        imgAlt={item.imgAlt}
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
                  delay={serviceCategories.length * 200}
                  duration={0.4}
                >
                  <div className={classes.cardWrap}>
                    <span className={classes.fold} />
                    <ButtonBase
                      className={classes.allCategoryCard}
                      focusRipple
                      href={serviceCta.href}
                    >
                      <span className={classes.figure}>
                        <img src={serviceCta.img} alt={serviceCta.imgAlt} />
                      </span>
                      <span className={classes.property}>
                        <span className={classes.title}>
                          {serviceCta.title}
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
