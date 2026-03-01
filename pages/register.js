import React, { Fragment } from "react";
import Head from "next/head";
import brand from "public/text/brand";
import RegisterForm from "components/Forms/Register";

function Register() {
  return (
    <Fragment>
      <Head>
        <title>{brand.education.name + " - Register"}</title>
      </Head>
      <div>
        <RegisterForm />
      </div>
    </Fragment>
  );
}

export default Register;

export async function getStaticProps() {
  return { props: {} };
}
