const Popup = ({
  popup,
  setPopup,
  title,
  description,
  type,
}) => {

  // If popup is false,
  // return nothing.
  //
  // This means the popup will NOT exist in the UI.
  if (!popup) {
    return null;
  }


  // Function to close popup
  const closePopup = () => {
    setPopup(false);
  };


  return (

    /*
      fixed = popup stays relative to browser window

      inset-0 =

      top: 0
      right: 0
      bottom: 0
      left: 0

      So this overlay covers the entire screen.
    */
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        p-4
      "
    >

      {/* =================================================
          POPUP BOX
          ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-md
          rounded-2xl
          bg-white
          shadow-2xl
          overflow-hidden
          animate-[popup_0.2s_ease-out]
        "
      >

        {/* =================================================
            CLOSE BUTTON
            ================================================= */}

        <button
          onClick={closePopup}
          className="
            absolute
            top-4
            right-4
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            bg-slate-100
            text-slate-500
            hover:bg-slate-200
            hover:text-slate-800
            transition
          "
        >
          ✕
        </button>


        {/* =================================================
            ICON
            ================================================= */}

        <div className="flex justify-center pt-8">

          <div
            className={`
              w-16
              h-16
              rounded-full
              flex
              items-center
              justify-center
              text-3xl

              ${
                type === "delete"
                  ? "bg-red-100"
                  : "bg-blue-100"
              }
            `}
          >

            {type === "delete" ? "🗑️" : "✏️"}

          </div>

        </div>


        {/* =================================================
            TITLE + DESCRIPTION
            ================================================= */}

        <div className="text-center px-6 pt-5">

          {/* Popup title */}

          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>


          {/* Popup description */}

          <p className="mt-3 text-slate-500 leading-relaxed">
            {description}
          </p>

        </div>


        {/* =================================================
            BUTTONS
            ================================================= */}

        <div className="flex gap-3 px-6 py-6">

          {/* ---------------------------------------------
              NO / CANCEL BUTTON
              --------------------------------------------- */}

          <button
            onClick={closePopup}
            className="
              flex-1
              px-5
              py-3
              rounded-xl
              border
              border-slate-300
              bg-white
              text-slate-700
              font-semibold
              hover:bg-slate-50
              transition
            "
          >
            No, Cancel
          </button>


          {/* ---------------------------------------------
              YES BUTTON
              --------------------------------------------- */}

          <button
            onClick={closePopup}
            className={`
              flex-1
              px-5
              py-3
              rounded-xl
              text-white
              font-semibold
              transition
              active:scale-95

              ${
                type === "delete"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }
            `}
          >

            {type === "delete"
              ? "Yes, Delete"
              : "Yes, Edit"}

          </button>

        </div>

      </div>

    </div>
  );
};

export default Popup;