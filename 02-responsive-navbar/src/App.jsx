import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  /*
  ========================================================
  MOBILE MENU STATE
  ========================================================

  false → mobile menu is closed
  true  → mobile menu is open
  */

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* ==================================================
          NAVBAR
          ================================================== */}

      <nav className="border-b border-gray-200 bg-white">

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
            href="#"
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
              ==================================================

              hidden
              → hidden on mobile

              md:flex
              → becomes flex from medium screen size
              ================================================== */}

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >

            <a
              href="#"
              className="
                text-sm
                font-medium
                text-gray-700
                transition-colors
                hover:text-black
              "
            >
              Home
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                text-gray-700
                transition-colors
                hover:text-black
              "
            >
              About
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                text-gray-700
                transition-colors
                hover:text-black
              "
            >
              Services
            </a>

            <a
              href="#"
              className="
                text-sm
                font-medium
                text-gray-700
                transition-colors
                hover:text-black
              "
            >
              Contact
            </a>

          </div>


          {/* ==================================================
              MOBILE MENU BUTTON
              ==================================================

              md:hidden
              → button disappears on desktop
              ================================================== */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}

            className="
              rounded-lg
              p-2
              text-gray-700
              transition
              hover:bg-gray-100
              hover:text-black
              md:hidden
            "

            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
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
            MOBILE NAVIGATION
            ==================================================

            This menu is only visible on mobile.

            md:hidden
            → hidden on desktop

            We conditionally render it based on
            isMenuOpen.
            ================================================== */}

        {isMenuOpen && (

          <div
            className="
              border-t
              border-gray-200
              px-6
              py-4
              md:hidden
            "
          >

            <div className="flex flex-col gap-4">

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-black
                "
              >
                Home
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-black
                "
              >
                About
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-black
                "
              >
                Services
              </a>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-black
                "
              >
                Contact
              </a>

            </div>

          </div>

        )}

      </nav>


      {/* ==================================================
          PAGE CONTENT
          ================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-4xl font-bold text-gray-900">
          Responsive Navbar
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Resize the browser window to see the responsive
          navigation change between desktop and mobile.
        </p>

      </main>

    </div>
  );
}

export default App;