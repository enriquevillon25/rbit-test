import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Parallax } from "react-parallax";
import { useLocalizedContent } from "i18n/useLocalizedContent";
import { useText } from "theme/common";
import { handleWhatsApp } from "utils/sends";
import useStyles from "./subscribe-style";
import imgAPI from "public/images/imgApi";

function SubscribeForm() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const content = useLocalizedContent();

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
            {content.sections.subscribeTitle}
          </Typography>
          <Typography className={text.paragraph}>
            {content.sections.subscribeSubtitle}
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            onClick={handleWhatsApp}
          >
            {content.sections.subscribeButton}
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default SubscribeForm;
