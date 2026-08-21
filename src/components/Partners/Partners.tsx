import Partner1 from "../../assets/brand/br-1.png";
import Partner2 from "../../assets/brand/br-2.png";
import Partner3 from "../../assets/brand/br-3.png";
import Partner4 from "../../assets/brand/br-4.png";
import Partner5 from "../../assets/brand/br-5.png";

export default function Partners() {
  return (
    <section className="bg-gray-200 dark:bg-gray-700">
      <div className="container py-8">
        <div className="grid grid-cols-3 gap-5 place-content-center sm:grid-cols-5 opacity-50">
          <div className="place-items-center col-span-3 sm:col-span-1 sm:place-items-center">
            <img
              src={Partner1}
              alt="Brand Golden"
              className="place-content-center dark:invert w-20 lg:w-25"
            />
          </div>
          <div className="place-content-center sm:place-items-center">
            <img
              src={Partner2}
              alt="Brand Jack Roller 2"
              className="place-items-center dark:invert w-20 lg:w-25"
            />
          </div>

          <div className="place-content-center sm:place-items-center">
            <img
              src={Partner3}
              alt="Brand Sweety"
              className=" dark:invert w-20 lg:w-25"
            />
          </div>
          <div className="place-content-center sm:place-items-center">
            <img
              src={Partner4}
              alt="Brand Mighty Furnitures"
              className="place-items-center dark:invert w-20 lg:w-25"
            />
          </div>
          <div className="place-items-center col-span-3 sm:col-span-1 sm:place-items-center">
            <img
              src={Partner5}
              alt="Brand Fatslane"
              className="place-content-center dark:invert w-20 lg:w-25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
