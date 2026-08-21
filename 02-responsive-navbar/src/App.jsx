import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* =========================================
          NAVBAR
          ========================================= */}

      <Navbar />


      {/* =========================================
          PAGE CONTENT
          ========================================= */}

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-gray-900
          "
        >
          Responsive Navbar
        </h1>

        <p
          className="
            mt-4
            max-w-2xl
            text-lg
            leading-8
            text-gray-600
          "
        >
          We are building a professional responsive
          navigation bar step by step.
        </p>

      </main>

    </div>
  );
}

export default App;