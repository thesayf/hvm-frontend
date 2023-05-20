import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import "tailwindcss/tailwind.css";
import CityCard from "@/components/CityCard";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { listCityPrices } from "../../../hvm-api/src/graphql/queries";

export default function App({ Component, pageProps }: AppProps) {
  const getCities = async () => {
    const cities = await Amplify.API.graphql({
      query: listCityPrices,
    });
    console.log(cities);
  };
  getCities();
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <CityCard />
    </>
  );
}
