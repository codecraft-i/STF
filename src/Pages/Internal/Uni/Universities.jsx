import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "@components/Header/Header/Header";

import './universities.css'

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Har safar 8 ta universitet chiqaramiz

  const location = useLocation();

  useEffect(() => {
    axios.get("http://localhost:8000/api/countries/")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => console.error("Error fetching countries:", error));

    axios.get("http://localhost:8000/api/universities/")
      .then(response => setUniversities(response.data.data))
      .catch(error => console.error("Error fetching universities:", error));

    if (location.state?.selectedCountry) {
        setSelectedCountries([location.state.selectedCountry]);
    }

    return () => {
      window.history.replaceState({}, document.title);
    };
  }, [location.state]);

  const handleCheckboxChange = (countryName) => {
    setSelectedCountries(prev =>
      prev.includes(countryName)
        ? prev.filter(c => c !== countryName)
        : [...prev, countryName]
    );
  };

  // Universitetlarni filtrlash va tartiblash
  const filteredUniversities = universities
    .filter(uni => selectedCountries.length === 0 || selectedCountries.includes(uni.country.name))
    .sort((a, b) => a.ranking - b.ranking);

  // Faqat `visibleCount` ta universitetni chiqaramiz
  const visibleUniversities = filteredUniversities.slice(0, visibleCount);

  // "Load More" tugmasi bosilganda yana 8 ta universitet qo'shish
  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Filter by Country</h2>
        <div className="mb-4">
          {countries.map((country) => (
            <label key={country.id} className="mr-4">
              <input
                type="checkbox"
                checked={selectedCountries.includes(country.name)}
                onChange={() => handleCheckboxChange(country.name)}
              />{" "}
              {country.name}
            </label>
          ))}
        </div>

        {/* Filter tanlangan davlatlar bo'yicha ko'rsatish */}
        <div className="filter-wrapper bg-blue-900 text-white p-3 rounded-lg mb-4">
          <p>Found: {filteredUniversities.length}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCountries.map((country) => (
              <div
                key={country}
                className="bg-blue-700 text-white px-3 py-1 rounded-full flex items-center"
              >
                <span>{country}</span>
                <button
                  className="ml-2 text-gray-300 hover:text-white"
                  onClick={() => handleCheckboxChange(country)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {selectedCountries.length > 0 && (
            <button
              className="mt-2 text-gray-300 hover:underline"
              onClick={() => setSelectedCountries([])}
            >
              Clear all
            </button>
          )}
        </div>

        {filteredUniversities.length === 0 ? (
          <p>No universities found for selected country.</p>
        ) : (
          <div className="uniBox">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleUniversities.map((uni) => (
                <div key={uni.id} className="border p-4 rounded shadow relative">
                  {uni.short_info.length > 0 && (
                    <div className="absolute top-2 left-2 flex gap-2">
                      {uni.short_info.map((info) => (
                        <div
                          key={info.id}
                          className="text-white text-xs font-bold px-2 py-1 rounded"
                          style={{ backgroundColor: info.bgColor }}
                        >
                          <span style={{ color: info.fontColor }}>{info.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <img
                    src={uni.image}
                    alt={uni.name}
                    id="uniImg"
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="text-lg font-bold mt-2">{uni.name}</h3>
                  <p className="text-sm text-gray-600">Ranking: {uni.ranking}</p>
                  <Link
                    to={`/universities/university/${encodeURIComponent(uni.name)}`}
                    className="text-blue-500 hover:underline"
                  >
                    More Info
                  </Link>
                </div>
              ))}
            </div>

            {/* Load More tugmasi faqat hamma universitetlar chiqarilmaganda ko‘rinadi */}
            {visibleCount < filteredUniversities.length && (
              <div className="text-center mt-4">
                <button
                  onClick={loadMore}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Universities;