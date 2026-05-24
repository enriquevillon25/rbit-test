import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "tss-react/mui";
import JsonLd from "components/seo/JsonLd";
import MainContainer from "components/MainContainer";
import PageNav from "components/PageNav";
import { buildLandingJsonLd } from "seo/structuredData";
import { getLocalizedContent } from "i18n/content";
import SeoHead from "./seo/SeoHead";
import SectionRenderer from "./components/SectionRenderer";
import { landingSections } from "./config/sections";
import { useLandingLayout } from "./hooks/useLandingLayout";
import type { LandingPageProps, LandingSectionSpacing } from "./types";

const sectionMargin = (margin: number): number => margin * 20;

const useStyles = makeStyles({ uniqId: "landing-page" })((theme) => ({
  containerWrap: {
    "& > section": {
      position: "relative",
    },
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
  spaceTopShort: {
    paddingTop: theme.spacing(10),
  },
}));

function LandingPage(props: LandingPageProps): JSX.Element {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir, language = "es" } = props;
  const { showPageNav } = useLandingLayout();
  const content = getLocalizedContent(language);
  const jsonLd = buildLandingJsonLd(content);

  const getSectionClass = (
    spacing?: LandingSectionSpacing
  ): string | undefined => {
    if (spacing === "top") {
      return classes.spaceTop;
    }

    if (spacing === "topShort") {
      return classes.spaceTopShort;
    }

    return undefined;
  };

  return (
    <Fragment>
      <SeoHead content={content} />
      <JsonLd data={jsonLd} />
      <CssBaseline />
      <MainContainer onToggleDark={onToggleDark} onToggleDir={onToggleDir}>
        <Fragment>
          <main className={classes.containerWrap}>
            <SectionRenderer
              sections={landingSections}
              getSectionClass={getSectionClass}
            />
          </main>
          {showPageNav && <PageNav />}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

export default LandingPage;
