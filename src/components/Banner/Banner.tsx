import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "lib/useTranslation";
import useClientMediaQuery from "lib/useClientMediaQuery";
import { useText } from "theme/common";
import useStyles from "./banner-style";
import { Button } from "@mui/material";
import { handleWhatsApp } from "utils/sends";

type PointerPosition = [number, number];

const calc = (x: number, y: number): PointerPosition => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x: number, y: number) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x: number, y: number) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x: number, y: number) => `translate3d(${x / 4 + 35}px,${y / 4 - 230}px,0)`;

function Banner() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useClientMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useClientMediaQuery(theme.breakpoints.up("sm"));

  // Translation function
  const { t } = useTranslation("common");

  const { classes, cx } = useStyles() as any;

  useEffect(() => {
  }, []);

  const [position, setPosition] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 300, tension: 200, friction: 240 },
  }));

  return (
    <div className={classes.heroContent}>
      <Container
        fixed={isDesktop}
        onMouseMove={({ clientX: x, clientY: y }) =>
          setPosition({ xy: calc(x, y) })
        }
      >
        <Grid container spacing={6} className={classes.bannerContainer}>
          <Grid item lg={6} md={7} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography component="h1" variant="h3" className={text.title}>
                  {t("education-landing.banner_title")}
                </Typography>
              </div>
              <Typography className={classes.subtitle} variant="h5">
                {t("education-landing.banner_desc")}
              </Typography>
              <div>
                <Button
                  color="secondary"
                  variant="outlined"
                  // className={classes.button}
                  onClick={handleWhatsApp}
                  style={{ zIndex: 10, background: "white", color: "black" }}
                >
                  Diagnostico gratuito
                </Button>
              </div>
            </div>
          </Grid>
          {isTablet && (
            <Grid item lg={6} className={classes.decoGrid}>
              <div className={classes.decoBanner}>
                <div className={classes.artworkBg}>
                  <div className={classes.oval} />
                  <div className={cx(classes.parallaxScene, classes.back)}>
                    <animated.div
                      style={{ transform: (position.xy as any).interpolate(trans1) }}
                    >
                      <span className={classes.iconThree} />
                    </animated.div>
                    <animated.div
                      style={{ transform: (position.xy as any).interpolate(trans2) }}
                    >
                      <span className={classes.iconTwo} />
                    </animated.div>
                  </div>
                  <img
                    src="/images/education/banner-artwork.png"
                    alt="Servicio técnico informático en Barcelona"
                  />
                  <div className={cx(classes.parallaxScene, classes.front)}>
                    <animated.div
                      style={{ transform: (position.xy as any).interpolate(trans3) }}
                    >
                      <span className={classes.iconFour} />
                    </animated.div>
                    <animated.div
                      style={{ transform: (position.xy as any).interpolate(trans4) }}
                    >
                      <span className={classes.iconOne} />
                    </animated.div>
                  </div>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
