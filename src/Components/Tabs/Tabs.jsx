import React, { useState } from "react";
import "./tabs.css";

export default function Tabs({ university }) {
  const [activeTab, setActiveTab] = useState("PROGRAMMES");

  const renderContent = () => {
    switch (activeTab) {
      case "PROGRAMMES":
        return (
          <div className="tab-content">
            <img src="https://static.tildacdn.one/tild3861-3931-4334-a464-663535353632/programmes-min.png" alt="programmes" className="tab-img" />
            <div>
              {university.programme_set.map((program, i) => (
                <div key={i}>
                  <h3 className="tab-title">{program.title}</h3>
                  <ul>
                    {program.programmesdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "SCHOLARSHIPS":
        return (
          <div className="tab-content">
            <img src="https://static.tildacdn.one/tild3237-3635-4563-b563-636331303833/scholarships-min.png" alt="scholarships" className="tab-img" />
            <div>
              {university.scholarship_set.map((scholarship, i) => (
                <div key={i}>
                  <h3 className="tab-title">{scholarship.title}</h3>
                  <ul>
                    {scholarship.programmesdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "REQUIREMENTS":
        return (
          <div className="tab-content">
            <img src="https://static.tildacdn.one/tild6136-6161-4837-b466-363166306639/ruqiere-min.png" alt="requirements" className="tab-img" />
            <div>
              {university.requirement_set.map((requirement, i) => (
                <div key={i}>
                  <h3 className="tab-title">{requirement.title}</h3>
                  <ul>
                    {requirement.requirementsdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {["PROGRAMMES", "SCHOLARSHIPS", "REQUIREMENTS"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
}