import { GetMealResponse, GetSliderResponse } from "@/@types/api.types";
import Layout from "@/components/Layout";
import HomePage from "@/components/Pages/Home";
import { AXIOS } from "@/config/axios";
import { API_URL } from "@/constants/apiUrl";
import { GetServerSideProps, NextPage } from "next";

interface HomeProps {
  sliders: GetSliderResponse[];
  meals: GetMealResponse;
}

const Home: NextPage<HomeProps> = ({ sliders, meals }): JSX.Element => {
  return (
    <Layout>
      <HomePage mealData={meals} sliderData={sliders} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  let sliderList;
  let mealList;
  try {
    const result = await Promise.all([
      AXIOS.get(API_URL.GetSliders),
      AXIOS.get(API_URL.GetMeals)
    ]);
    sliderList = result[0];
    mealList = result[1];
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
  return {
    props: {
      sliders: sliderList?.data || null,
      meals: mealList?.data || null
    }
  };
};
