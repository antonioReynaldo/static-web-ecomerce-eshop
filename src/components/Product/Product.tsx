import CardProduct from "./CardProduct";
import { productData } from "./productData";

export default function Product() {
  return (
    <section className="pb-20 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold lg:text-4xl dark:text-white mb-1.5">
            Our Products
          </h2>
          <p className="text-xs text-gray-400">Explore Our Products</p>
        </div>
        {/* Grid cards container */}
        <div className="grid gap-5 grid-cols-[270px] sm:grid-cols-[repeat(2,260px)] md:grid-cols-[repeat(2,270px)] lg:grid-cols-[repeat(4,225px)] xl:grid-cols-[repeat(4,260px)] xl:gap-10  place-content-center">
          {productData.map((data) => (
            <CardProduct image={data.img} name={data.name} price={data.price} />
          ))}
        </div>
      </div>
    </section>
  );
}
