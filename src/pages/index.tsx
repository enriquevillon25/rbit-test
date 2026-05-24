import React from "react";
import type { GetStaticProps } from "next";
import LandingPage from "features/landing/LandingPage";
import type { LandingPageProps } from "features/landing/types";
import { usePreferredLanguageRedirect } from "i18n/usePreferredLanguageRedirect";

function Landing(props: LandingPageProps): JSX.Element {
  usePreferredLanguageRedirect();

  return <LandingPage {...props} language="es" />;
}

export default Landing;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});
