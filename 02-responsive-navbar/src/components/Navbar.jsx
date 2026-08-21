import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  /*
  ========================================================
  MOBILE MENU STATE
  ========================================================

  isMenuOpen
  → stores whether the mobile menu is open.

  false
  → menu is closed

  true
  → menu is open

  setIsMenuOpen()
  → changes the state.
  */

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  /*
  ========================================================
  TOGGLE MOBILE MENU
  ========================================================

  If the menu is closed:
  false → true

  If the menu is open:
  true → false

  The ! operator reverses the current value.
  */

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
            ==================================================

            hidden
            → hidden by default

            md:flex
            → becomes flex from medium screens
              and above.

            Therefore:

            Mobile:
            navigation hidden

            Desktop:
            navigation visible
        */}

        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

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
            Services
          </a>

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
            ==================================================

            md:hidden
            → button disappears on desktop.

            Therefore:

            Mobile:
            hamburger visible

            Desktop:
            hamburger hidden
        */}

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
          ==================================================

          We only display this when:

          isMenuOpen === true

          The && operator means:

          condition && JSX

          If condition is true:
          render JSX

          If condition is false:
          render nothing.
      */}

      {isMenuOpen && (

        <div
          className="
            border-t
            bg-white
            md:hidden
          "
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
                Services
              </a>


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

      )}

    </nav>
  );
};

export default Navbar;