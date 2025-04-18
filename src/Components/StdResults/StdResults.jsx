// components/StdResults/StdResults.jsx
import React, { useState } from "react";
import bg from "@assets/HomeAssests/bgResults.jpeg";
import "./StdResults.css";

function StdResults({ visa }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="visa-card"
        style={{ backgroundImage: `url(${bg})` }}
        onClick={() => setShowModal(true)}
      >
        <div className="visa-title">VIZA MUBORAK!</div>
        <img src={visa} alt="Visa Document" className="visa-image" />
        <div className="visa-footer">KASBIY TA'LIM</div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={visa} alt="Visa Full View" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default StdResults;