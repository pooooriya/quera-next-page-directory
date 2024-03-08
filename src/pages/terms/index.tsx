import Layout from "@/components/Layout";
import TermsPage from "@/components/Pages/Terms";
import { NextPage } from "next";

const Terms: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <TermsPage />
    </Layout>
  );
};

export default Terms;
