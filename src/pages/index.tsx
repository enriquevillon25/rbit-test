import React from "react";
import type { GetStaticProps } from "next";
import LandingPage from "features/landing/LandingPage";
import type { LandingPageProps } from "features/landing/types";

function Landing(props: LandingPageProps): JSX.Element {
  return <LandingPage {...props} />;
}

export default Landing;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});
