import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import brand from "public/text/brand";
import MainContainer from "components/MainContainer";
import Notification from "components/Notification";

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles({ uniqId: "blank" })((theme) => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    background:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
  },
  spaceTop: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down("lg")]: {
      paddingTop: sectionMargin(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: sectionMargin(4),
    },
  },
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    "& > section": {
      position: "relative",
    },
  },
}));

function BlankPage(props) {
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>{brand.education.name + " - Blank Page "}</title>
      </Head>
      <CssBaseline />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        invert
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section className={cx(classes.spaceTop, classes.spaceBottom)}>
              <Typography variant="h2" align="center" gutterBottom>
                Blank Page
              </Typography>
              <Typography variant="h4" align="center">
                This page is empty
              </Typography>
            </section>
          </main>
          <Notification />
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

BlankPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlankPage;

export async function getStaticProps() {
  return { props: {} };
}
