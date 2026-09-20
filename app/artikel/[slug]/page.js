"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { HiArrowLeft } from "react-icons/hi";
import AnimatePage from "@/app/components/AnimatePage";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { apiFetch, assetUrl, ENTITY } from "@/client/ApiClient";

export default function DetailArtikel() {
  const { slug } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch(`/article/${slug}?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => setArtikel(data))
      .catch((err) => {
        console.error("Gagal mengambil data artikel:", err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <FaSpinner className="text-4xl text-yellow-500 animate-spin" />
      </div>
    );
  }

  if (!artikel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Artikel tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        <div className="relative">
          <Image
            src="/images/bgdetailartikel.png"
            alt="Header"
            className="w-full object-cover h-48 sm:h-64 md:h-[320px]"
          />
          <button
            onClick={() => window.history.back()}
            className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white/90 text-black px-3 py-2 sm:px-3 sm:py-3 rounded-full shadow font-medium flex items-center gap-1 sm:gap-2 hover:bg-gray-100 transition text-sm sm:text-base"
          >
            <HiArrowLeft className="text-lg sm:text-xl" />
            <span className="hidden sm:inline"></span>
          </button>
        </div>

        <div className="relative z-10 -mt-32 sm:-mt-40 md:-mt-48 px-4 sm:px-6 md:px-8 lg:px-20 mb-12">
          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm border border-yellow-300 rounded-md shadow-lg py-6 sm:py-8 px-4 sm:px-6 md:px-8">
            <Image
              src={assetUrl(artikel.data.thumbnail)}
              alt="Gambar Artikel"
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded mb-6"
            />

            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
                {artikel.data.title}
              </h1>
              {(artikel.data.content || "").split("\n").map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-sm sm:text-base mb-4 text-justify leading-relaxed"
                >
                  {p.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </AnimatePage>
    </div>
  );
}
