import { useTheme } from "../../hooks/useTheme";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl cursor-pointer text-gray-600 font-bold hover:text-primary transition-all duration-150 dark:hover:text-white"
    >
      {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
}
