import { useState } from "react";
import "./tabs.css"; // CSS faylni import qilish

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("PROGRAMMES");

  const renderContent = () => {
    switch (activeTab) {
      case "PROGRAMMES":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Undergraduate & Postgraduate:</h2>
          </div>
        );
      case "SCHOLARSHIPS":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Fees</h2>
          </div>
        );
      case "REQUIREMENTS":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Undergraduate program:</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-blue-900 text-white rounded-lg shadow-lg">
      <div className="flex border-b border-gray-400">
        {["PROGRAMMES", "SCHOLARSHIPS", "REQUIREMENTS"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold ${
              activeTab === tab ? "activeTab" : "text-gray-300 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}