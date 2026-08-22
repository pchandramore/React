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
  PRODUCTS DATA
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
  DESKTOP COLLECTIONS STATE
  ========================================================
  */

  const [isCollectionsOpen, setIsCollectionsOpen] =
    useState(false);


  /*
  ========================================================
  MOBILE COLLECTIONS STATE
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
  WISHLIST PANEL STATE
  ========================================================
  */

  const [isWishlistOpen, setIsWishlistOpen] =
    useState(false);


  /*
  ========================================================
  CART STATE
  ========================================================
  */

  const [cart, setCart] =
    useState([]);


  /*
  ========================================================
  CART PANEL STATE
  ========================================================
  */

  const [isCartOpen, setIsCartOpen] =
    useState(false);


  /*
  ========================================================
  REFS
  ========================================================
  */

  const desktopCollectionsRef =
    useRef(null);

  const accountRef =
    useRef(null);

  const wishlistRef =
    useRef(null);

  const cartRef =
    useRef(null);


  /*
  ========================================================
  CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  ========================================================
  */

  useEffect(() => {

    const handleClickOutside = (event) => {

      /*
      DESKTOP COLLECTIONS
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
      ACCOUNT
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
      WISHLIST
      */

      if (
        wishlistRef.current &&
        !wishlistRef.current.contains(
          event.target
        )
      ) {

        setIsWishlistOpen(false);

      }


      /*
      CART
      */

      if (
        cartRef.current &&
        !cartRef.current.contains(
          event.target
        )
      ) {

        setIsCartOpen(false);

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
    setIsCartOpen(false);

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

    setIsSearchOpen(
      (prev) => !prev
    );

    setIsAccountOpen(false);
    setIsWishlistOpen(false);
    setIsCartOpen(false);

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
    setIsCartOpen(false);

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
    setIsCartOpen(false);

  };


  /*
  ========================================================
  TOGGLE CART PANEL
  ========================================================
  */

  const toggleCart = () => {

    setIsCartOpen(
      (prev) => !prev
    );

    setIsAccountOpen(false);
    setIsCollectionsOpen(false);
    setIsWishlistOpen(false);

  };


  /*
  ========================================================
  ADD PRODUCT TO CART
  ========================================================
  */

  const addToCart = (product) => {

    setCart((prevCart) => {

      const existingProduct =
        prevCart.find(
          (item) =>
            item.id === product.id
        );


      /*
      PRODUCT ALREADY EXISTS
      */

      if (existingProduct) {

        return prevCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );

      }


      /*
      NEW PRODUCT
      */

      return [
        ...prevCart,

        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  /*
  ========================================================
  REMOVE PRODUCT FROM CART
  ========================================================
  */

  const removeFromCart = (productId) => {

    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item.id !== productId
      )
    );

  };


  /*
  ========================================================
  INCREASE CART QUANTITY
  ========================================================
  */

  const increaseQuantity = (productId) => {

    setCart((prevCart) =>

      prevCart.map((item) =>

        item.id === productId

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item

      )

    );

  };


  /*
  ========================================================
  DECREASE CART QUANTITY
  ========================================================
  */

  const decreaseQuantity = (productId) => {

    setCart((prevCart) =>

      prevCart
        .map((item) =>

          item.id === productId

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )
        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };


  /*
  ========================================================
  TOTAL CART QUANTITY
  ========================================================
  */

  const cartQuantity =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  /*
  ========================================================
  TOTAL CART PRICE
  ========================================================
  */

  const cartTotal =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );


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
      REMOVE
      */

      if (isAlreadyInWishlist) {

        return prevWishlist.filter(
          (item) =>
            item.id !== product.id
        );

      }


      /*
      ADD
      */

      return [
        ...prevWishlist,
        product,
      ];

    });

  };


  /*
  ========================================================
  CHECK WISHLIST
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
              COLLECTIONS
              ================================================== */}

          <div
            ref={desktopCollectionsRef}
            className="relative"
          >

            <button
              type="button"

              onClick={
                toggleCollections
              }

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
                      key={
                        collection.title
                      }

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
                        src={
                          collection.image
                        }

                        alt={
                          collection.title
                        }

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
                          {
                            collection.title
                          }
                        </h3>


                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
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

              className="
                rounded-full
                p-2
                text-gray-700
                transition
                hover:bg-gray-100
                hover:text-black
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

                className="
                  rounded-full
                  p-2
                  text-gray-700
                  transition
                  hover:bg-gray-100
                  hover:text-black
                "
              >

                <User size={19} />

              </button>


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
                      hover:bg-gray-800
                    "
                  >
                    Sign In
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

                onClick={
                  toggleWishlistPanel
                }

                className="
                  relative
                  rounded-full
                  p-2
                  text-gray-700
                  transition
                  hover:bg-gray-100
                  hover:text-black
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

                  <h2
                    className="
                      border-b
                      pb-3
                      text-base
                      font-semibold
                      text-gray-900
                    "
                  >
                    My Wishlist
                  </h2>


                  {wishlist.length === 0 ? (

                    <p
                      className="
                        py-8
                        text-center
                        text-sm
                        text-gray-500
                      "
                    >
                      Your wishlist is empty.
                    </p>

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
                              hover:bg-gray-50
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
                                h-14
                                w-14
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
                                {
                                  product.name
                                }
                              </h3>


                              <p
                                className="
                                  text-xs
                                  text-gray-500
                                "
                              >
                                AED{" "}
                                {
                                  product.price.toLocaleString()
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
                                rounded-full
                                p-2
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
                CART
                ================================================== */}

            <div
              ref={cartRef}
              className="relative"
            >

              <button
                type="button"

                onClick={toggleCart}

                className="
                  relative
                  rounded-full
                  p-2
                  text-gray-700
                  transition
                  hover:bg-gray-100
                  hover:text-black
                "
              >

                <ShoppingBag size={19} />


                {cartQuantity > 0 && (

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
                    {cartQuantity}
                  </span>

                )}

              </button>


              {/* ==================================================
                  CART DROPDOWN
                  ================================================== */}

              {isCartOpen && (

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
                      Shopping Cart
                    </h2>


                    <span
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      {cartQuantity} item
                      {cartQuantity !== 1
                        ? "s"
                        : ""}
                    </span>

                  </div>


                  {cart.length === 0 ? (

                    <div
                      className="
                        py-8
                        text-center
                      "
                    >

                      <ShoppingBag
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
                        Your cart is empty.
                      </p>

                    </div>

                  ) : (

                    <>

                      <div
                        className="
                          mt-3
                          max-h-80
                          space-y-3
                          overflow-y-auto
                        "
                      >

                        {cart.map(
                          (product) => (

                            <div
                              key={product.id}

                              className="
                                rounded-lg
                                border
                                p-2
                              "
                            >

                              <div
                                className="
                                  flex
                                  gap-3
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
                                    h-16
                                    w-16
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
                                    {
                                      product.name
                                    }
                                  </h3>


                                  <p
                                    className="
                                      mt-1
                                      text-xs
                                      text-gray-500
                                    "
                                  >
                                    AED{" "}
                                    {
                                      product.price.toLocaleString()
                                    }
                                  </p>


                                  {/* QUANTITY CONTROLS */}

                                  <div
                                    className="
                                      mt-2
                                      flex
                                      items-center
                                      justify-between
                                    "
                                  >

                                    <div
                                      className="
                                        flex
                                        items-center
                                        rounded-lg
                                        border
                                      "
                                    >

                                      <button
                                        type="button"

                                        onClick={() =>
                                          decreaseQuantity(
                                            product.id
                                          )
                                        }

                                        className="
                                          px-2
                                          py-1
                                          text-sm
                                          hover:bg-gray-100
                                        "
                                      >
                                        -
                                      </button>


                                      <span
                                        className="
                                          min-w-7
                                          text-center
                                          text-xs
                                          font-medium
                                        "
                                      >
                                        {
                                          product.quantity
                                        }
                                      </span>


                                      <button
                                        type="button"

                                        onClick={() =>
                                          increaseQuantity(
                                            product.id
                                          )
                                        }

                                        className="
                                          px-2
                                          py-1
                                          text-sm
                                          hover:bg-gray-100
                                        "
                                      >
                                        +
                                      </button>

                                    </div>


                                    <button
                                      type="button"

                                      onClick={() =>
                                        removeFromCart(
                                          product.id
                                        )
                                      }

                                      className="
                                        text-xs
                                        text-red-500
                                        hover:text-red-700
                                      "
                                    >
                                      Remove
                                    </button>

                                  </div>

                                </div>

                              </div>

                            </div>

                          )
                        )}

                      </div>


                      {/* CART TOTAL */}

                      <div
                        className="
                          mt-4
                          border-t
                          pt-4
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >

                          <span
                            className="
                              text-sm
                              font-medium
                              text-gray-600
                            "
                          >
                            Total
                          </span>


                          <span
                            className="
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            AED{" "}
                            {cartTotal.toLocaleString()}
                          </span>

                        </div>


                        <button
                          type="button"

                          className="
                            mt-3
                            w-full
                            rounded-lg
                            bg-black
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-gray-800
                          "
                        >
                          Checkout
                        </button>

                      </div>

                    </>

                  )}

                </div>

              )}

            </div>

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
            className="
              shrink-0
              text-gray-500
            "
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

            className="
              rounded-full
              p-2
              text-gray-500
              hover:bg-gray-100
              hover:text-black
            "
          >

            <X size={18} />

          </button>

        </div>


        {/* SEARCH RESULTS */}

        {isSearchOpen &&
          searchQuery && (

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
                            {
                              product.name
                            }
                          </h3>


                          <p
                            className="
                              text-xs
                              text-gray-500
                            "
                          >
                            {
                              product.category
                            }
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
                            {
                              product.price.toLocaleString()
                            }
                          </p>

                        </div>


                        {/* ADD TO CART */}

                        <button
                          type="button"

                          onClick={() =>
                            addToCart(
                              product
                            )
                          }

                          className="
                            shrink-0
                            rounded-lg
                            bg-black
                            px-3
                            py-2
                            text-xs
                            font-medium
                            text-white
                            transition
                            hover:bg-gray-800
                          "
                        >
                          Add to Cart
                        </button>


                        {/* WISHLIST */}

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
                            hover:bg-gray-100
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
            ? "max-h-[1000px] overflow-hidden border-t bg-white opacity-100 transition-all duration-300 md:hidden"
            : "max-h-0 overflow-hidden border-t bg-white opacity-0 transition-all duration-300 md:hidden"
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
                hover:bg-gray-100
                hover:text-black
              "
            >
              Contact
            </a>


            {/* ==================================================
                MOBILE UTILITIES
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
                  hover:bg-gray-100
                  hover:text-black
                "
              >

                <User size={19} />

                <span>
                  Account
                </span>

              </button>


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
                    "
                  >
                    Sign In
                  </button>

                </div>

              )}


              {/* WISHLIST */}

              <button
                type="button"

                onClick={
                  toggleWishlistPanel
                }

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
                  hover:bg-gray-100
                  hover:text-black
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

                <span>
                  Wishlist
                </span>


                {wishlist.length > 0 && (

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
                    {wishlist.length}
                  </span>

                )}

              </button>


              {/* ==================================================
                  MOBILE CART
                  ================================================== */}

              <button
                type="button"

                onClick={toggleCart}

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
                  hover:bg-gray-100
                  hover:text-black
                "
              >

                <ShoppingBag size={19} />

                <span>
                  Cart
                </span>


                {cartQuantity > 0 && (

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
                    {cartQuantity}
                  </span>

                )}

              </button>


              {/* MOBILE CART PANEL */}

              {isCartOpen && (

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

                  {cart.length === 0 ? (

                    <p
                      className="
                        py-5
                        text-center
                        text-xs
                        text-gray-500
                      "
                    >
                      Your cart is empty.
                    </p>

                  ) : (

                    <>

                      <div
                        className="
                          space-y-2
                        "
                      >

                        {cart.map(
                          (product) => (

                            <div
                              key={
                                product.id
                              }

                              className="
                                rounded-lg
                                bg-white
                                p-2
                              "
                            >

                              <div
                                className="
                                  flex
                                  gap-3
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
                                      text-xs
                                      text-gray-500
                                    "
                                  >
                                    AED{" "}
                                    {
                                      product.price.toLocaleString()
                                    }
                                  </p>


                                  <div
                                    className="
                                      mt-2
                                      flex
                                      items-center
                                      justify-between
                                    "
                                  >

                                    <div
                                      className="
                                        flex
                                        items-center
                                        rounded
                                        border
                                      "
                                    >

                                      <button
                                        type="button"

                                        onClick={() =>
                                          decreaseQuantity(
                                            product.id
                                          )
                                        }

                                        className="
                                          px-2
                                          py-1
                                          text-xs
                                          hover:bg-gray-100
                                        "
                                      >
                                        -
                                      </button>


                                      <span
                                        className="
                                          min-w-6
                                          text-center
                                          text-xs
                                        "
                                      >
                                        {
                                          product.quantity
                                        }
                                      </span>


                                      <button
                                        type="button"

                                        onClick={() =>
                                          increaseQuantity(
                                            product.id
                                          )
                                        }

                                        className="
                                          px-2
                                          py-1
                                          text-xs
                                          hover:bg-gray-100
                                        "
                                      >
                                        +
                                      </button>

                                    </div>


                                    <button
                                      type="button"

                                      onClick={() =>
                                        removeFromCart(
                                          product.id
                                        )
                                      }

                                      className="
                                        text-[11px]
                                        text-red-500
                                      "
                                    >
                                      Remove
                                    </button>

                                  </div>

                                </div>

                              </div>

                            </div>

                          )
                        )}

                      </div>


                      <div
                        className="
                          mt-3
                          border-t
                          pt-3
                        "
                      >

                        <div
                          className="
                            flex
                            justify-between
                            text-sm
                            font-semibold
                          "
                        >

                          <span>
                            Total
                          </span>


                          <span>
                            AED{" "}
                            {
                              cartTotal.toLocaleString()
                            }
                          </span>

                        </div>


                        <button
                          type="button"

                          className="
                            mt-3
                            w-full
                            rounded-lg
                            bg-black
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-white
                            hover:bg-gray-800
                          "
                        >
                          Checkout
                        </button>

                      </div>

                    </>

                  )}

                </div>

              )}

            </div>

          </nav>

        </div>

      </div>

    </nav>
  );
};


export default Navbar;

