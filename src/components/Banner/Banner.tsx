import React from "react";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useClientMediaQuery from "lib/useClientMediaQuery";
import { useText } from "theme/common";
import useStyles from "./banner-style";
import { useLocalizedContent } from "i18n/useLocalizedContent";
import { handleWhatsApp } from "utils/sends";

function Banner() {
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useClientMediaQuery(theme.breakpoints.up("lg"));

  const { classes } = useStyles() as any;
  const { hero } = useLocalizedContent();

  return (
    <div className={classes.heroContent}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6} className={classes.bannerContainer}>
          <Grid item lg={6} md={6} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography component="h1" variant="h3" className={text.title}>
                  {hero.title}
                </Typography>
              </div>
              <Typography className={classes.subtitle} variant="h5">
                {hero.subtitle}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                onClick={handleWhatsApp}
                className={classes.primaryCta}
              >
                {hero.primaryCta}
              </Button>
              <div className={classes.heroMeta}>
                <span>{hero.trustItems.join(" · ")}</span>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.imageGrid}>
            <div className={classes.heroImageCard}>
              <img src={hero.image} alt={hero.imageAlt} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
