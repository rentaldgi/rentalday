"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SosialMediaDropdown = ({ entity }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [admins, setAdmins] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await fetch("https://backend.ptdahliaglobalindo.id/whatsapp-admins"); // backend lokal
        const data = await res.json();
        setAdmins(data);
      } catch (err) {
        console.error("Failed to load admins", err);
      }
    };
    fetchAdmins();
  }, []);

  const handleWhatsappClick = async (admin) => {
    try {
      await fetch("https://backend.ptdahliaglobalindo.id/whatsapp-clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminId: admin.id,
          entity: admin.entity,
        }),
      });

      window.open(`https://wa.me/${admin.phoneNumber}`, "_blank");
    } catch (err) {
      console.error("Error logging click", err);
      window.open(`https://wa.me/${admin.phoneNumber}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start gap-4 w-full">

      {/* WhatsApp */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("whatsapp")}
          className="flex items-center justify-between w-full px-4 py-3 text-green-700 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} />
            WhatsApp
          </div>
          <span className={`transition-transform ${activeDropdown === "whatsapp" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "whatsapp" ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {admins
              .filter(admin => admin.entity === entity) // filter per project entity
              .map(admin => (
                <div key={admin.id}>
                  <div className="font-semibold">{admin.name}</div>
                  <button
                    onClick={() => handleWhatsappClick(admin)}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mt-1 text-sm"
                  >
                    (+62) {admin.phoneNumber}
                  </button>
                  <hr className="border-t border-green-400 my-2" />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* TikTok dan Instagram tetap statis */}
      {/* TikTok */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("tiktok")}
          className="flex items-center justify-between w-full px-4 py-3 text-black font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_tiktok-icon.png" alt="TikTok Icon" width={20} height={20} />
            TikTok
          </div>
          <span className={`transition-transform ${activeDropdown === "tiktok" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "tiktok" ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[{ area: "Bandung ( Mahasiswa )", users: [{ handle: "@rentalday.student", link: "https://www.tiktok.com/@rentalday.student" }] }].map((region, index) => (
              <div key={index}>
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <a key={idx} href={user.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-1 rounded-full text-xs hover:underline">{user.handle}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("instagram")}
          className="flex items-center justify-between w-full px-4 py-3 text-pink-500 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_instagram-icon.png" alt="Instagram Icon" width={20} height={20} />
            Instagram
          </div>
          <span className={`transition-transform ${activeDropdown === "instagram" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "instagram" ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[{ area: "Bandung ( Mahasiswa )", users: [{ handle: "@rentalday.student", link: "https://instagram.com/rentalday.student" }] }].map((region, index) => (
              <div key={index}>
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <a key={idx} href={user.link} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-1 rounded-full text-xs hover:underline">{user.handle}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SosialMediaDropdown;
