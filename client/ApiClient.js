// Semua request ke backend lewat file ini.
// Untuk testing lokal, buat file .env.local berisi:
//   NEXT_PUBLIC_API_URL=http://localhost:3333
export const BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://backend.ptdahliaglobalindo.id"
).replace(/\/+$/, "");

export const ENTITY = "RENTAL_MOTOR";

export function apiFetch(path, options = {}) {
  return fetch(`${BASE_URL}${path}`, options);
}

// URL file dari backend (thumbnail artikel, dll), contoh: assetUrl("/uploads/foto.jpg")
export function assetUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
