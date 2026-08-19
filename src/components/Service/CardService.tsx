import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";

type CardServiceProps = HTMLAttributes<HTMLElement> & {
  icon: IconType;
  title: string;
  text: string;
};

export default function CardService({
  icon: Icon,
  title,
  text,
}: CardServiceProps) {
  return (
    <div className="shadow-md rounded-2xl p-2.5">
      <div className="flex flex-col gap-2">
        <Icon className="text-primary text-2xl sm:text-4xl lg:text-5xl mb-2.5" />
        <h3 className="font-bold  lg:text-lg">{title}</h3>
        <p className="text-gray-500 text-xs md:text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
}
