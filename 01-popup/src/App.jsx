import { useState } from "react";
import Popup from "./Popup";

function App() {

  /*
    ------------------------------------------------
    POPUP STATE
    ------------------------------------------------

    true  → popup is open
    false → popup is closed
  */

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ==================================================
          WEBSITE CONTENT
          ================================================== */}

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >

        {/* ==================================================
            HERO SECTION
            ================================================== */}

        <section className="min-h-screen">

          <div className="max-w-2xl">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              New Collection
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-gray-900
                md:text-6xl
              "
            >
              Welcome to our website
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-gray-600
              "
            >
              This is an example website behind our
              promotional popup.
            </p>

          </div>

        </section>


        {/* ==================================================
            ABOUT SECTION
            ================================================== */}

        <section className="min-h-screen py-20">

          <h2 className="text-3xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>

        </section>


        {/* ==================================================
            PRODUCTS SECTION
            ================================================== */}

        <section className="min-h-screen py-20">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Products
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow">
              <h3 className="text-xl font-semibold">
                Product One
              </h3>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-8 shadow">
              <h3 className="text-xl font-semibold">
                Product Two
              </h3>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-8 shadow">
              <h3 className="text-xl font-semibold">
                Product Three
              </h3>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>

          </div>

        </section>


        {/* ==================================================
            LONG CONTENT
            ================================================== */}

        <section className="min-h-screen py-20">

          <h2 className="text-3xl font-bold text-gray-900">
            More Information
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-gray-600">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>

            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla.
            </p>

            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero.
            </p>

            <p>
              Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
              nibh. Aenean quam. In scelerisque sem at dolor.
            </p>

          </div>

        </section>


        {/* ==================================================
            FOOTER CONTENT
            ================================================== */}

        <section className="min-h-screen py-20">

          <h2 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Contact us to learn more about our products and services.
          </p>

        </section>

      </main>


      {/* ==================================================
          REUSABLE PROMOTIONAL POPUP
          ==================================================

          We now pass the popup content through props.

          Popup.jsx doesn't need to know what the
          actual offer is.

          This makes Popup a reusable component.
          ================================================== */}

      <Popup

        /*
          Controls whether popup is visible.
        */

        isOpen={isOpen}


        /*
          Function passed from parent to child.

          Popup calls this when it needs to close.
        */

        onClose={() => setIsOpen(false)}


        /*
          Content props
        */

        badge="Special Offer"

        title="Get 20% Off"

        description="Discover our latest collection and enjoy 20% off your first order."

        image="/popup-offer.jpg"

        buttonText="Shop Now"
      />

    </div>
  );
}

export default App;