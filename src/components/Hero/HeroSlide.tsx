import { heroData } from "./heroData";

export default function HeroSlide() {
  return heroData.map((data) => (
    <div>
      <div>
        <h1>{data.subTitle}</h1>
        <h1>{data.title}</h1>
        <h1>{data.title2}</h1>
      </div>
      <div>
        <img src={data.img} alt={data.title} />
      </div>
    </div>
  ));
}
