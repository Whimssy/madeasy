import React, { useState } from "react";
import TaskChecklist from "./TaskChecklist";
import "./StandardCleaningOptions.css";

function StandardCleaningOptions() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="option-container">
      {!selectedType ? (
        <>
          <h2>BOOKING FOR A HOME OR AN OFFICE?</h2>
          <div className="choice-grid">
            <div className="choice-card" onClick={() => setSelectedType("Home")}>
              <img
                src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Home cleaning"
                className="choice-image"
              />
              <button>🏠 HOME </button>
            </div>
            <div className="choice-card" onClick={() => setSelectedType("Office")}>
             <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office cleaning"
                className="choice-image"
              /> 
              <button>🏢 OFFICE</button>
            </div>
          </div>
        </>
      ) : (
        <TaskChecklist type={selectedType} />
      )}
    </div>
  );
}

export default StandardCleaningOptions;