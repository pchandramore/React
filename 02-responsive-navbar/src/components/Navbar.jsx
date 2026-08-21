import { useState } from "react";
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
  SHOP DROPDOWN STATE
  ========================================================

  false → Shop dropdown closed
  true  → Shop dropdown open

  This is separate from isMenuOpen.

  isMenuOpen  → controls the entire mobile menu
  isShopOpen  → controls only the Shop dropdown
  */

  const [isShopOpen, setIsShopOpen] = useState(false);


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

        <div
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >
          MyBrand
        </div>


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
              text-gray-700
              transition
              hover:text-black
            "
          >
            Home
          </a>


          {/* ==================================================
              SHOP DROPDOWN
              ================================================== */}

          <div className="relative">

            {/* SHOP BUTTON */}

            <button
              type="button"

              onClick={() => {
                setIsShopOpen(!isShopOpen);
              }}

              className="
                flex
                items-center
                gap-1

                text-gray-700

                transition
                hover:text-black

                focus:outline-none
              "
            >

              Shop

              <ChevronDown
                size={18}

                className={`
                  transition-transform
                  duration-200

                  ${
                    isShopOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>


            {/* ==================================================
                DESKTOP DROPDOWN
                ================================================== */}

            {isShopOpen && (

              <div
                className="
                  absolute
                  left-0
                  top-full
                  z-50
                  mt-3
                  w-56

                  rounded-xl
                  border
                  bg-white
                  p-2

                  shadow-xl
                "
              >

                <a
                  href="#"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-3
                    text-gray-700

                    transition

                    hover:bg-gray-100
                    hover:text-black
                  "
                >
                  Jewellery
                </a>


                <a
                  href="#"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-3
                    text-gray-700

                    transition

                    hover:bg-gray-100
                    hover:text-black
                  "
                >
                  Rings
                </a>


                <a
                  href="#"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-3
                    text-gray-700

                    transition

                    hover:bg-gray-100
                    hover:text-black
                  "
                >
                  Necklaces
                </a>


                <a
                  href="#"
                  className="
                    block
                    rounded-lg
                    px-4
                    py-3
                    text-gray-700

                    transition

                    hover:bg-gray-100
                    hover:text-black
                  "
                >
                  Bracelets
                </a>

              </div>

            )}

          </div>


          {/* ABOUT */}

          <a
            href="#"
            className="
              text-gray-700
              transition
              hover:text-black
            "
          >
            About
          </a>


          {/* CONTACT */}

          <a
            href="#"
            className="
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
          type="button"

          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}

          className="
            rounded-lg
            p-2
            text-gray-700

            transition

            hover:bg-gray-100

            focus:outline-none
            focus:ring-2
            focus:ring-gray-400

            md:hidden
          "

          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
        >

          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>

      </div>


      {/* ==================================================
          MOBILE NAVIGATION
          ================================================== */}

      {isMenuOpen && (

        <div
          className="
            border-t
            bg-white
            px-6
            py-6

            md:hidden
          "
        >

          <div className="flex flex-col gap-5">

            {/* HOME */}

            <a
              href="#"

              onClick={() => {
                setIsMenuOpen(false);
              }}

              className="
                text-lg
                font-medium
                text-gray-700

                transition

                hover:text-black
              "
            >
              Home
            </a>


            {/* ==================================================
                MOBILE SHOP DROPDOWN
                ================================================== */}

            <div>

              {/* SHOP BUTTON */}

              <button
                type="button"

                onClick={() => {
                  setIsShopOpen(!isShopOpen);
                }}

                className="
                  flex
                  w-full
                  items-center
                  justify-between

                  text-lg
                  font-medium
                  text-gray-700

                  transition

                  hover:text-black
                "
              >

                <span>
                  Shop
                </span>


                <ChevronDown
                  size={20}

                  className={`
                    transition-transform
                    duration-200

                    ${
                      isShopOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* ==================================================
                  MOBILE SHOP ITEMS
                  ================================================== */}

              {isShopOpen && (

                <div
                  className="
                    mt-3
                    flex
                    flex-col
                    gap-3
                    border-l-2
                    border-gray-200
                    pl-4
                  "
                >

                  <a
                    href="#"

                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsShopOpen(false);
                    }}

                    className="
                      text-gray-600
                      hover:text-black
                    "
                  >
                    Jewellery
                  </a>


                  <a
                    href="#"

                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsShopOpen(false);
                    }}

                    className="
                      text-gray-600
                      hover:text-black
                    "
                  >
                    Rings
                  </a>


                  <a
                    href="#"

                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsShopOpen(false);
                    }}

                    className="
                      text-gray-600
                      hover:text-black
                    "
                  >
                    Necklaces
                  </a>


                  <a
                    href="#"

                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsShopOpen(false);
                    }}

                    className="
                      text-gray-600
                      hover:text-black
                    "
                  >
                    Bracelets
                  </a>

                </div>

              )}

            </div>


            {/* ABOUT */}

            <a
              href="#"

              onClick={() => {
                setIsMenuOpen(false);
              }}

              className="
                text-lg
                font-medium
                text-gray-700

                transition

                hover:text-black
              "
            >
              About
            </a>


            {/* CONTACT */}

            <a
              href="#"

              onClick={() => {
                setIsMenuOpen(false);
              }}

              className="
                text-lg
                font-medium
                text-gray-700

                transition

                hover:text-black
              "
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </nav>
  );
};

export default Navbar;