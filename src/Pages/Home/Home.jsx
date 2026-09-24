import Discover from "../../Components/HomeComponents/Discover";
import Hero from "../../Components/HomeComponents/Hero";
import SelectedArticles from "../../Components/HomeComponents/SelectedArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedArticles />
      <Discover/>
    </>
  );
}
