"use client";
import React from "react";

const locations = [
  {
    kota: "Bandung",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63307.76845590938!2d107.56607984030676!3d-6.89803877539126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d0db51f01d%3A0x1677f66c34e3e6dd!2sJl.%20Kebon%20Kawung%20No.49-52%2C%20Pasir%20Kaliki%2C%20Kec.%20Cicendo%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040171!5e0!3m2!1sid!2sid!4v1721890108370!5m2!1sid!2sid",
    alamat:
      "Jl. Kebon Kawung No.49-52, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40171",
    link: "https://maps.app.goo.gl/TF7dVc7aDuEN4ow6A?g_st=com.google.maps.preview.copy",
  },
  {
    kota: "Malang",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126842.24383196414!2d112.58486129879577!3d-7.964686213497913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62829275d586f%3A0xf7e8d244f8c06ef3!2sJl.%20Puntadewa%20III%20No.14%2C%20Polehan%2C%20Kec.%20Blimbing%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065121!5e0!3m2!1sid!2sid!4v1721890255082!5m2!1sid!2sid",
    alamat:
      "Jl. Kalimosodo IV no 7, Polehan, Blimbing, Kota Malang, Jawa Timur 65121",
    link: "https://maps.app.goo.gl/QJvtPyvVrSzYGjH86?g_st=com.google.maps.preview.copy",
  },
];

export default function MapsKontak() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-64 sm:h-72"
            >
              <iframe
                src={loc.embedUrl}
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-none rounded-t-xl pointer-events-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-3 left-3 bg-yellow-300 text-black font-semibold px-4 py-1 rounded-full text-xs shadow-md">
                {loc.kota}
              </div>
            </a>

            <div className="p-5 text-gray-800 text-sm leading-relaxed">
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition"
              >
                {loc.alamat}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
