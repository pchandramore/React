import React, { useEffect } from "react";

const Popup = ({ isOpen, onClose }) => {

  /*
    ========================================================
    ESC KEY FUNCTIONALITY
    ========================================================

    useEffect allows us to perform a side effect.

    In this case, we want to listen to keyboard events
    on the browser window.
  */

  useEffect(() => {

    /*
      This function runs whenever a key is pressed.
    */

    const handleKeyDown = (event) => {

      /*
        Check which key was pressed.

        If the user presses Escape,
        close the popup.
      */

      if (event.key === "Escape") {
        onClose();
      }
    };


    /*
      Add the keyboard event listener.

      window listens for keyboard events
      anywhere on the page.
    */

    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    /*
      CLEANUP FUNCTION
      ----------------

      When the component is removed or the effect
      runs again, remove the event listener.

      This prevents multiple event listeners from
      being created.
    */

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [onClose]);


  return (
    <>
      {/* ==================================================
          OVERLAY
          ================================================== */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/60
          p-4

          transition-opacity
          duration-300

          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >

        {/* ==================================================
            POPUP CARD
            ================================================== */}

        <div
          /*
            Prevent click events inside the popup
            from reaching the overlay.
          */

          onClick={(event) => {
            event.stopPropagation();
          }}

          className={`
            relative
            w-full
            max-w-lg
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-2xl

            transition-all
            duration-300
            ease-out

            ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }
          `}
        >

          {/* ==================================================
              CLOSE BUTTON
              ================================================== */}

          <button
            onClick={onClose}

            className="
              absolute
              right-4
              top-4
              z-10

              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full
              bg-white/90

              text-gray-700

              shadow-md

              transition-all
              duration-200

              hover:scale-110
              hover:bg-gray-100
              hover:text-black

              active:scale-95

              focus:outline-none
              focus:ring-2
              focus:ring-gray-400
            "

            aria-label="Close popup"
          >
            ✕
          </button>


          {/* ==================================================
              PROMOTIONAL IMAGE
              ================================================== */}

          <img
            src="/popup-offer.jpg"
            alt="Special offer"

            className="
              h-64
              w-full
              object-cover
            "
          />


          {/* ==================================================
              POPUP CONTENT
              ================================================== */}

          <div className="px-6 py-8 text-center">

            {/* Badge */}

            <span
              className="
                inline-block

                rounded-full

                bg-gray-100

                px-4
                py-1

                text-sm
                font-semibold
                uppercase
                tracking-wider

                text-gray-700
              "
            >
              Special Offer
            </span>


            {/* Heading */}

            <h2
              className="
                mt-4

                text-3xl
                font-bold
                tracking-tight

                text-gray-900
              "
            >
              Get 20% Off
            </h2>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-3
                max-w-md

                text-base
                leading-relaxed

                text-gray-600
              "
            >
              Discover our latest collection and enjoy
              20% off your first order.
            </p>


            {/* ==================================================
                SHOP NOW BUTTON
                ================================================== */}

            <button
              className="
                mt-6
                w-full

                rounded-xl

                bg-black

                px-6
                py-3

                text-base
                font-semibold

                text-white

                shadow-sm

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-gray-800
                hover:shadow-lg

                active:translate-y-0
                active:scale-[0.98]

                focus:outline-none
                focus:ring-2
                focus:ring-black
                focus:ring-offset-2
              "
            >
              Shop Now
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Popup;