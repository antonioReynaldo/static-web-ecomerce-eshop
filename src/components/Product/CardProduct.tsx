import Button from "../ui/Button";

type CardProductProps = {
  image: string;
  name: string;
  price: string;
};

export default function CardProduct({ image, name, price }: CardProductProps) {
  return (
    <div className="group shadow-md rounded-md overflow-hidden dark:bg-gray-700">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full rounded-t-md object-cover"
        />
        <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-1/2 group-hover:backdrop-blur-sm w-full h-full rounded-md justify-center items-center duration-200">
          <Button variant="primary">Add to cart</Button>
        </div>
      </div>
      <div className="font-bold dark:text-white p-3 ">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
