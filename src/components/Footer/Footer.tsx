import Button from "../ui/Button";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="pb-20 pt-5 dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          <div className="py-6 px-4 sm:col-span-3 lg:col-span-1">
            <h2 className="mb-3">
              <a href="#" className="text-2xl font-bold text-primary">
                ESHOP
              </a>
            </h2>
            <p className="text-gray-600 mb-3 dark:text-white/70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mb-5">
              Made with 💖 by Elias Paredes Torres
            </p>
            <Button>
              <a
                href="https://www.youtube.com/@Proyecto-Dev"
                className="font-medium text-sm"
              >
                YouTube Channel
              </a>
            </Button>
          </div>
          <div className="py-6 px-4 flex gap-4 sm:col-span-2">
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-3">Important Links</h3>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6 px-4">
            <h2 className="font-semibold text-xl mb-3">Address</h2>

            <div className="flex flex-col gap-3 dark:text-white/70">
              <div className="flex gap-3 items-center">
                <FaLocationArrow />
                <p>Perú</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaMobileAlt />
                <p>+51 900234981</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.youtube.com/@Proyecto-Dev">
                  <FaYoutube className="text-3xl" />
                </a>
                <a href="https://github.com/antonioReynaldo">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="www.linkedin.com/in/eliaspredestorres">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
