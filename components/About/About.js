import React, { Fragment } from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import { useText } from "theme/common";
import imgAPI from "public/images/imgAPI";
import useStyles from "./about-style";
import imagetest from "../../public/images/imagen_about.png";
import imagetest2 from "../../public/images/imagen-2-about.png";
import imagetest3 from "../../public/images/education/imagen-3-about.webp";
import { handleWhatsApp } from "utils/sends";
function About() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container justifyContent="center" spacing={8}>
          <Grid item md={6} xs={12} className={classes.illuWrap}>
            {!isTablet && (
              <Fragment>
                <div className={cx(classes.illustration, classes.one)} />
                <figure className={cx(classes.illustration, classes.two)}>
                  <img src={imagetest3} alt="about" />
                </figure>
                <figure className={cx(classes.illustration, classes.three)}>
                  <img src={imagetest2} alt="about" />
                </figure>
                <figure className={cx(classes.illustration, classes.four)}>
                  <img src={imagetest} alt="about" />
                </figure>
                <div className={cx(classes.illustration, classes.five)} />
              </Fragment>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={-100}
              delay={200}
              duration={0.6}
            >
              <div>
                <div className={classes.title}>
                  <Typography variant="h3" className={text.title}>
                    <span>{t("education-landing.about_title")}</span>
                  </Typography>
                </div>
                <Typography className={text.paragraph}>
                  {t("education-landing.about_desc")}
                </Typography>
                <Button
                  className={classes.white}
                  variant="contained"
                  onClick={handleWhatsApp}
                >
                  Agendar
                </Button>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
