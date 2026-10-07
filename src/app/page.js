import { HomeClient } from "./home-client";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <HomeClient />
    </>
  );
}
