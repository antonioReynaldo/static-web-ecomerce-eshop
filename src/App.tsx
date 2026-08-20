import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import { bannerData1 } from "./components/Banner/bannerData";
import { bannerData2 } from "./components/Banner/bannerData";
import Banner from "./components/Banner/Banner";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Category />
        <Service />
        <Banner data={bannerData1} />
        <Product />
        <Banner data={bannerData2} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
