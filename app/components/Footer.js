"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen bunga kiri atas */}
      <Image
        src="/images/kontakkiri.png"
        alt="Flower Top Left"
        width={160}
        height={160}
        className="absolute top-[-58px] left-0 w-140 z-0"
      />

      {/* Ornamen bunga kanan bawah */}
      <Image
        src="/images/kontakkanan.png"
        alt="Flower Bottom Right"
        width={140}
        height={140}
        className="absolute bottom-0 right-0 w-100 mb-10 z-0"
      />

      {/* Konten utama */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Media Sosial & Bank */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            <Link
              href="https://www.tiktok.com/@rentaldaybandung?_t=ZS-8ymvik1MGuH&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon_tt.png"
                alt="TikTok"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>

            <Link
              href="https://wa.me/6285724785060"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon_wa.png"
                alt="WhatsApp"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
            {/* Instagram */}
              <Link
                href="https://www.instagram.com/rentalday.id?igsh=ZzRzb3hybDNldDR3"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icon_ig.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
          </div>

          {/* Logo Bank */}
          <div className="absolute bottom-24 left-0 bg-[#FFDD00] py-2 pr-4 pl-2 rounded-full flex items-start gap-4 shadow-md z-10">
            <Image src="/images/pm_bni.png" alt="BNI" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_bca.png" alt="BCA" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mandiri.png" alt="Mandiri" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_qris.png" alt="QRIS" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mastercard.png" alt="Mastercard" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_visa.png" alt="Visa" width={24} height={24} className="w-8 h-8 object-contain" />
          </div>
          </div>

        {/* Kolom 2: Halaman + Kontak */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Halaman */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-yellow-500">Beranda</Link></li>
              <li><Link href="/Linkrtikel" className="hover:text-yellow-500">Artikel</Link></li>
              <li><Link href="/DaftarUnit" className="hover:text-yellow-500">Daftar Motor</Link></li>
              <li><Link href="/Testimoni" className="hover:text-yellow-500">Testimoni</Link></li>
              <li><Link href="/Kontak" className="hover:text-yellow-500">Kontak</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mb-1">
              <a href="mailto:rentaldaybandung@gmail.com" className="hover:text-yellow-500">
                rentaldaybandung@gmail.com
              </a>
            </p>
            <p>
              <Link href="tel:+6285724785060" className="hover:text-yellow-500">
                (+62) 857-2478-5060
              </Link>
            </p>
            <p className="text-xs text-gray-600">Admin 1</p>
            <p>
              <Link href="tel:+6287825171899" className="hover:text-yellow-500">
                (+62) 878-2517-1899
              </Link>
            </p>
            <p className="text-xs text-gray-600">Admin 2</p>
            <p>
              <Link href="tel:+6285136436020" className="hover:text-yellow-500">
                (+62) 851-3643-6020 
              </Link>
            </p>
            <p className="text-xs text-gray-600">Admin 3</p>
          </div>
        </div>

        {/* Kolom 3: Alamat */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>
            <Link
              href="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung,+Jawa+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Jl. Kebon Kawung No.49, Pasir Kaliki,
              <br />
              Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FFDD00] py-3 text-center text-xs text-black font-medium">
        © 2025 PT Dahlia Global Indo. Seluruh hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="relative bg-white text-black overflow-hidden">
//       {/* Ornamen bunga kiri atas */}
//       <Image
//         src="/images/kontakkiri.png"
//         alt="Flower Top Left"
//         className="absolute top-[-58px] left-0 w-140 z-0"
//       />

//       {/* Ornamen bunga kanan bawah */}
//       <Image
//         src="/images/kontakkanan.png"
//         alt="Flower Bottom Right"
//         className="absolute bottom-0 right-0 w-100 mb-10 z-0"
//       />

//       {/* Konten utama */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Kolom 1: Media Sosial & Bank */}
//         <div className="flex flex-col items-start gap-6">
//           {/* Ikon Media Sosial */}
//           <div className="flex space-x-4">
//             {/* <a href="#"><Image src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" /></a> */}
//             {/* tiktok */}
//             <Link
//               href="https://www.tiktok.com/@bandungrider?_t=ZS-8yJWY2aXeWm&_r=1"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image src="/images/icon_tt.png" alt="Instagram" className="w-8 h-8" />
//             </Link>

//             {/* WhatsApp */}
//             <Link
//               href="https://wa.me/6285724785060"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image src="/images/icon_wa.png" alt="WhatsApp" className="w-7 h-7" />
//             </Link>
//           </div>

//           {/* Logo Bank */}
//         <div className="-ml-10 md:-ml-20 self-start bg-yellow-300 rounded-full px-6 py-2 shadow-md flex items-center space-x-6">
//             <Image src="/images/pm_bni.png" alt="BNI" className="h-8" />
//             <Image src="/images/pm_bca.png" alt="BCA" className="h-8" />
//             <Image src="/images/pm_mandiri.png" alt="Mandiri" className="h-8" />
//             <Image src="/images/pm_qris.png" alt="QRIS" className="h-8" />
//           </div>
//         </div>

//         {/* Kolom 2: Halaman + Kontak */}
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           {/* Halaman */}
//           <div>
//             <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
//             <ul className="space-y-1">
//               <li><Link href="/ " className="hover:text-yellow-500">Beranda</Link></li>
//               <li><Link href="/Linkrtikel" className="hover:text-yellow-500">Artikel</Link></li>
//               <li><Link href="/DaftarUnit" className="hover:text-yellow-500">Daftar Motor</Link></li>
//               <li><Link href="/Testimoni" className="hover:text-yellow-500">Testimoni</Link></li>
//               <li><Link href="/Kontak" className="hover:text-yellow-500">Kontak</Link></li>
//             </ul>
//           </div>

//           {/* Kontak */}
//           <div>
//             <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
//             <p className="mb-1">
//               <a href="mailto:rentaldaybandung@gmail.com" className="hover:text-yellow-500">
//                 rentaldaybandung@gmail.com
//               </a>
//             </p>
//             <p>
//               <Link href="tel:+6285724785060" className="hover:text-yellow-500">
//                 (+62) 857-2478-5060
//               </Link>
//             </p>
//             <p className="text-xs text-gray-600">Admin 1</p>
//             <p>
//               <Link href="tel:+62887825171899" className="hover:text-yellow-500">
//                 (+62) 878-2517-1899
//               </Link>
//             </p>
//             <p className="text-xs text-gray-600">Admin 2</p>
//           </div>
//         </div>

//         {/* Kolom 3: Alamat */}
//         <div className="text-sm">
//           <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
//           <p>
//             <Link
//               href="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung,+Jawa+Barat"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-yellow-500"
//             >
//               Jl. Kebon Kawung No.49, Pasir Kaliki,
//               <br />
//               Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia
//             </Link>
//           </p>
          
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-[#FFDD00] py-3 text-center text-xs text-black font-medium">
//       © 2025 PT Dahlia Global Indo. Seluruh hak cipta dilindungi undang-undang.
//     </div>
//     </footer>
//   );
// }
