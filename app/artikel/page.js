"use client";

import { FaSearch, FaSpinner } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import AnimatePage from "../components/AnimatePage";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://backend.ptdahliaglobalindo.id/article?entity=RENTAL_MOTOR")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        console.error("Gagal fetch artikel:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.innerWidth < 640;
      setItemsPerPage(isMobile ? 3 : 6);
      setCurrentPage(1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  function formatTanggalIndo(tanggalString) {
    const tanggal = new Date(tanggalString);
    return tanggal.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span
          key={index}
          className="bg-[#C08931] text-white font-semibold px-1 rounded"
        >
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  }

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <FaSpinner className="text-4xl text-yellow-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Header Section */}
        <div className="bg-white px-4 sm:px-8 md:px-20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                ARTIKEL KAMI
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl text-left leading-relaxed tracking-wide">
                RentalDay aktif menginformasikan berbagai kegiatan untuk
                <span className="hidden md:inline">
                  <br />
                </span>{" "}
                meningkatkan kualitas layanan di bidang rental
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[300px]">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <input
                  type="text"
                  placeholder="Cari judul artikel..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-transparent outline-none text-black text-sm md:text-base w-full"
                />
                <FaSearch className="text-gray-500 text-lg ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="bg-[#B40000] px-4 sm:px-8 md:px-20 py-12 shadow-xl min-h-[50vh]">
          {filteredArticles.length === 0 ? (
            <div className="text-center text-white text-base py-10">
              Tidak ada artikel yang cocok dengan pencarian.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map((article) => (
                <Link href={`/artikel/${article.slug}`} key={article.id}>
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 shadow-xl flex flex-col h-[320px]">
                    <div className="w-full h-40 relative overflow-hidden">
                      <Image
                        src={`https://backend.ptdahliaglobalindo.id${article.thumbnail}`}
                        alt={article.title}
                        className="w-full h-full object-cover absolute inset-0"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-base font-semibold text-black mb-2 line-clamp-1">
                          {highlightKeyword(article.title, searchTerm)}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                          {article.content}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 text-right mt-auto">
                        {formatTanggalIndo(article.publishedAt)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && filteredArticles.length > 0 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                &lt;
              </button>

              <span className="text-sm font-semibold text-white">
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
