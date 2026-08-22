import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Heart,
  ShoppingBag,
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
  JEWELLERY PRODUCTS DATA
  ========================================================
  */

  const products = [
    {
      id: 1,
      name: "Classic Gold Necklace",
      category: "Gold Jewellery",
      image: "/jewellery/gold.jpg",
    },

    {
      id: 2,
      name: "Diamond Earrings",
      category: "Diamond Jewellery",
      image: "/jewellery/diamond.jpg",
    },

    {
      id: 3,
      name: "Bridal Gold Set",
      category: "Bridal Jewellery",
      image: "/jewellery/bridal.jpg",
    },

    {
      id: 4,
      name: "Gold Hoop Earrings",
      category: "Earrings",
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
  DESKTOP COLLECTIONS MENU STATE
  ========================================================

  false = desktop collections menu closed
  true  = desktop collections menu open
  */

  const [isCollectionsOpen, setIsCollectionsOpen] =
    useState(false);


  /*
  ========================================================
  MOBILE COLLECTIONS MENU STATE
  ========================================================

  false = mobile collections menu closed
  true  = mobile collections menu open
  */

  const [
    isMobileCollectionsOpen,
    setIsMobileCollectionsOpen,
  ] = useState(false);


  /*
  ========================================================
  SEARCH STATE
  ========================================================

  isSearchOpen
  ----------------
  Controls whether the search area is visible.


  searchQuery
  ----------------
  Stores what the user types into the search box.
  */

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");


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
  FILTER PRODUCTS
  ========================================================

  We search both:

  1. Product name
  2. Product category

  Example:

  "gold"

  can match:

  Classic Gold Necklace
  Bridal Gold Set
  Gold Hoop Earrings
  */

  const filteredProducts = products.filter(
    (product) => {

      const searchText =
        searchQuery.toLowerCase().trim();


      return (
        product.name
          .toLowerCase()
          .includes(searchText)

        ||

        product.category
          .toLowerCase()
          .includes(searchText)
      );

    }
  );


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
  TOGGLE DESKTOP COLLECTIONS
  ========================================================
  */

  const toggleCollections = () => {

    setIsCollectionsOpen((prev) => !prev);

  };


  /*
  ========================================================
  TOGGLE MOBILE COLLECTIONS
  ========================================================
  */

  const toggleMobileCollections = () => {

    setIsMobileCollectionsOpen(
      (prev) => !prev
    );

  };


  /*
  ========================================================
  TOGGLE SEARCH
  ========================================================
  */

  const toggleSearch = () => {

    setIsSearchOpen((prev) => !prev);

  };


  /*
  ========================================================
  CLOSE SEARCH
  ========================================================
  */

  const closeSearch = () => {

    setIsSearchOpen(false);

    setSearchQuery("");

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


          {/* ==================================================
              DESKTOP UTILITY ICONS
              ================================================== */}

          <div
            className="
              ml-2

              flex
              items-center
              gap-2

              border-l
              pl-6
            "
          >


            {/* SEARCH */}

            <button
              type="button"

              onClick={toggleSearch}

              aria-label="Search"

              className="
                rounded-full

                p-2

                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black

                focus:outline-none
                focus:ring-2
                focus:ring-gray-300
              "
            >

              <Search size={19} />

            </button>


            {/* ACCOUNT */}

            <button
              type="button"

              aria-label="Account"

              className="
                rounded-full

                p-2

                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black

                focus:outline-none
                focus:ring-2
                focus:ring-gray-300
              "
            >

              <User size={19} />

            </button>


            {/* WISHLIST */}

            <button
              type="button"

              aria-label="Wishlist"

              className="
                rounded-full

                p-2

                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black

                focus:outline-none
                focus:ring-2
                focus:ring-gray-300
              "
            >

              <Heart size={19} />

            </button>


            {/* CART */}

            <button
              type="button"

              aria-label="Shopping cart"

              className="
                rounded-full

                p-2

                text-gray-700

                transition

                hover:bg-gray-100
                hover:text-black

                focus:outline-none
                focus:ring-2
                focus:ring-gray-300
              "
            >

              <ShoppingBag size={19} />

            </button>

          </div>

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
          SEARCH AREA
          ================================================== */}

      <div
        className={`
          overflow-hidden

          border-t

          bg-white

          transition-all
          duration-300

          ${
            isSearchOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        {/* ==================================================
            SEARCH INPUT ROW
            ================================================== */}

        <div
          className="
            mx-auto

            flex
            max-w-7xl
            items-center
            gap-3

            px-6
            py-4
          "
        >


          {/* SEARCH ICON */}

          <Search
            size={20}

            className="
              shrink-0

              text-gray-500
            "
          />


          {/* SEARCH INPUT */}

          <input
            type="text"

            value={searchQuery}

            onChange={(e) =>
              setSearchQuery(e.target.value)
            }

            placeholder="Search jewellery..."

            className="
              w-full

              border-none

              bg-transparent

              text-sm
              text-gray-900

              outline-none

              placeholder:text-gray-400
            "
          />


          {/* CLOSE SEARCH */}

          <button
            type="button"

            onClick={closeSearch}

            aria-label="Close search"

            className="
              rounded-full

              p-2

              text-gray-500

              transition

              hover:bg-gray-100
              hover:text-black

              focus:outline-none
            "
          >

            <X size={18} />

          </button>

        </div>


        {/* ==================================================
            SEARCH RESULTS
            ================================================== */}

        {isSearchOpen && searchQuery && (

          <div
            className="
              mx-auto

              max-w-7xl

              px-6

              pb-4
            "
          >

            {filteredProducts.length > 0 ? (

              <div
                className="
                  grid

                  gap-3

                  sm:grid-cols-2
                "
              >

                {filteredProducts.map((product) => (

                  <a
                    key={product.id}

                    href="#"

                    className="
                      flex

                      items-center

                      gap-3

                      rounded-lg

                      border

                      p-3

                      transition

                      hover:bg-gray-50
                    "
                  >

                    {/* PRODUCT IMAGE */}

                    <img
                      src={product.image}

                      alt={product.name}

                      className="
                        h-14
                        w-14

                        shrink-0

                        rounded-lg

                        object-cover
                      "
                    />


                    {/* PRODUCT INFORMATION */}

                    <div>

                      <h3
                        className="
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {product.name}
                      </h3>


                      <p
                        className="
                          text-xs
                          text-gray-500
                        "
                      >
                        {product.category}
                      </p>

                    </div>

                  </a>

                ))}

              </div>

            ) : (

              <p
                className="
                  py-2

                  text-sm

                  text-gray-500
                "
              >
                No jewellery found.
              </p>

            )}

          </div>

        )}

      </div>


      {/* ==================================================
          MOBILE NAVIGATION
          ================================================== */}

      <div
        className={
          isMenuOpen
            ? "max-h-[900px] overflow-hidden border-t bg-white opacity-100 transition-all duration-300 ease-in-out md:hidden"
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
                MOBILE COLLECTIONS
                ================================================== */}

            <div className="w-full">


              {/* COLLECTIONS BUTTON */}

              <button
                type="button"

                onClick={toggleMobileCollections}

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
                    isMobileCollectionsOpen
                      ? "rotate-180 transition-transform duration-200"
                      : "rotate-0 transition-transform duration-200"
                  }
                />

              </button>


              {/* ==================================================
                  MOBILE COLLECTIONS SUBMENU
                  ================================================== */}

              <div
                className={
                  isMobileCollectionsOpen
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

                      {/* IMAGE */}

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


                      {/* CONTENT */}

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


            {/* ==================================================
                MOBILE UTILITY MENU
                ================================================== */}

            <div
              className="
                mt-2

                border-t

                pt-2
              "
            >


              {/* SEARCH */}

              <button
                type="button"

                onClick={toggleSearch}

                className="
                  flex
                  w-full

                  items-center
                  gap-3

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

                <Search size={19} />

                <span>
                  Search
                </span>

              </button>


              {/* ACCOUNT */}

              <button
                type="button"

                className="
                  flex
                  w-full

                  items-center
                  gap-3

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

                <User size={19} />

                <span>
                  Account
                </span>

              </button>


              {/* WISHLIST */}

              <button
                type="button"

                className="
                  flex
                  w-full

                  items-center
                  gap-3

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

                <Heart size={19} />

                <span>
                  Wishlist
                </span>

              </button>


              {/* CART */}

              <button
                type="button"

                className="
                  flex
                  w-full

                  items-center
                  gap-3

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

                <ShoppingBag size={19} />

                <span>
                  Cart
                </span>

              </button>

            </div>

          </nav>

        </div>

      </div>

    </nav>
  );
};


export default Navbar;
