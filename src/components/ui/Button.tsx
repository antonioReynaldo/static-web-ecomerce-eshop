import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-5 py-2 w-fit font-bold hover:scale-110 transition-all  duration-200 cursor-pointer",
        variant === "primary" && "bg-brandRed text-white",
        variant === "secondary" && "bg-white text-brandBlack",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
