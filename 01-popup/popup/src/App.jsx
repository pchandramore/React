import { useState } from "react";

function App() {

  // State controls whether the popup is visible
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>

      <h1>My Website</h1>

      {/* Show popup only when isOpen is true */}
      {isOpen && (
        <div>

          <h2>Special Offer</h2>

          <p>
            Get 20% off your first order.
          </p>

          <button onClick={() => setIsOpen(false)}>
            Close
          </button>

        </div>
      )}

    </div>
  );
}

export default App;