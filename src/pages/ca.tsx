import React from "react";
import type { GetStaticProps } from "next";
import LandingPage from "features/landing/LandingPage";
import type { LandingPageProps } from "features/landing/types";

function LandingCa(props: LandingPageProps): JSX.Element {
  return <LandingPage {...props} language="ca" />;
}

export default LandingCa;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});
