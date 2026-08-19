import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
  // State for Delete popup
  // false = popup is hidden
  // true = popup is visible
  const [deletePopup, setDeletePopup] = useState(false);

  // State for Edit popup
  const [editPopup, setEditPopup] = useState(false);

  return (
    // Main page
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-10">

        {/* Page heading */}
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Popup Practice
        </h1>

        <p className="text-slate-500 text-center mt-2 mb-8">
          Reusable React Popup Component
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">

          {/* Delete button */}
          <button
            onClick={() => {
              // Change deletePopup from false → true
              // This will show the Delete popup
              setDeletePopup(true);
            }}
            className="
              px-6 py-3
              rounded-xl
              bg-red-500
              text-white
              font-semibold
              shadow-md
              hover:bg-red-600
              hover:shadow-lg
              active:scale-95
              transition-all
            "
          >
            🗑️ Delete
          </button>

          {/* Edit button */}
          <button
            onClick={() => {
              // Change editPopup from false → true
              // This will show the Edit popup
              setEditPopup(true);
            }}
            className="
              px-6 py-3
              rounded-xl
              bg-blue-500
              text-white
              font-semibold
              shadow-md
              hover:bg-blue-600
              hover:shadow-lg
              active:scale-95
              transition-all
            "
          >
            ✏️ Edit
          </button>

        </div>
      </div>


      {/* =====================================================
          DELETE POPUP
          ===================================================== */}

      <Popup
        popup={deletePopup}
        setPopup={setDeletePopup}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        type="delete"
      />


      {/* =====================================================
          EDIT POPUP
          ===================================================== */}

      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title="Edit Item"
        description="Are you sure you want to edit this item?"
        type="edit"
      />

    </div>
  );
}

export default App;