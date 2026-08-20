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
          WEBSITE HEADER
          ================================================== */}

      <header className="border-b bg-white">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            py-5
          "
        >

          {/* Website logo */}
          <h1 className="text-xl font-bold text-gray-900">
            My Website
          </h1>


          {/* Navigation */}
          <nav className="hidden gap-6 md:flex">

            <a
              href="#"
              className="
                text-gray-600
                transition
                hover:text-black
              "
            >
              Home
            </a>

            <a
              href="#"
              className="
                text-gray-600
                transition
                hover:text-black
              "
            >
              Products
            </a>

            <a
              href="#"
              className="
                text-gray-600
                transition
                hover:text-black
              "
            >
              About
            </a>

          </nav>

        </div>
      </header>


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

      </main>


      {/* ==================================================
          PROMOTIONAL POPUP
          ================================================== */}

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </div>
  );
}

export default App;