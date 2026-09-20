"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatePage from "./components/AnimatePage";
import Image from "next/image";
import { apiFetch, assetUrl, ENTITY } from "@/client/ApiClient";

function formatTanggalIndo(tanggalString) {
  const tanggal = new Date(tanggalString);
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiFetch(`/article?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 3)); // Ambil 3 artikel pertama
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <AnimatePage>
        {/* Hero Section */}
        <section className="relative bg-black text-white min-h-[600px] flex items-center px-4 md:px-10 py-10">
          <Image
            src="/images/rentalmotor_bg.png"
            alt="Scooter Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-30 bg-cover"
          />
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
              <Image
                src="/images/motor2+bayangan.png"
                alt="Motor dengan Bayangan"
                width={500} // ← bisa kamu sesuaikan
                height={300} // ← sesuaikan juga dengan rasio gambarnya
                className="w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right md:pr-28">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight">
                Rentalday
              </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Temukan layanan rental terbaik dengan harga <br />
                kompetitif dan proses cepat hanya pada <br />
                layanan kami.
              </p>
              <div className="mt-6 flex justify-center md:justify-end gap-1 flex-wrap pb-18">
                <Link
                  href="/DaftarUnit"
                  className="bg-white text-red-600 px-6 py-2 rounded-l-full shadow hover:bg-gray-100"
                >
                  Lihat Daftar Motor
                </Link>
                <Link
                  href="/Kontak"
                  className="bg-white text-red-600 px-6 py-2 rounded-r-full shadow hover:bg-gray-100"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-5 px-4 md:px-10 ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                ["icon_pelayanan.png", "Pelayanan Terbaik"],
                ["icon_keamanan.png", "Keamanan Terjaga"],
                ["icon_perawatan.png", "Perawatan Rutin"],
                ["icon_truk.png", "Cash On Delivery"],
              ].map(([icon, label], i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  {/* ICON BENEFIT HERO SECTION */}
                  {/* <Image
                    src={`/images/${icon}`}
                    alt=""
                    className="w-10 h-10"
                  /> */}
                  <Image
                    src={`/images/${icon}`}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <p className="text-sm md:text-base font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section Artikel Terbaru --- */}
       <section className="bg-[#FFDD00] px-3 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
        <div className="w-[94%] mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6">
          {articles[0] && (
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-2/3 h-auto lg:h-[600px] sm:h-[500px] overflow-hidden flex flex-col">
              <div className="w-full h-40 md:h-60 sm:h-56 lg:h-80 relative flex-shrink-0">
                <Image
                  src={assetUrl(articles[0].thumbnail)}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <Link
                  href={`/artikel/${articles[0].slug}`}
                  className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-white text-xs sm:text-sm text-black px-3 sm:px-4 py-1 rounded-full shadow hover:bg-gray-200"
                >
                  Lihat Detail
                </Link>
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-black line-clamp-2">{articles[0].title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                  {articles[0].content}
                </p>
              </div>
            </div>
          )}

          <div className="w-full lg:w-1/3 flex flex-col gap-3 sm:gap-4">
            {[articles[1], articles[2]].map(
              (item, index) =>
                item && (
                  <Link
                    key={index}
                    href={`/artikel/${item.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition"
                  >
                    <div className="w-full h-32 sm:h-36 relative flex-shrink-0">
                      <Image
                        src={`https://backend.ptdahliaglobalindo.id${item.thumbnail}`}
                        alt={item.title}
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="p-3 flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-black line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.content}</p>
                    </div>
                  </Link>
                )
            )}
            <Link
              href="/artikel"
              className="bg-white text-center text-black font-semibold py-2 sm:py-3 rounded-xl shadow hover:bg-yellow-100 text-sm sm:text-base"
            >
              Jelajahi Artikel
            </Link>
          </div>
        </div>
      </section>

        {/* Produk Highlight */}
        <section className="bg-[#B40000] py-10 px-6 md:px-20 text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold">Rentalday</h2>
              <h3 className="text-xl font-semibold mb-3">
                Rental Motor Indonesia
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Sebagai bagian dari ekosistem layanan PT Dahlia Group,
                Rentalday hadir untuk menjawab kebutuhan mobilitas masyarakat
                urban yang dinamis dengan menyediakan layanan rental motor yang
                praktis, terjangkau, dan dapat diandalkan.
                <br />
                <br />
                Melalui Rentalday, pelanggan dapat menikmati kemudahan proses
                sewa motor, mulai dari pemesanan yang cepat, unit terawat,
                hingga layanan pelanggan yang responsif.
              </p>
            </div>
            <div className="flex-1">
              {/* <Image
                src="/images/image1+border.png"
                alt="Produk Motor"
                className="w-full max-w-sm mx-auto drop-shadow-xl"
              /> */}
              <Image
                src="/images/image1+border.png"
                alt="Produk Motor"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Kenapa Harus Memilih */}
        <section className="bg-yellow-300 text-black px-3 sm:px-6 md:px-8 py-8 sm:py-12">
          <div className="w-[90%] md:w-[88%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Kenapa Harus Memilih <br /> Rentalday?
              </h2>
              {/* tabel isi  */}
              <div className="flex flex-col gap-4">
                {[
                  [
                    "icon-perawatan.png",
                    "Perawatan Motor Rutin Secara Berkala",
                  ],
                  [
                    "icon-motorbaru.png",
                    "Menyediakan Unit Motor Keluaran Terbaru",
                  ],
                  [
                    "icon-pembayaran.png",
                    "Metode Pembayaran Aman dan Profesional",
                  ],
                ].map(([icon, text], i) => (
                  <div
                    key={i}
                    className="bg-white text-black p-3 rounded-xl shadow flex items-center gap-3 h-[90px] w-full"
                  >
                    {/* <Image src={`/images/${icon}`} alt="" className="w-16 h-16 object-contain" /> */}
                    <Image
                      src={`/images/${icon}`}
                      alt=""
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-base font-semibold sm:text-lg leading-snug">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                ["icon-terpercaya.png", "Terpercaya dan Sudah Berbadan Hukum"],
                ["icon-dokumen.png", "Dokumen dan Legalitas Lengkap"],
                ["icon-layanan.png", "Layanan Antar Jemput (COD) Fleksibel"],
                ["icon-data.png", "Data Pribadi Pelanggan Terjamin Aman"],
              ].map(([icon, text], i) => (
                <div
                  key={i}
                  className="bg-white text-black p-3 rounded-xl shadow flex items-center gap-3 h-[90px] w-full"
                >
                  {/* <Image src={`/images/${icon}`} alt="" className="w-16 h-16 object-contain" /> */}
                  <Image
                    src={`/images/${icon}`}
                    alt=""
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-base font-semibold sm:text-lg leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Komitmen & Showcase Motor */}
        <section className="bg-gray-900 text-white text-center py-14 px-4 sm:px-6">
          {/* Animasi */}
          <style>{`
          @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-4 sm:mb-5 leading-relaxed px-2">
            Kami berkomitmen memberikan unit terbaik kepada penyewa,
            <br />
            karena kepuasan dan keselamatan Anda adalah prioritas kami.
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            NIKMATI PERJALANANMU
          </h1>
          
          <div className="overflow-hidden w-full mb-8">
            <div
              className="flex gap-6 w-max"
              style={{ animation: "scroll-loop 20s linear infinite" }}
            >
              {/* {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                <Image
                  key={i}
                  src={`/images/RD-motor${n}.png`}
                  alt={`Motor ${n}`}
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
                />
              ))} */}
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                <Image
                  key={i}
                  src={`/images/RD-motor${n}.png`}
                  alt={`Motor ${n}`}
                  width={200}
                  height={150}
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
                />
              ))}
            </div>
          </div>

          <Link
            href="/DaftarUnit"
            className="bg-white text-red-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 text-sm font-semibold"
          >
            Lihat Daftar Motor Rentalday
          </Link>
        </section>

        <Footer />
      </AnimatePage>
    </div>
  );
}
