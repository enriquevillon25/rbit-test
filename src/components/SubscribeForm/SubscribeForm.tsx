import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Parallax } from "react-parallax";
import { useTranslation } from "lib/useTranslation";
import { useText } from "theme/common";
import { handleWhatsApp } from "utils/sends";
import useStyles from "./subscribe-style";
import imgAPI from "public/images/imgApi";

function SubscribeForm() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <Parallax
        blur={0}
        bgImage={imgAPI.education[18]}
        bgImageAlt="benefit"
        strength={300}
      >
        <div className={classes.parallaxWrap} />
      </Parallax>
      <Container fixed>
        <Paper className={classes.form}>
          <Typography variant="h4" className={text.title2}>
            {t("education-landing.subscribe_title")}
          </Typography>
          <Typography className={text.paragraph}>
            {t("education-landing.subscribe_subtitle")}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleWhatsApp}
          >
            Contactar por WhatsApp
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default SubscribeForm;
