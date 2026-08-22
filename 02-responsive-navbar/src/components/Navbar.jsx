import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {

  /*
  ========================================================
  MOBILE MENU STATE
  ========================================================

  false → mobile menu closed
  true  → mobile menu open
  */

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  /*
  ========================================================
  SERVICES DROPDOWN STATE
  ========================================================

  This controls the nested Services menu.

  false → Services dropdown closed
  true  → Services dropdown open
  */

  const [isServicesOpen, setIsServicesOpen] = useState(false);


  /*
  ========================================================
  TOGGLE MOBILE MENU
  ========================================================
  */

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  /*
  ========================================================
  TOGGLE SERVICES MENU
  ========================================================
  */

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };


  return (
    <nav className="border-b bg-white">

      {/* ==================================================
          NAVBAR CONTAINER
          ================================================== */}

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >

        {/* ==================================================
            LOGO
            ================================================== */}

        <a
          href="/"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          MyBrand
        </a>


        {/* ==================================================
            DESKTOP NAVIGATION
            ================================================== */}

        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

          {/* HOME */}

          <a
            href="#"
            className="
              text-sm
              font-medium
              text-gray-700
              transition
              hover:text-black
            "
          >
            Home
          </a>


          {/* ABOUT */}

          <a
            href="#"
            className="
              text-sm
              font-medium
              text-gray-700
              transition
              hover:text-black
            "
          >
            About
          </a>


          {/* ==================================================
              DESKTOP SERVICES DROPDOWN
              ================================================== */}

          <div className="relative">

            {/* Services button */}

            <button
              onClick={toggleServices}

              className="
                flex
                items-center
                gap-1

                text-sm
                font-medium
                text-gray-700

                transition

                hover:text-black

                focus:outline-none
              "
            >

              Services

              <ChevronDown
                size={16}

                className={`
                  transition-transform
                  duration-200

                  ${
                    isServicesOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              />

            </button>


            {/* ==================================================
                DESKTOP DROPDOWN
                ================================================== */}

            <div
              className={`
                absolute
                left-1/2
                top-full
                z-50
                mt-4
                w-56
                -translate-x-1/2

                rounded-xl
                border
                bg-white
                p-2
                shadow-xl

                transition-all
                duration-200

                ${
                  isServicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >

              <a
                href="#"
                className="
                  block
                  rounded-lg
                  px-4
                  py-3

                  text-sm
                  font-medium
                  text-gray-700

                  transition

                  hover:bg-gray-100
                  hover:text-black
                "
              >
                Web Development
              </a>


              <a
                href="#"
                className="
                  block
                  rounded-lg
                  px-4
                  py-3

                  text-sm
                  font-medium
                  text-gray-700

                  transition

                  hover:bg-gray-100
                  hover:text-black
                "
              >
                Mobile Development
              </a>


              <a
                href="#"
                className="
                  block
                  rounded-lg
                  px-4
                  py-3

                  text-sm
                  font-medium
                  text-gray-700

                  transition

                  hover:bg-gray-100
                  hover:text-black
                "
              >
                UI/UX Design
              </a>

            </div>

          </div>


          {/* CONTACT */}

          <a
            href="#"
            className="
              text-sm
              font-medium
              text-gray-700
              transition
              hover:text-black
            "
          >
            Contact
          </a>

        </div>


        {/* ==================================================
            MOBILE MENU BUTTON
            ================================================== */}

        <button
          onClick={toggleMenu}

          className="
            rounded-lg
            p-2
            text-gray-700

            transition

            hover:bg-gray-100
            hover:text-black

            focus:outline-none
            focus:ring-2
            focus:ring-gray-400

            md:hidden
          "

          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }

          aria-expanded={isMenuOpen}
        >

          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}

        </button>

      </div>


      {/* ==================================================
          MOBILE NAVIGATION
          ================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          bg-white

          transition-all
          duration-300
          ease-in-out

          md:hidden

          ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-4
          "
        >

          <nav className="flex flex-col">

            {/* HOME */}

            <a
              href="#"
              className="
                rounded-lg
                px-4
                py-3

                text-sm
                font-medium
                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black
              "
            >
              Home
            </a>


            {/* ABOUT */}

            <a
              href="#"
              className="
                rounded-lg
                px-4
                py-3

                text-sm
                font-medium
                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black
              "
            >
              About
            </a>


            {/* ==================================================
                MOBILE SERVICES
                ================================================== */}

            <div>

              {/* Services button */}

              <button
                onClick={toggleServices}

                className="
                  flex
                  w-full
                  items-center
                  justify-between

                  rounded-lg
                  px-4
                  py-3

                  text-sm
                  font-medium
                  text-gray-700

                  transition

                  hover:bg-gray-100
                  hover:text-black
                "
              >

                <span>
                  Services
                </span>


                <ChevronDown
                  size={18}

                  className={`
                    transition-transform
                    duration-200

                    ${
                      isServicesOpen
                        ? "rotate-180"
                        : "rotate-0"
                    }
                  `}
                />

              </button>


              {/* ==================================================
                  MOBILE SERVICES SUBMENU
                  ================================================== */}

              <div
                className={`
                  overflow-hidden

                  transition-all
                  duration-200

                  ${
                    isServicesOpen
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >

                <div className="ml-4 border-l pl-4">

                  <a
                    href="#"
                    className="
                      block
                      rounded-lg
                      px-4
                      py-2

                      text-sm
                      text-gray-600

                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Web Development
                  </a>


                  <a
                    href="#"
                    className="
                      block
                      rounded-lg
                      px-4
                      py-2

                      text-sm
                      text-gray-600

                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    Mobile Development
                  </a>


                  <a
                    href="#"
                    className="
                      block
                      rounded-lg
                      px-4
                      py-2

                      text-sm
                      text-gray-600

                      hover:bg-gray-100
                      hover:text-black
                    "
                  >
                    UI/UX Design
                  </a>

                </div>

              </div>

            </div>


            {/* CONTACT */}

            <a
              href="#"
              className="
                rounded-lg
                px-4
                py-3

                text-sm
                font-medium
                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black
              "
            >
              Contact
            </a>

          </nav>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;