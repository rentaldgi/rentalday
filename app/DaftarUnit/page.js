"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardUnit from "../components/CardUnit/CardUnit";
import { units } from "../../data/units";
import AnimatePage from "../components/AnimatePage";

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    harga: "",
    daerah: "",
    kapasitas: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  const filteredUnits = units.filter((unit) => {
    const textMatch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const hargaMatch = !filters.harga || unit.harga === filters.harga;
    const daerahMatch = !filters.daerah || unit.daerah === filters.daerah;
    const kapasitasMatch =
      !filters.kapasitas || unit.kapasitas === filters.kapasitas;

    return textMatch && hargaMatch && daerahMatch && kapasitasMatch;
  });

  const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
  const paginatedUnits = filteredUnits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  // ✅ Diperbaiki: harga diurut dari terendah
  const getOptions = (key) => {
    const uniqueValues = [...new Set(units.map((u) => u[key]))];
    if (key === "harga") {
      return uniqueValues.sort((a, b) => parseInt(a) - parseInt(b));
    }
    return uniqueValues;
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        <div
          className="relative bg-cover bg-center h-auto py-6 sm:h-56 md:h-64 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/images/RD-bg_daftarunit.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          {/* Search + Filter Icon */}
          <div className="relative z-10 flex w-full max-w-2xl flex-wrap sm:flex-nowrap items-center gap-2">
            <div className="relative flex-1 min-w-[150px]">
              <input
                type="text"
                placeholder="Cari Unit"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-l-full outline-none border border-[#FFE644] text-red-800 bg-white placeholder-yellow-600 focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-white text-red-700 p-2 border border-[#FFE644] rounded-r-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h18M6 8h12M4 12h16M8 16h8M10 20h4"
                />
              </svg>
            </button>
          </div>

          {/* Filter Dropdown */}
          {showFilter && (
            <div className="relative z-20 mt-4 w-full max-w-4xl px-2">
              <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-3">
                  {Object.keys(filters).map((key) => (
                    <select
                      key={key}
                      className="bg-white text-red-700 px-4 py-2 rounded-full shadow text-sm focus:outline-none flex-1 min-w-[100px]"
                      value={filters[key]}
                      onChange={(e) =>
                        setFilters({ ...filters, [key]: e.target.value })
                      }
                    >
                      <option value="">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </option>
                      {getOptions(key).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedUnits.map((unit, index) => (
              <CardUnit
                key={`${unit.id}-${index}`}
                id={unit.id}
                name={unit.name}
                description={unit.description}
                image={unit.image}
                role={unit.role}
              />
            ))}
          </div>

          {filteredUnits.length === 0 && (
            <div className="text-center py-10 sm:py-12 text-gray-500 text-sm sm:text-base">
              Tidak ada unit ditemukan.
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10 text-black">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                &lt;
              </button>
              <span className="text-sm font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </AnimatePage>
      <Footer />
    </div>
  );
}
