import Image from "next/image";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";

const inter = Inter({ subsets: ["latin"] });

Amplify.configure({
  aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
  aws_appsync_region: "eu-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-fakeApiId123456",
});

export default function Home() {
  return <h1>Home</h1>;
}
