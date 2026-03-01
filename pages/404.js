import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { makeStyles } from "tss-react/mui";
import brand from "public/text/brand";
import Error from "components/Error";
import MainContainer from "components/MainContainer";

const useStyles = makeStyles({ uniqId: "error" })((theme) => ({
  dedicatedPage: {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
}));

function ErrorPage(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars } = props;

  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>{brand.education.name + " - " + errorCode}</title>
        </Head>
        <div className={classes.dedicatedPage}>
          <MainContainer
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
            invert
          >
            <Error errorCode={errorCode} text="Page not found" />
          </MainContainer>
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      Page not found. Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: "400",
  stars: 0,
};

export default ErrorPage;

export async function getStaticProps() {
  return { props: {} };
}
