import Discover from "../../Components/HomeComponents/Discover";
import Hero from "../../Components/HomeComponents/Hero";
import SelectedArticles from "../../Components/HomeComponents/SelectedArticles";
import Subscription from "../../Components/HomeComponents/Subscription";
import LatestArticles from "./../../Components/HomeComponents/LatestArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedArticles />
      <Discover />
      <LatestArticles />
      <Subscription />
    </>
  );
}
