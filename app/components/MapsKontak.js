"use client";
import React, { useEffect, useState } from "react";

import { apiFetch, ENTITY } from "@/client/ApiClient";

export default function MapsKontak() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch(`/locations?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => setLocations(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Gagal fetch lokasi:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-white/80">Memuat lokasi...</p>;
  }

  if (locations.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <div
            key={loc.id ?? idx}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <a
              href={loc.link || `https://www.google.com/maps?q=${encodeURIComponent(loc.alamat)}`}
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
                href={loc.link || `https://www.google.com/maps?q=${encodeURIComponent(loc.alamat)}`}
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
