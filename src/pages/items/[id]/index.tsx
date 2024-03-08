import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/components/Layout";
import DetailPage from "@/components/Pages/Detail";

const Detail: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <DetailPage />
    </Layout>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params.id);

  return { props: {} };
};
