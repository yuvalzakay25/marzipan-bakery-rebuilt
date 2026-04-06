import Hero from "../../components/Hero/Hero.jsx";
import Process from "../../components/Process/Process.jsx";
import About from "../../components/About/About.jsx";
import ProductsHome from "../../components/ProductsHome/ProductsHome.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

function HomePage() {
  return (
    <>
    <PageTitle title="בית - מאפיית מרציפן" />
      <Hero />
      <Process />
      <About />
      <ProductsHome />
    </>
  );
}

export default HomePage;