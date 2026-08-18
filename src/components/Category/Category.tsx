import Button from "../ui/Button";
import Img1 from "../../assets/category2/earphones.png";

export default function Category() {
  return (
    <section className="dark:bg-gray-900 pb-8">
      <div className="container">
        {/* Grid container cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* Card 1 */}
          <div className="p-5 bg-linear-to-br from-black/90 to-black/70 text-white rounded-3xl">
            <div className="">
              <div className="flex">
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <p>Enjoy</p>
                  <p>With</p>
                  <h3 className="mb-2.5">Earphone</h3>
                  <Button className="py-1">Browse</Button>
                </div>
                <div className="w-[150px] h-[150px]">
                  <img src={Img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
