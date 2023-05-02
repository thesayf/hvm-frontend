import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@aws-amplify/ui-react/styles.css";
import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";

// const JitiModule = dynamic(() => import("jiti/dist/babel.js"), { ssr: false });
// const TwinMacro = dynamic(() => import("twin.macro/macro.js"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
