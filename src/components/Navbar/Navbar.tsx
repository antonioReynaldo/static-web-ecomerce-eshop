import ButtonTheme from "./ButtonTheme";
import { menuData } from "./menuData";
import { FaShoppingCart, FaSearch, FaCaretDown } from "react-icons/fa";
import { DrodownLinks } from "./dropdownData";

export default function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* navbar log and menu items */}
          <div className="flex gap-4 items-center">
            <div>
              <a href="#">
                <h1 className="text-primary text-2xl font-semibold tracking-widest uppercase sm:text-3xl">
                  ESHOP
                </h1>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuData.map((data) => (
                  <li
                    key={data.id}
                    className="text-gray-500 hover:text-black dark:hover:text-white font-semibold transition-all duration-200 px-4"
                  >
                    <a href={data.href}>{data.name}</a>
                  </li>
                ))}
                <li className="relative group gap-1 text-gray-500 hover:text-black dark:hover:text-white font-semibold cursor-pointer transition-all duration-200">
                  <a href="#" className="flex items-center gap-0.5 px-4">
                    Quick Links
                    <span>
                      <FaCaretDown className=" group-hover:rotate-180 duration-200" />
                    </span>
                  </a>
                  {/* Dropdown link */}
                  <div className="absolute z-20 hidden group-hover:block w-45 bg-white dark:bg-gray-900 shadow-md p-3 rounded-md">
                    <ul className="space-y-2">
                      {DrodownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200"
                          >
                            {data.name}{" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar section */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-0 group-hover:w-75 transition-all duration-200 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800 focus:border-primary dark:text-white"
              />
              <FaSearch className="text-xl group-hover:text-primary text-gray-600 group-hover:text-pretty dark:text-gray-400 absolute top-1/2 right-3 -translate-y-1/2   transition-all duration-200" />
            </div>
            {/* order-button section */}
            <button className="cursor-pointer relative p-3">
              <FaShoppingCart className="text-xl text-gray-600 hover:text-primary transition-all duration-150 dark:hover:text-white" />
              <div className="w-4 h-4 text-xs bg-primary text-white rounded-full absolute top-0 right-0 grid place-content-center ">
                3
              </div>
            </button>
            <ButtonTheme />
          </div>
        </div>
      </div>
    </div>
  );
}
