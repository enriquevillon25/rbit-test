import React from "react";
import type { GetStaticProps } from "next";
import LandingPage from "features/landing/LandingPage";
import type { LandingPageProps } from "features/landing/types";

function LandingEn(props: LandingPageProps): JSX.Element {
  return <LandingPage {...props} language="en" />;
}

export default LandingEn;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});
