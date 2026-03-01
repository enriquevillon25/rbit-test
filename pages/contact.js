import React, { Fragment } from "react";
import Head from "next/head";
import brand from "public/text/brand";
import ContactFrm from "components/Forms/Contact";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>{brand.education.name + " - Contact"}</title>
      </Head>
      <div>
        <ContactFrm />
      </div>
    </Fragment>
  );
}

export default Contact;

export async function getStaticProps() {
  return { props: {} };
}
