"use client";

import { Food, GetMealResponse, GetSliderResponse } from "@/@types/api.types";
import { Card } from "@/components/Basic/Card";
import Checkout from "@/components/Basic/Checkout";
import { Slider } from "@/components/Basic/Slider";
import { BasketTypes } from "@/context/reducers/basket";
import { AppContext } from "@/context/store";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface HomePageProps {
  sliderData: GetSliderResponse[];
  mealData: GetMealResponse;
}
const HomePage: React.FC<HomePageProps> = ({
  sliderData,
  mealData
}): JSX.Element => {
  console.log(sliderData, "sliderData");
  console.log(mealData, "mealData");

  const {
    state: { basket },
    dispatch
  } = useContext(AppContext);
  const router = useRouter();
  // const { data: sliderData, isLoading: sliderLoading } = useGetSliders();
  // const { data: mealData, isLoading: mealLoading } = useGetFoodList();

  const handleAddToBasket = (arg: Food) => {
    // ravash 1:
    // 1. age nabuud bayd be list ezafe beshe
    // 2. age ezafe shud byd be count esh ezafe beshe
    // const alreadyExist = basket.find((x) => x.id == arg.id); // undefiend
    // if (alreadyExist) {
    //   // alreadyExist.Count += 1;
    //   // const basketWithOutElement = basket.filter((x) => x.id != arg.id);
    //   // // Bug
    //   // setBasket([...basketWithOutElement, alreadyExist]);
    // } else {
    //   setBasket([...basket, { ...arg, Count: 1 }]);
    // }
    // ravash 2:
    // const alreadyExist = basket.find((x) => x.id == arg.id);
    // if (alreadyExist) {
    //   const newBasket = basket.map((item) => {
    //     // az ghabl dar basket vojood darad
    //     if (item.id == arg.id) {
    //       item.Count += 1;
    //     }
    //     return item;
    //   });
    //   setBasket(newBasket);
    // } else {
    //   setBasket([...basket, { ...arg, Count: 1 }]);
    // }
    // ravash 3.
    // dispatch(AddToBasket(arg));

    dispatch({
      type: BasketTypes.AddToBasket,
      payload: arg
    });
  };

  const handleRemoveFromBasket = (id: number) => {
    // const alreadyExist = basket.find((x) => x.id == id);
    // if (alreadyExist) {
    //   const basketWithOutElement = basket.filter((x) => x.id != id);
    //   if (alreadyExist?.Count > 1) {
    //     const newBasket = basket.map((item) => {
    //       // az ghabl dar basket vojood darad
    //       if (item.id == id) {
    //         item.Count -= 1;
    //       }
    //       return item;
    //     });
    //     setBasket(newBasket);
    //   } else {
    //     setBasket(basketWithOutElement);
    //   }
    // }
    // dispatch(RemoveFromBasket(id));

    dispatch({
      type: BasketTypes.RemoveFromBasket,
      payload: id
    });
  };

  // if (sliderLoading || mealLoading) {
  //   return <Skeleton animation="wave" height="50vh" />;
  // }
  return (
    <>
      <Slider images={sliderData?.map((item: any) => item.src) as string[]} />
      <Grid container spacing={2}>
        <Grid item xs={0} md={8}>
          <Grid container spacing={1}>
            {mealData?.categories.map((item: any) =>
              item.sub?.map((sub: any) =>
                sub.food.map((food: any) => (
                  <Grid item xs={12} md={6} key={food.id}>
                    <Card
                      showRemoveButton={
                        !!basket.find((x) => x.id == food.id)?.Count
                      }
                      image={food.img.replace("#SIZEOFIMAGE#", "560x350")}
                      title={food.title}
                      price={food.price.toString()}
                      onClick={() => router.push(`items/${food.id}`)}
                      onAddClick={() => handleAddToBasket(food)}
                      onRemoveClick={() => handleRemoveFromBasket(food.id)}
                    />
                  </Grid>
                ))
              )
            )}
          </Grid>
        </Grid>
        <Grid item xs={0} md={4}>
          <Checkout />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
