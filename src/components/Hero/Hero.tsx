import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { heroData } from "./heroData";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="dark:bg-gray-900 pb-8">
      <div className="container ">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="bg-linear-to-r from-gray-300/80 to-gray-100 dark:from-gray-800 dark:to-gray-800 dark:text-white rounded-2xl min-h-137.5 sm:min-h-162.5 "
        >
          {heroData.map((data) => (
            <SwiperSlide key={data.title}>
              <div className="h-full min-h-137.5 sm:min-h-162.5 grid grid-cols-1 sm:grid-cols-2 relative p-4 md:p-14 mb-7">
                <div className="place-content-center flex flex-col gap-4 font-display order-2 sm:order-1 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    {data.subTitle}
                  </h1>
                  <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-bold text-primary">
                    {data.title}
                  </h1>
                  <h1 className="uppercase font-bold text-[clamp(2.5rem,5.5vw,12rem)] text-white dark:text-white/30 text-shadow-xs text-shadow-black">
                    {data.title2}
                  </h1>
                  <Button className="mx-auto sm:mx-0">Shop by category</Button>
                </div>

                <div className="w-62.5 h-62.5 sm:w-87.5 sm:h-87.5 xl:w-115 xl:h-115 place-self-center order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
