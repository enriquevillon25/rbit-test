import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CountUp from "react-countup";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import { useText } from "theme/common";
import Title from "../Title";
import useStyles from "./feature-style";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Feature() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  );

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Title
          head={t("education-landing.feature_title")}
          desc={t("education-landing.feature_desc")}
          align="center"
          color="primary"
        />
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={100}
          afterAnimatedIn={handlePlay}
        >
          <div className={classes.counterWrap}>
            <Grid container spacing={isDesktop ? 2 : 2}>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/customatetion.svg" alt="presenter" />
                  </figure>
                  <div className={classes.text}>
                    <Typography
                      variant="body2"
                      className={text.subtitleFeature}
                    >
                      Atención Personalizada
                    </Typography>
                    {/* <Typography variant="h6" className={text.subtitle2}>
                      {t('education-landing.counter_videos')}
                    </Typography> */}
                  </div>
                </div>
              </Grid>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/software.svg" alt="hd-video" />
                  </figure>
                  <div className={classes.text}>
                    <Typography
                      variant="body2"
                      className={text.subtitleFeature}
                    >
                      Soluciones de software
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/build.svg" alt="money" />
                  </figure>
                  <div className={classes.text}>
                    <Typography
                      variant="body2"
                      className={text.subtitleFeature}
                    >
                      Reparación todas las marcas
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Feature;
