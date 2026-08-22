import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {

  /*
  ========================================================
  JEWELLERY COLLECTIONS DATA
  ========================================================

  We store our collection information in an array.

  Instead of writing the same JSX repeatedly,
  we can use:

  collections.map(...)

  This makes the navbar easier to maintain.
  */

  const collections = [
    {
      title: "Gold Jewellery",
      description:
        "Timeless gold jewellery for every occasion.",
      image: "/jewellery/gold.jpg",
    },

    {
      title: "Diamond Jewellery",
      description:
        "Elegant diamond pieces crafted to shine.",
      image: "/jewellery/diamond.jpg",
    },

    {
      title: "Bridal Jewellery",
      description:
        "Statement jewellery for your special day.",
      image: "/jewellery/bridal.jpg",
    },

    {
      title: "Earrings",
      description:
        "Elegant earrings for every occasion.",
      image: "/jewellery/earrings.jpg",
    },
  ];


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
  COLLECTIONS DROPDOWN STATE
  ========================================================

  false → Collections dropdown closed
  true  → Collections dropdown open
  */

  const [isCollectionsOpen, setIsCollectionsOpen] =
    useState(false);


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
  TOGGLE COLLECTIONS MENU
  ========================================================
  */

  const toggleCollections = () => {
    setIsCollectionsOpen((prev) => !prev);
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

          {/* ==================================================
              HOME
              ================================================== */}

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


          {/* ==================================================
              COLLECTIONS
              ================================================== */}

          <div className="relative">

            {/* Collections button */}

            <button
              onClick={toggleCollections}

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

              Collections

              <ChevronDown
                size={16}

                className={`
                  transition-transform
                  duration-200

                  ${
                    isCollectionsOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              />

            </button>


            {/* ==================================================
                DESKTOP COLLECTIONS MEGA MENU
                ================================================== */}

            <div
              className={`
                absolute
                left-1/2
                top-full
                z-50

                mt-4

                w-[700px]
                -translate-x-1/2

                rounded-2xl
                border
                bg-white
                p-4
                shadow-2xl

                transition-all
                duration-200

                ${
                  isCollectionsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >

              {/* ==================================================
                  COLLECTION GRID
                  ================================================== */}

              <div className="grid grid-cols-2 gap-4">

                {collections.map((collection) => (

                  <a
                    key={collection.title}
                    href="#"

                    className="
                      group
                      flex
                      gap-4

                      rounded-xl
                      p-3

                      transition

                      hover:bg-gray-100
                    "
                  >

                    {/* ==================================================
                        COLLECTION IMAGE
                        ================================================== */}

                    <img
                      src={collection.image}
                      alt={collection.title}

                      className="
                        h-20
                        w-20
                        shrink-0

                        rounded-lg

                        object-cover

                        transition
                        duration-300

                        group-hover:scale-105
                      "
                    />


                    {/* ==================================================
                        COLLECTION CONTENT
                        ================================================== */}

                    <div>

                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-gray-900
                        "
                      >
                        {collection.title}
                      </h3>


                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-gray-500
                        "
                      >
                        {collection.description}
                      </p>

                    </div>

                  </a>

                ))}

              </div>

            </div>

          </div>


          {/* ==================================================
              ABOUT
              ================================================== */}

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
              CONTACT
              ================================================== */}

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
              ? "max-h-[700px] opacity-100"
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

            {/* ==================================================
                HOME
                ================================================== */}

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


            {/* ==================================================
                MOBILE COLLECTIONS
                ================================================== */}

            <div>

              {/* Collections button */}

              <button
                onClick={toggleCollections}

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
                  Collections
                </span>


                <ChevronDown
                  size={18}

                  className={`
                    transition-transform
                    duration-200

                    ${
                      isCollectionsOpen
                        ? "rotate-180"
                        : "rotate-0"
                    }
                  `}
                />

              </button>


              {/* ==================================================
                  MOBILE COLLECTIONS SUBMENU
                  ================================================== */}

              <div
                className={`
                  overflow-hidden

                  transition-all
                  duration-300

                  ${
                    isCollectionsOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    ml-4
                    space-y-2
                    border-l
                    pl-4
                  "
                >

                  {collections.map((collection) => (

                    <a
                      key={collection.title}
                      href="#"

                      className="
                        group
                        flex
                        items-center
                        gap-3

                        rounded-lg
                        p-2

                        transition

                        hover:bg-gray-100
                      "
                    >

                      {/* ==================================================
                          MOBILE COLLECTION IMAGE
                          ================================================== */}

                      <img
                        src={collection.image}
                        alt={collection.title}

                        className="
                          h-12
                          w-12
                          shrink-0

                          rounded-lg

                          object-cover
                        "
                      />


                      {/* ==================================================
                          MOBILE COLLECTION CONTENT
                          ================================================== */}

                      <div>

                        <h3
                          className="
                            text-sm
                            font-medium
                            text-gray-800
                          "
                        >
                          {collection.title}
                        </h3>


                        <p
                          className="
                            text-xs
                            text-gray-500
                          "
                        >
                          {collection.description}
                        </p>

                      </div>

                    </a>

                  ))}

                </div>

              </div>

            </div>


            {/* ==================================================
                ABOUT
                ================================================== */}

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
                CONTACT
                ================================================== */}

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