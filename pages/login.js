import React, { Fragment } from "react";
import Head from "next/head";
import brand from "public/text/brand";
import LoginForm from "components/Forms/Login";

function Login() {
  return (
    <Fragment>
      <Head>
        <title>{brand.education.name + " - Login"}</title>
      </Head>
      <div>
        <LoginForm />
      </div>
    </Fragment>
  );
}

export default Login;

export async function getStaticProps() {
  return { props: {} };
}
