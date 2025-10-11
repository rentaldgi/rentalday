"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    const viewedPages = JSON.parse(
      sessionStorage.getItem("viewedPages") || "[]"
    );

    // Jika halaman ini belum pernah dicatat di session
    if (!viewedPages.includes(pathname)) {
      async function trackView() {
        try {
          await fetch("https://backend.ptdahliaglobalindo.id/website-views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              entity: "RENTAL_MOTOR",
              path: pathname,
            }),
          });
          // Simpan halaman ini ke session agar tidak double-count
          viewedPages.push(pathname);
          sessionStorage.setItem("viewedPages", JSON.stringify(viewedPages));
        } catch (err) {
          console.error("Gagal tracking:", err);
        }
      }

      trackView();
    }
  }, [pathname]);

  return null;
}
