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
      price: 2500,
      image: "/jewellery/gold.jpg",
    },

    {
      id: 2,
      name: "Diamond Earrings",
      category: "Diamond Jewellery",
      price: 4200,
      image: "/jewellery/diamond.jpg",
    },

    {
      id: 3,
      name: "Bridal Gold Set",
      category: "Bridal Jewellery",
      price: 8500,
      image: "/jewellery/bridal.jpg",
    },

    {
      id: 4,
      name: "Gold Hoop Earrings",
      category: "Earrings",
      price: 1800,
      image: "/jewellery/earrings.jpg",
    },
  ];


  /*
  ========================================================
  MOBILE MENU STATE
  ========================================================
  */

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);


  /*
  ========================================================
  DESKTOP COLLECTIONS MENU STATE
  ========================================================
  */

  const [isCollectionsOpen, setIsCollectionsOpen] =
    useState(false);


  /*
  ========================================================
  MOBILE COLLECTIONS MENU STATE
  ========================================================
  */

  const [
    isMobileCollectionsOpen,
    setIsMobileCollectionsOpen,
  ] = useState(false);


  /*
  ========================================================
  SEARCH STATE
  ========================================================
  */

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");


  /*
  ========================================================
  ACCOUNT STATE
  ========================================================
  */

  const [isAccountOpen, setIsAccountOpen] =
    useState(false);


  /*
  ========================================================
  WISHLIST STATE
  ========================================================
  */

  const [wishlist, setWishlist] =
    useState([]);


  /*
  ========================================================
  CART STATE
  ========================================================

  cart will contain products that the customer
  wants to purchase.

  Example:

  [
    {
      id: 1,
      name: "Classic Gold Necklace",
      price: 2500,
      quantity: 1
    }
  ]
  */

  const [cart, setCart] =
    useState([]);


  /*
  ========================================================
  WISHLIST PANEL STATE
  ========================================================
  */

  const [isWishlistOpen, setIsWishlistOpen] =
    useState(false);


  /*
  ========================================================
  DESKTOP COLLECTIONS REF
  ========================================================
  */

  const desktopCollectionsRef =
    useRef(null);


  /*
  ========================================================
  ACCOUNT REF
  ========================================================
  */

  const accountRef =
    useRef(null);


  /*
  ========================================================
  WISHLIST REF
  ========================================================
  */

  const wishlistRef =
    useRef(null);


  /*
  ========================================================
  CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  ========================================================
  */

  useEffect(() => {

    const handleClickOutside = (event) => {

      /*
      Close Collections
      */

      if (
        desktopCollectionsRef.current &&
        !desktopCollectionsRef.current.contains(
          event.target
        )
      ) {

        setIsCollectionsOpen(false);

      }


      /*
      Close Account
      */

      if (
        accountRef.current &&
        !accountRef.current.contains(
          event.target
        )
      ) {

        setIsAccountOpen(false);

      }


      /*
      Close Wishlist
      */

      if (
        wishlistRef.current &&
        !wishlistRef.current.contains(
          event.target
        )
      ) {

        setIsWishlistOpen(false);

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
  SEARCH FILTER
  ========================================================
  */

  const filteredProducts =
    products.filter((product) => {

      const searchText =
        searchQuery
          .toLowerCase()
          .trim();


      return (
        product.name
          .toLowerCase()
          .includes(searchText)

        ||

        product.category
          .toLowerCase()
          .includes(searchText)
      );

    });


  /*
  ========================================================
  TOGGLE MOBILE MENU
  ========================================================
  */

  const toggleMenu = () => {

    setIsMenuOpen(
      (prev) => !prev
    );

  };


  /*
  ========================================================
  TOGGLE DESKTOP COLLECTIONS
  ========================================================
  */

  const toggleCollections = () => {

    setIsCollectionsOpen(
      (prev) => !prev
    );

    setIsAccountOpen(false);
    setIsWishlistOpen(false);

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

    setIsAccountOpen(false);

  };


  /*
  ========================================================
  TOGGLE SEARCH
  ========================================================
  */

  const toggleSearch = () => {

    setIsSearchOpen(
      (prev) => !prev
    );

    setIsAccountOpen(false);
    setIsWishlistOpen(false);

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


  /*
  ========================================================
  TOGGLE ACCOUNT
  ========================================================
  */

  const toggleAccount = () => {

    setIsAccountOpen(
      (prev) => !prev
    );

    setIsCollectionsOpen(false);
    setIsWishlistOpen(false);

  };


  /*
  ========================================================
  TOGGLE WISHLIST PANEL
  ========================================================
  */

  const toggleWishlistPanel = () => {

    setIsWishlistOpen(
      (prev) => !prev
    );

    setIsAccountOpen(false);
    setIsCollectionsOpen(false);

  };


  /*
  ========================================================
  TOGGLE WISHLIST PRODUCT
  ========================================================
  */

  const toggleWishlist = (product) => {

    setWishlist((prevWishlist) => {

      const isAlreadyInWishlist =
        prevWishlist.some(
          (item) =>
            item.id === product.id
        );


      /*
      REMOVE PRODUCT
      */

      if (isAlreadyInWishlist) {

        return prevWishlist.filter(
          (item) =>
            item.id !== product.id
        );

      }


      /*
      ADD PRODUCT
      */

      return [
        ...prevWishlist,
        product,
      ];

    });

  };


  /*
  ========================================================
  CHECK WHETHER PRODUCT IS IN WISHLIST
  ========================================================
  */

  const isInWishlist = (productId) => {

    return wishlist.some(
      (item) =>
        item.id === productId
    );

  };


  return (

    <nav className="border-b bg-white">


      {/* ==================================================
          NAVBAR CONTAINER
          ================================================== */}

      <div
        className="
          relative
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


          {/* ==================================================
              DESKTOP COLLECTIONS
              ================================================== */}

          <div
            ref={desktopCollectionsRef}
            className="relative"
          >

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


            {/* DESKTOP MEGA MENU */}

            <div
              className={
                isCollectionsOpen
                  ? "visible absolute left-1/2 top-full z-50 mt-4 w-[700px] -translate-x-1/2 translate-y-0 rounded-2xl border bg-white p-4 opacity-100 shadow-2xl transition-all duration-200"
                  : "invisible absolute left-1/2 top-full z-50 mt-4 w-[700px] -translate-x-1/2 -translate-y-2 rounded-2xl border bg-white p-4 opacity-0 shadow-2xl transition-all duration-200"
              }
            >

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                "
              >

                {collections.map(
                  (collection) => (

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

                  )
                )}

              </div>

            </div>

          </div>


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


          {/* ==================================================
              DESKTOP ICONS
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

            <div
              ref={accountRef}
              className="relative"
            >

              <button
                type="button"

                onClick={toggleAccount}

                aria-label="Account"

                aria-expanded={
                  isAccountOpen
                }

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


              {/* ACCOUNT DROPDOWN */}

              {isAccountOpen && (

                <div
                  className="
                    absolute
                    right-0
                    top-full
                    z-50
                    mt-3
                    w-64
                    rounded-xl
                    border
                    bg-white
                    p-5
                    shadow-xl
                  "
                >

                  <h3
                    className="
                      text-base
                      font-semibold
                      text-gray-900
                    "
                  >
                    Welcome
                  </h3>


                  <p
                    className="
                      mt-1
                      text-sm
                      leading-5
                      text-gray-500
                    "
                  >
                    Sign in to your account to
                    view your orders and profile.
                  </p>


                  <button
                    type="button"

                    className="
                      mt-4
                      w-full
                      rounded-lg
                      bg-black
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-gray-800
                    "
                  >
                    Sign In
                  </button>


                  <button
                    type="button"

                    className="
                      mt-3
                      w-full
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-black
                    "
                  >
                    Create an account
                  </button>

                </div>

              )}

            </div>


            {/* ==================================================
                WISHLIST
                ================================================== */}

            <div
              ref={wishlistRef}
              className="relative"
            >

              <button
                type="button"

                onClick={toggleWishlistPanel}

                aria-label="Wishlist"

                aria-expanded={
                  isWishlistOpen
                }

                className="
                  relative
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

                <Heart
                  size={19}

                  className={
                    wishlist.length > 0
                      ? "fill-red-500 text-red-500"
                      : ""
                  }
                />


                {wishlist.length > 0 && (

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      px-1
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    {wishlist.length}
                  </span>

                )}

              </button>


              {/* WISHLIST PANEL */}

              {isWishlistOpen && (

                <div
                  className="
                    absolute
                    right-0
                    top-full
                    z-50
                    mt-3
                    w-80
                    rounded-2xl
                    border
                    bg-white
                    p-4
                    shadow-2xl
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      pb-3
                    "
                  >

                    <h2
                      className="
                        text-base
                        font-semibold
                        text-gray-900
                      "
                    >
                      My Wishlist
                    </h2>


                    <span
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      {wishlist.length} item
                      {wishlist.length !== 1
                        ? "s"
                        : ""}
                    </span>

                  </div>


                  {wishlist.length === 0 ? (

                    <div
                      className="
                        py-8
                        text-center
                      "
                    >

                      <Heart
                        size={32}
                        className="
                          mx-auto
                          text-gray-300
                        "
                      />


                      <p
                        className="
                          mt-3
                          text-sm
                          text-gray-500
                        "
                      >
                        Your wishlist is empty.
                      </p>

                    </div>

                  ) : (

                    <div
                      className="
                        mt-3
                        max-h-80
                        space-y-3
                        overflow-y-auto
                      "
                    >

                      {wishlist.map(
                        (product) => (

                          <div
                            key={product.id}

                            className="
                              flex
                              items-center
                              gap-3
                              rounded-lg
                              p-2
                              transition
                              hover:bg-gray-50
                            "
                          >

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


                            <div
                              className="
                                min-w-0
                                flex-1
                              "
                            >

                              <h3
                                className="
                                  truncate
                                  text-sm
                                  font-medium
                                  text-gray-900
                                "
                              >
                                {product.name}
                              </h3>


                              <p
                                className="
                                  mt-1
                                  text-xs
                                  text-gray-500
                                "
                              >
                                {product.category}
                              </p>

                            </div>


                            <button
                              type="button"

                              onClick={() =>
                                toggleWishlist(
                                  product
                                )
                              }

                              className="
                                shrink-0
                                rounded-full
                                p-2
                                transition
                                hover:bg-gray-100
                              "
                            >

                              <Heart
                                size={18}
                                className="
                                  fill-red-500
                                  text-red-500
                                "
                              />

                            </button>

                          </div>

                        )
                      )}

                    </div>

                  )}

                </div>

              )}

            </div>


            {/* ==================================================
                CART ICON
                ================================================== */}

            <button
              type="button"

              aria-label="Shopping cart"

              className="
                relative
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


              {/* Cart count will be added
                  in the next step */}

              {cart.length > 0 && (

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    px-1
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  {cart.length}
                </span>

              )}

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

          aria-expanded={
            isMenuOpen
          }
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

          <Search
            size={20}
            className="shrink-0 text-gray-500"
          />


          <input
            type="text"

            value={searchQuery}

            onChange={(e) =>
              setSearchQuery(
                e.target.value
              )
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


        {/* SEARCH RESULTS */}

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

                {filteredProducts.map(
                  (product) => (

                    <div
                      key={product.id}

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

                      <a
                        href="#"

                        className="
                          flex
                          min-w-0
                          flex-1
                          items-center
                          gap-3
                        "
                      >

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


                        <div
                          className="
                            min-w-0
                          "
                        >

                          <h3
                            className="
                              truncate
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


                          <p
                            className="
                              mt-1
                              text-sm
                              font-semibold
                              text-gray-900
                            "
                          >
                            AED{" "}
                            {product.price.toLocaleString()}
                          </p>

                        </div>

                      </a>


                      {/* WISHLIST */}

                      <button
                        type="button"

                        onClick={() =>
                          toggleWishlist(
                            product
                          )
                        }

                        aria-label={
                          isInWishlist(
                            product.id
                          )
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }

                        className="
                          shrink-0
                          rounded-full
                          p-2
                          transition
                          hover:bg-gray-100
                          focus:outline-none
                          focus:ring-2
                          focus:ring-gray-300
                        "
                      >

                        <Heart
                          size={19}

                          className={
                            isInWishlist(
                              product.id
                            )
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }
                        />

                      </button>

                    </div>

                  )
                )}

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


            {/* HOME */}

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

              <button
                type="button"

                onClick={
                  toggleMobileCollections
                }

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


              {/* MOBILE COLLECTIONS SUBMENU */}

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

                  {collections.map(
                    (collection) => (

                      <a
                        key={
                          collection.title
                        }

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

                        <img
                          src={
                            collection.image
                          }

                          alt={
                            collection.title
                          }

                          className="
                            h-12
                            w-12
                            shrink-0
                            rounded-lg
                            object-cover
                          "
                        />


                        <div>

                          <h3
                            className="
                              text-sm
                              font-medium
                              text-gray-800
                            "
                          >
                            {
                              collection.title
                            }
                          </h3>


                          <p
                            className="
                              text-xs
                              text-gray-500
                            "
                          >
                            {
                              collection.description
                            }
                          </p>

                        </div>

                      </a>

                    )
                  )}

                </div>

              </div>

            </div>


            {/* ABOUT */}

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


            {/* CONTACT */}

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

                onClick={toggleAccount}

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


              {/* MOBILE ACCOUNT PANEL */}

              {isAccountOpen && (

                <div
                  className="
                    mx-4
                    mb-2
                    rounded-lg
                    border
                    bg-gray-50
                    p-4
                  "
                >

                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-gray-900
                    "
                  >
                    Welcome
                  </h3>


                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-gray-500
                    "
                  >
                    Sign in to your account to
                    view your orders and profile.
                  </p>


                  <button
                    type="button"

                    className="
                      mt-3
                      w-full
                      rounded-lg
                      bg-black
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-gray-800
                    "
                  >
                    Sign In
                  </button>


                  <button
                    type="button"

                    className="
                      mt-2
                      w-full
                      text-xs
                      font-medium
                      text-gray-700
                      hover:text-black
                    "
                  >
                    Create an account
                  </button>

                </div>

              )}


              {/* MOBILE WISHLIST */}

              <button
                type="button"

                onClick={toggleWishlistPanel}

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

                <div className="relative">

                  <Heart
                    size={19}

                    className={
                      wishlist.length > 0
                        ? "fill-red-500 text-red-500"
                        : ""
                    }
                  />


                  {wishlist.length > 0 && (

                    <span
                      className="
                        absolute
                        -right-2
                        -top-2
                        flex
                        h-4
                        min-w-4
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        px-1
                        text-[9px]
                        font-semibold
                        text-white
                      "
                    >
                      {wishlist.length}
                    </span>

                  )}

                </div>


                <span>
                  Wishlist
                </span>

              </button>


              {/* MOBILE WISHLIST PANEL */}

              {isWishlistOpen && (

                <div
                  className="
                    mx-4
                    mb-2
                    rounded-xl
                    border
                    bg-gray-50
                    p-3
                  "
                >

                  {wishlist.length === 0 ? (

                    <div
                      className="
                        py-5
                        text-center
                      "
                    >

                      <Heart
                        size={28}

                        className="
                          mx-auto
                          text-gray-300
                        "
                      />


                      <p
                        className="
                          mt-2
                          text-xs
                          text-gray-500
                        "
                      >
                        Your wishlist is empty.
                      </p>

                    </div>

                  ) : (

                    <div
                      className="
                        space-y-2
                      "
                    >

                      {wishlist.map(
                        (product) => (

                          <div
                            key={product.id}

                            className="
                              flex
                              items-center
                              gap-3
                              rounded-lg
                              bg-white
                              p-2
                            "
                          >

                            <img
                              src={
                                product.image
                              }

                              alt={
                                product.name
                              }

                              className="
                                h-12
                                w-12
                                shrink-0
                                rounded-lg
                                object-cover
                              "
                            />


                            <div
                              className="
                                min-w-0
                                flex-1
                              "
                            >

                              <h3
                                className="
                                  truncate
                                  text-xs
                                  font-medium
                                  text-gray-900
                                "
                              >
                                {
                                  product.name
                                }
                              </h3>


                              <p
                                className="
                                  text-[11px]
                                  text-gray-500
                                "
                              >
                                {
                                  product.category
                                }
                              </p>

                            </div>


                            <button
                              type="button"

                              onClick={() =>
                                toggleWishlist(
                                  product
                                )
                              }

                              className="
                                shrink-0
                                rounded-full
                                p-1.5
                                hover:bg-gray-100
                              "
                            >

                              <Heart
                                size={16}

                                className="
                                  fill-red-500
                                  text-red-500
                                "
                              />

                            </button>

                          </div>

                        )
                      )}

                    </div>

                  )}

                </div>

              )}


              {/* MOBILE CART */}

              <button
                type="button"

                className="
                  relative
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


                {cart.length > 0 && (

                  <span
                    className="
                      ml-auto
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      px-1
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    {cart.length}
                  </span>

                )}

              </button>

            </div>

          </nav>

        </div>

      </div>

    </nav>
  );
};


export default Navbar;

