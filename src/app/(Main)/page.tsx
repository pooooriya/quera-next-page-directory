import HomePage from "@/components/Pages/Home";
import { AXIOS } from "@/config/axios";
import { API_URL } from "@/constants/apiUrl";

const Home = async () => {
  const slider = await AXIOS.get(API_URL.GetSliders);
  const meals = await AXIOS.get(API_URL.GetMeals);
  return <HomePage sliderData={slider?.data} mealData={meals?.data} />;
};

export default Home;
