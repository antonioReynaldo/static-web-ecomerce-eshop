import { useTheme } from "../../hooks/useTheme";
import { CiSun, CiDark } from "react-icons/ci";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <button
      onClick={toggleTheme}
      className="text-3xl cursor-pointer hover:text-primary transition-all duration-150"
    >
      {theme === "light" ? <CiSun /> : <CiDark />}
    </button>
  );
}
