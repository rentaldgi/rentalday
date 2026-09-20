"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { apiFetch, ENTITY } from "@/client/ApiClient";

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
          await apiFetch("/website-views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              entity: ENTITY,
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
