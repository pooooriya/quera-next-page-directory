import { GetServerSideProps } from "next";
import React from "react";

export default function index() {
  return <div>index</div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params);

  return { props: {} };
};
