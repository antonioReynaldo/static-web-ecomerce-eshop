type CardBlogProps = {
  image: string;
  date: string;
  title: string;
  text: string;
};

export default function CardBlog({ image, date, title, text }: CardBlogProps) {
  return (
    <div data-aos="fade-down">
      <div className="mb-2 ">
        <img
          src={image}
          alt="Imagen de blog"
          className="rounded-2xl w-full h-55 object-cover hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-gray-500 mb-1.5">{date}</p>
        <h3 className="font-bold dark:text-white text-xl">{title}</h3>
        <p className=" text-gray-400">{text}</p>
      </div>
    </div>
  );
}
