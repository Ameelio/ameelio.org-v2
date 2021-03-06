import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Corrections from "components/WhoWeServe/Corrections";

import Head from "next/head";

interface Props {}


const connect = (props: Props) => {
  return (
    <BaseTemplate>
      <Head>
        <title>Ameelio for DOCs: Securely streamline your workflow with easy-to-use communication and management tools</title>
        <meta
          property="og:title"
          content="Ameelio Connect: Free prison communication platform"
          key="title"
        />
      </Head>
      <Corrections />
    </BaseTemplate>
  );
};

export default connect;
