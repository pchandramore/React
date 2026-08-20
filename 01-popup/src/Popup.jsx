import React from "react";

const Popup = ({ isOpen, onClose }) => {

  // If the popup is not open,
  // don't render anything.
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      {/* 
        Popup container

        max-w-lg  → maximum width
        w-full    → responsive width
        rounded-2xl → rounded corners
        shadow-2xl → large shadow
      */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Close button */}
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
            transition
            hover:bg-gray-100
            hover:text-black
            focus:outline-none
            focus:ring-2
            focus:ring-gray-400
          "
          aria-label="Close popup"
        >
          ✕
        </button>


        {/* Image */}
        <img
          src="/popup-offer.jpg"
          alt="Special offer"
          className="h-64 w-full object-cover"
        />


        {/* Content */}
        <div className="px-6 py-8 text-center">

          {/* Small label */}
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


          {/* CTA */}
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
              transition
              duration-200
              hover:bg-gray-800
              hover:shadow-lg
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
  );
};

export default Popup;