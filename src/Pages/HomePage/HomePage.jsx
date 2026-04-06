import Hero from "../../components/Hero/Hero";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import ProductsHome from "../../components/ProductsHome/ProductsHome";
import PageTitle from "../../components/PageTitle/PageTitle";

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