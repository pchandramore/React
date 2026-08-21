import React, {
  useEffect,
  useRef
} from "react";


const Popup = ({ isOpen, onClose }) => {

  /*
  ========================================================
  CLOSE BUTTON REF
  ========================================================

  We use useRef to get access to the actual
  Close button DOM element.

  We will use this when the popup opens
  to automatically move focus to the Close button.
  */

  const closeButtonRef = useRef(null);


  /*
  ========================================================
  POPUP CONTAINER REF
  ========================================================

  This ref gives us access to the popup itself.

  We need this because we want to find
  all focusable elements INSIDE the popup.

  Example:

  - Close button
  - Shop Now button
  - Input
  - Link
  */

  const popupRef = useRef(null);


  /*
  ========================================================
  ESC KEY + SCROLL LOCK + FOCUS TRAP
  ========================================================

  This useEffect handles several things:

  1. Escape key
  2. Background scroll lock
  3. Initial keyboard focus
  4. Focus trapping
  */

  useEffect(() => {

    /*
    ========================================================
    ESCAPE KEY
    ========================================================
    */

    const handleKeyDown = (event) => {

      /*
        If the user presses Escape,
        close the popup.
      */

      if (event.key === "Escape") {

        onClose();

        return;
      }


      /*
      ======================================================
      FOCUS TRAP
      ======================================================

      We only need this logic when
      the popup is open.
      */

      if (
        event.key === "Tab" &&
        isOpen
      ) {

        /*
        ----------------------------------------------------
        FIND ALL FOCUSABLE ELEMENTS
        ----------------------------------------------------

        querySelectorAll searches inside
        the popup for elements that users
        can focus with the keyboard.

        Examples:

        button
        input
        select
        textarea
        links
        ----------------------------------------------------
        */

        const focusableElements =
          popupRef.current?.querySelectorAll(
            `
            button,
            [href],
            input,
            select,
            textarea,
            [tabindex]:not([tabindex="-1"])
            `
          );


        /*
        ----------------------------------------------------
        SAFETY CHECK
        ----------------------------------------------------

        If there are no focusable elements,
        stop here.
        ----------------------------------------------------
        */

        if (
          !focusableElements ||
          focusableElements.length === 0
        ) {
          return;
        }


        /*
        ----------------------------------------------------
        GET FIRST AND LAST ELEMENT
        ----------------------------------------------------
        */

        const firstElement =
          focusableElements[0];

        const lastElement =
          focusableElements[
            focusableElements.length - 1
          ];


        /*
        ----------------------------------------------------
        SHIFT + TAB
        ----------------------------------------------------

        If the user is on the FIRST element
        and presses:

        Shift + Tab

        normally the browser would move
        focus outside the popup.

        Instead we move focus to the LAST
        element.
        */

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {

          /*
            Prevent the browser's
            default focus movement.
          */

          event.preventDefault();


          /*
            Move focus to the last
            focusable element.
          */

          lastElement.focus();
        }


        /*
        ----------------------------------------------------
        NORMAL TAB
        ----------------------------------------------------

        If the user is on the LAST element
        and presses Tab:

        normally focus would leave the popup.

        We prevent that and move focus
        back to the FIRST element.
        */

        else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {

          /*
            Stop normal browser
            Tab behaviour.
          */

          event.preventDefault();


          /*
            Move focus back to
            the first element.
          */

          firstElement.focus();
        }
      }
    };


    /*
    ========================================================
    ADD KEYBOARD EVENT LISTENER
    ========================================================
    */

    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    /*
    ========================================================
    POPUP OPEN LOGIC
    ========================================================
    */

    if (isOpen) {

      /*
      ------------------------------------------------------
      PREVENT BACKGROUND SCROLL
      ------------------------------------------------------

      The page behind the popup
      cannot scroll.
      */

      document.body.style.overflow = "hidden";


      /*
      ------------------------------------------------------
      MOVE FOCUS TO CLOSE BUTTON
      ------------------------------------------------------

      requestAnimationFrame waits until
      the popup has been rendered.
      */

      requestAnimationFrame(() => {

        closeButtonRef.current?.focus();

      });
    }


    /*
    ========================================================
    CLEANUP
    ========================================================
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
        Restore normal scrolling.
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

        /*
          Clicking the dark background
          closes the popup.
        */

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
          ==================================================
          POPUP REF
          ==================================================

          We connect popupRef to this element.

          This allows JavaScript to search
          for focusable elements inside it.
          */

          ref={popupRef}


          /*
          ==================================================
          ACCESSIBILITY
          ==================================================
          */

          role="dialog"

          aria-modal="true"

          aria-labelledby="popup-title"

          aria-describedby="popup-description"


          /*
          ==================================================
          PREVENT BACKGROUND CLICK
          ==================================================

          Clicking inside the popup should NOT
          close the popup.

          Only clicking the dark overlay
          should close it.
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

            /*
            ==================================================
            CLOSE BUTTON REF
            ==================================================

            This allows us to move keyboard focus
            to the Close button when the popup opens.
            */

            ref={closeButtonRef}


            /*
              Close popup.
            */

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


            /*
              Accessibility label.

              Screen readers will say:

              "Close popup"
            */

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

          <div
            className="
              px-6
              py-8
              text-center
            "
          >


            {/* ==================================================
                BADGE
                ================================================== */}

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


            {/* ==================================================
                HEADING
                ================================================== */}

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

              Get 20% Off

            </h2>


            {/* ==================================================
                DESCRIPTION
                ================================================== */}

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