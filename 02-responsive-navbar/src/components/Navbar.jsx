
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

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

  false = mobile menu closed
  true  = mobile menu open
  */

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  /*
  ========================================================
  COLLECTIONS MENU STATE
  ========================================================

  false = collections menu closed
  true  = collections menu open
  */

  const [isCollectionsOpen, setIsCollectionsOpen] =
    useState(false);


  /*
  ========================================================
  DESKTOP COLLECTIONS REF
  ========================================================
  */

  const desktopCollectionsRef = useRef(null);


  /*
  ========================================================
  CLOSE DESKTOP COLLECTIONS WHEN CLICKING OUTSIDE
  ========================================================
  */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        desktopCollectionsRef.current &&
        !desktopCollectionsRef.current.contains(
          event.target
        )
      ) {
        setIsCollectionsOpen(false);
      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


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
              DESKTOP COLLECTIONS
              ================================================== */}

          <div
            ref={desktopCollectionsRef}
            className="relative"
          >


            {/* COLLECTIONS BUTTON */}

            <button
              type="button"

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

                className={
                  isCollectionsOpen
                    ? "rotate-180 transition-transform duration-200"
                    : "rotate-0 transition-transform duration-200"
                }
              />

            </button>


            {/* ==================================================
                DESKTOP MEGA MENU
                ================================================== */}

            <div
              className={
                isCollectionsOpen
                  ? "visible absolute left-1/2 top-full z-50 mt-4 w-[700px] -translate-x-1/2 translate-y-0 rounded-2xl border bg-white p-4 opacity-100 shadow-2xl transition-all duration-200"
                  : "invisible absolute left-1/2 top-full z-50 mt-4 w-[700px] -translate-x-1/2 -translate-y-2 rounded-2xl border bg-white p-4 opacity-0 shadow-2xl transition-all duration-200"
              }
            >

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

                    {/* IMAGE */}

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


                    {/* CONTENT */}

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
          type="button"

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
        className={
          isMenuOpen
            ? "max-h-[700px] overflow-hidden border-t bg-white opacity-100 transition-all duration-300 ease-in-out md:hidden"
            : "max-h-0 overflow-hidden border-t bg-white opacity-0 transition-all duration-300 ease-in-out md:hidden"
        }
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
                flex
                w-full
                items-center

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
                COLLECTIONS
                ================================================== */}

            <div className="w-full">


              {/* ==================================================
                  COLLECTIONS BUTTON
                  ================================================== */}

              <button
                type="button"

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

                  className={
                    isCollectionsOpen
                      ? "rotate-180 transition-transform duration-200"
                      : "rotate-0 transition-transform duration-200"
                  }
                />

              </button>


              {/* ==================================================
                  COLLECTIONS SUBMENU
                  ================================================== */}

              <div
                className={
                  isCollectionsOpen
                    ? "max-h-[500px] overflow-hidden opacity-100 transition-all duration-300"
                    : "max-h-0 overflow-hidden opacity-0 transition-all duration-300"
                }
              >

                <div
                  className="
                    ml-4
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
                flex
                w-full
                items-center

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
                flex
                w-full
                items-center

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

