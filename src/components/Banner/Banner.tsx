import Button from "../ui/Button";

type BannerProps = {
  data: {
    discount: string;
    title: string;
    date: string;
    image: string;
    title2: string;
    title3: string;
    title4: string;
    bgColor: string;
  };
};

export default function Banner({ data }: BannerProps) {
  return (
    <section className="pb-20 dark:bg-gray-900">
      <div className="container">
        <div
          style={{ backgroundColor: `${data.bgColor}` }}
          className="rounded-3xl text-white grid grid-cols-1 md:grid-cols-3"
        >
          <div
            data-aos="fade-down"
            className="flex flex-col gap-0.5 p-6 place-content-center"
          >
            <p className="text-sm sm:text-lg">{data.discount}</p>
            <h3 className="text-4xl font-bold uppercase lg:text-5xl xl:text-6xl 2xl:text-7xl">
              {data.title}
            </h3>
            <p className="text-sm sm:text-lg">{data.date}</p>
          </div>
          <div className="place-content-center">
            <img
              data-aos="zoom-in"
              src={data.image}
              alt="Headphone black and red"
              className="w-62.5 scale-125 object-cover mx-auto md:w-85"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 p-6 lg:place-content-center"
          >
            <h4 className="text-xl font-semibold">{data.title2}</h4>
            <h3 className="text-3xl font-bold sm:text-5xl">{data.title3}</h3>
            <p className="text-sm lg:text-base">{data.title4}</p>
            <Button
              style={{ color: `${data.bgColor}` }}
              className="bg-white font-normal"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
