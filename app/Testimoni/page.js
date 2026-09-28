"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatePage from "../components/AnimatePage";
import Image from "next/image";

const testimonials = [
  {
    name: "Riyadatunnisa",
    location: "Bandung",
    video: "/videos/testimoni-rental-1.mp4",
    text: "Rute ke Pool Bandung. Tonton video di atas untuk panduan jalur tercepat dari Stasiun Bandung. Gak bakal nyasar!",
  },
  {
    name: "Ayu Nadya",
    location: "Malang",
    video: "/videos/testimoni-rental-2.mp4",
    text: "Petunjuk Lokasi Malang. Bingung cari lokasinya? Intip video panduan rute ini biar perjalananmu lebih lancar.",
  },
  {
    name: "Cahaya Insani",
    location: "Bogor",
    video: "/videos/testimoni-rental-3.mp4",
    text: "Cara ke Pool Bogor. Ikuti petunjuk arah di video ini biar gampang sampai tempat pengambilan unit.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/images/testimonial.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <AnimatePage>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Judul HP */}
          <h2 className="text-2xl md:hidden font-bold text-center mb-6">
            Tentang Rentalday
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
            {/* Box Besar */}
            <div className="relative w-[90%] max-w-sm md:w-full md:max-w-md">
              <div className="bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col h-[400px]">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <video
                    src={testimonials[currentIndex].video}
                    controls
                    className="w-full h-full object-cover"
                  ></video>
                </div>
                <div className="flex items-center mt-3 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-md font-semibold">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-2 gap-4">
                  <p className="text-sm text-gray-700 flex-1">
                    {testimonials[currentIndex].text}
                  </p>
                  {/* <Image
                    src="/images/logo_rentalday.png"
                    alt="Logo"
                    className="h-14 object-contain"
                  /> */}
                  <Image
                    src="/images/logo_rentalday.png"
                    alt="Logo"
                    width={100} // kamu bisa ganti ukurannya
                    height={56} // sesuaikan juga, agar proporsional
                    className="h-14 object-contain"
                  />
                </div>
              </div>

              {/* Tombol Navigasi Desktop */}
              <button
                onClick={handlePrev}
                className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Judul & Box Kecil */}
            <div className="flex flex-col items-start w-full md:w-auto">
              {/* Judul Desktop */}
              <h2 className="hidden md:block text-4xl font-bold text-white ml-2 md:ml-8 mb-4">
                Tentang Rentalday
              </h2>

              <div className="hidden md:flex mt-2 flex-col md:flex-row gap-8 md:ml-8">
                {[
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ],
                  testimonials[(currentIndex + 1) % testimonials.length],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-[90%] max-w-sm md:w-80 bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                      <video
                        src={item.video}
                        controls
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="flex items-center mt-3 justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-md font-semibold">
                          {item.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between mt-2 gap-4">
                      <p className="text-sm text-gray-700 flex-1">
                        {item.text}
                      </p>
                      {/* <Image
                        src="/images/logo_rentalday.png"
                        alt="Logo"
                        className="h-14 object-contain"
                      /> */}
                      <div className="relative w-24 h-14">
                        <Image
                          src="/images/logo_rentalday.png"
                          alt="Logo"
                          width={100}
                          height={100}
                          className="h-14 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Navigasi HP */}
              <div className="flex justify-center gap-4 mt-6 md:hidden w-full">
                <button
                  onClick={handlePrev}
                  className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </AnimatePage>
    </div>
  );
}
