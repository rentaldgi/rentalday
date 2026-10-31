import { units } from "../../../data/units";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import AnimatePage from "@/app/components/AnimatePage";
import Image from "next/image";

export default function DetailUnit({ params }) {
  const unit = units.find((u) => u.id === parseInt(params.id));

  if (!unit) {
    return (
      <div className="w-full font-sans">
        <div
          className="relative w-full h-40 md:h-60 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/RD-topdetailunit.png)" }}
        >
          <BackButton />
        </div>
        <div className="px-6 md:px-10 py-6 md:py-10 bg-white">
          <h2 className="text-xl md:text-2xl font-bold">Unit tidak ditemukan</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-sans">
      <AnimatePage>
        <div
          className="relative w-full h-40 md:h-60 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/RD-topdetailunit.png)" }}
        >
          <BackButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 py-6 md:py-10 bg-white">
          <div className="flex justify-center items-center">
            <Image
              src={unit.image}
              alt={unit.name}
              width={400}
              height={300}
              className="w-full max-w-md object-contain"
              priority={true}
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-xl md:text-2xl text-black font-bold">
              {unit.name}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {unit.description}
            </p>
            <hr className="my-2 border-black" />
            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              <span className="border border-yellow-500 px-4 md:px-10 py-1 rounded-full text-gray-800">
                {unit.kapasitas}
              </span>
              <span className="border border-yellow-500 px-4 md:px-10 py-1 rounded-full text-gray-800">
                {unit.daerah}
              </span>
              <span className="border border-yellow-500 px-4 md:px-10 py-1 rounded-full text-gray-800">
                {unit.role}
              </span>
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
              <span className="font-semibold text-black text-lg md:text-2xl w-fit">
                Harga Sewa
              </span>
              <div className="flex items-end gap-6 text-red-600 font-bold text-lg md:text-xl">
                <div className="flex flex-col leading-none">
                  <span>Rp {unit.weekdayPrice}</span>
                  <span className="text-xs font-normal text-red">Weekday</span>
                </div>
                <span className="text-red-600 text-xl font-bold">|</span>
                <div className="flex flex-col leading-none">
                  <span>Rp {unit.weekendPrice}</span>
                  <span className="text-xs font-normal text-red">Weekend</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-start gap-4 md:gap-30">
              <span className="font-semibold text-black text-lg md:text-2xl w-fit">
                Fasilitas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-x-4 gap-y-1 text-red-700 font-semibold">
                {unit.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span>•</span>
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://l.instagram.com/?u=http%3A%2F%2Flinkbio.co%2Fadminrentalday%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadIIXGtZJvbTZW_wGytAKq-xWcp5l_Hza7_SSGE8x9akumnH-xW2_eckVlaDw_aem_dq0kALDzJrKef4Rx-HH3Ng&e=AUCZbZOn0crc-A59k1bTLniubmibEphFMDyhzlzMn_HQs7QmwkOqjOCV0JOqulIW9oBG6FMxIRCYzrEHJVz9hDBguwG5dqVxdjTlLfpMnUCd7kpTe2bO3pp6OI7GSz5eQVnPRyo"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 w-full rounded-full shadow">
                  Sewa Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-red-700 text-white px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-sm md:text-base">
          <div className="space-y-4 leading-relaxed">
            <p>
              Unit motor yang kami sediakan hadir dengan tampilan elegan,
              menggunakan bahan bakar {unit.fuel.toLowerCase()}, dan dalam
              kondisi prima. Setiap motor dirawat dengan baik, memiliki mesin
              yang halus, serta siap digunakan kapan saja.
            </p>
            <p>
              Seluruh kendaraan memiliki pajak aktif dan dilengkapi surat-surat
              resmi, sehingga Anda tidak perlu khawatir mengenai legalitas.
              Perawatan dan servis rutin juga selalu dilakukan agar performa
              tetap optimal dan aman saat dikendarai.
            </p>
            <p>
              Dengan desain yang simpel serta hemat bahan bakar, unit motor kami
              sangat cocok digunakan untuk berbagai keperluan harian maupun
              aktivitas mobilitas lainnya.
            </p>
          </div>
          <div className="flex justify-center items-start">
            <div className="bg-white text-black rounded-md px-6 py-4 text-sm w-full max-w-md shadow-md">
              <table className="w-full table-fixed">
                <tbody>
                  <tr className="bg-white">
                    <td className="py-3 pr-4 font-semibold w-1/2">
                      Jenis Transmisi
                    </td>
                    <td className="py-3 text-right w-1/2">
                      {unit.transmission}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 pr-4 font-semibold">Kapasitas Mesin</td>
                    <td className="py-3 text-right">{unit.kapasitas}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 pr-4 font-semibold">Pajak</td>
                    <td className="py-3 text-right">{unit.taxStatus}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-3 pr-4 font-semibold">Warna</td>
                    <td className="py-3 text-right">{unit.color}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 pr-4 font-semibold">Bahan Bakar</td>
                    <td className="py-3 text-right">{unit.fuel}</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </AnimatePage>
    </div>
  );
}

export async function generateStaticParams() {
  return units.map((unit) => ({
    id: unit.id.toString(),
  }));
}