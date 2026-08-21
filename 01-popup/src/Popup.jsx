import React, { useEffect, useRef } from "react";

const Popup = ({
  isOpen,
  onClose,

  // Content received from App.jsx
  badge,
  title,
  description,
  image,
  buttonText,
}) => {

  /*
  ========================================================
  CLOSE BUTTON REF
  ========================================================

  useRef gives us access to the actual Close button.

  We use it to move keyboard focus into the popup
  when the popup opens.
  */

  const closeButtonRef = useRef(null);


  /*
  ========================================================
  ESC KEY + BODY SCROLL LOCK + FOCUS
  ========================================================
  */

  useEffect(() => {

    /*
    --------------------------------------------------------
    ESC KEY HANDLER
    --------------------------------------------------------
    */

    const handleKeyDown = (event) => {

      // Close popup when Escape is pressed.
      if (event.key === "Escape") {
        onClose();
      }
    };


    /*
    Add keyboard listener.
    */

    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    /*
    --------------------------------------------------------
    PREVENT BACKGROUND SCROLL
    --------------------------------------------------------

    When popup is open:

    body overflow = hidden

    This prevents the website behind the popup
    from scrolling.
    */

    if (isOpen) {

      document.body.style.overflow = "hidden";


      /*
      Move keyboard focus to Close button.
      */

      closeButtonRef.current?.focus();
    }


    /*
    --------------------------------------------------------
    CLEANUP
    --------------------------------------------------------

    Cleanup is extremely important when using:

    - event listeners
    - timers
    - subscriptions
    - document/window changes

    We undo what we did above.
    */

    return () => {

      /*
      Remove keyboard listener.
      */

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );


      /*
      Restore normal page scrolling.
      */

      document.body.style.overflow = "";
    };

  }, [isOpen, onClose]);


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
          Prevent clicking inside the popup from
          closing the popup.
          */

          onClick={(event) => {
            event.stopPropagation();
          }}

          /*
          Accessibility
          */

          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby="popup-description"

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
            ref={closeButtonRef}

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
            src={image}
            alt={title}

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
              {badge}
            </span>


            {/* Heading */}

            <h2
              id="popup-title"

              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              {title}
            </h2>


            {/* Description */}

            <p
              id="popup-description"

              className="
                mx-auto
                mt-3
                max-w-md
                text-base
                leading-relaxed
                text-gray-600
              "
            >
              {description}
            </p>


            {/* CTA BUTTON */}

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
              {buttonText}
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Popup;