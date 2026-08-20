import CardCategory from "./CardCategory";
import Img1 from "../../assets/category2/earphones.png";
import Img2 from "../../assets/category2/gadget.png";
import Img3 from "../../assets/category2/laptop2.png";
import Img4 from "../../assets/category2/consola.png";
import Img5 from "../../assets/category2/vr.png";
import Img6 from "../../assets/category2/speaker.png";

export default function Category() {
  return (
    <section className="dark:bg-gray-900 pb-20">
      <div className="container">
        {/* Grid container cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* Card 1 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="Earphone"
            image={Img1}
            className="lg:col-span-2 xl:col-span-1"
          ></CardCategory>
          {/* Card 2 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="Gatget"
            image={Img2}
            className="bg-linear-to-br from-brandYellow to-brandYellow/90 lg:col-span-2 xl:col-span-1"
          ></CardCategory>
          {/* Card 3 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="Laptop"
            image={Img3}
            className="bg-linear-to-br from-brandRed to-brandRed/80 sm:col-span-2"
          ></CardCategory>
          {/* Card 4 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="Console"
            image={Img4}
            className="bg-linear-to-br from-brandGray to-brandGray/40 sm:col-span-2"
          ></CardCategory>
          {/* Card 5 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="VR"
            image={Img5}
            className="bg-linear-to-br from-brandBlue to-brandBlue/80 lg:col-span-2 xl:col-span-1"
          ></CardCategory>
          {/* Card 6 */}
          <CardCategory
            title="With"
            subtitle="Enjoy"
            name="Speakers"
            image={Img6}
            className="bg-linear-to-br from-brandGreen to-brandGreen/80 lg:col-span-2 xl:col-span-1"
          ></CardCategory>
        </div>
      </div>
    </section>
  );
}
