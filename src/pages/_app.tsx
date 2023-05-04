import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import "tailwindcss/tailwind.css";
import CityCard from "@/components/CityCard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <CityCard />
    </>
  );
}
