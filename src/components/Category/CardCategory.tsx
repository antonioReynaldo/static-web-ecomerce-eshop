import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";

type CardProps = HTMLAttributes<HTMLElement> & {
  subtitle: string;
  title: string;
  name: string;
  image: string;
};

export default function CardCategory({
  subtitle,
  title,
  name,
  image,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "p-7.5 bg-linear-to-br from-black/90 to-black/70 text-white rounded-3xl h-70",
        className,
      )}
      {...props}
    >
      <div className="h-full">
        <div className="flex h-full">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className="text-lg text-gray-400">{subtitle}</p>
            <p className="text-2xl font-bold">{title}</p>
            <h3 className="mb-2.5 text-3xl font-black opacity-50">{name}</h3>
            <Button variant="secondary" className="py-1 text-primary">
              Browse
            </Button>
          </div>
          <div className="w-37.5 h-37.5 flex flex-col justify-center sm:w-50 sm:h-50">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
}
