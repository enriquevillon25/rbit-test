import React, { Fragment } from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslation } from "lib/useTranslation";
import useClientMediaQuery from "lib/useClientMediaQuery";
import { useText } from "theme/common";
import { handleWhatsApp } from "utils/sends";
import imagetest from "public/images/imagen_about.png";
import imagetest2 from "public/images/imagen-2-about.png";
import imagetest3 from "public/images/education/imagen-3-about.webp";
import useStyles from "./about-style";

function About() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isTablet = useClientMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container justifyContent="center" spacing={8}>
          <Grid item md={6} xs={12} className={classes.illuWrap}>
            {!isTablet && (
              <Fragment>
                <div className={cx(classes.illustration, classes.one)} />
                <figure className={cx(classes.illustration, classes.two)}>
                  <img
                    src={imagetest3}
                    alt="Recuperación de datos en Barcelona"
                  />
                </figure>
                <figure className={cx(classes.illustration, classes.three)}>
                  <img
                    src={imagetest2}
                    alt="Instalación de SSD en portátil"
                  />
                </figure>
                <figure className={cx(classes.illustration, classes.four)}>
                  <img
                    src={imagetest}
                    alt="Reparación de portátiles en Barcelona"
                  />
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
