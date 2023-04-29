"use client";

import Link from "next/link";
import "../globals.css";

import { useEffect, useRef, useState } from "react";
import { getPages } from "@/sanity/sanity-utils";

import Background from "../components/Background";
/* べ */
// export const metadata = {
//   title: "Colin Williams Dev",
//   description: "Live Portfolio Application",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages()
      .then((data) => setPages(data as any))
      .catch((err) => console.error("failed fetching pages", err));
  }, []);

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto pt-20">
        <div className=" h-full w-full overflow-hidden">
          <Background />
        </div>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-500 bg-clip-text text-transparent text-lg font-bold hover:scale-125 hover:bg-gradient-to-l hover:from-purple-500 to hover:bg-cyan-300 transition"
          >
            Portfolio
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-100">
            {pages.map((page: any) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline hover:scale-105 hover:text-cyan-300"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-10">{children}</main>
        <div className="relative text-xs text-center mt-8">
          ┄ COPYRIGHT © 2023 C B WILLIAMS ┄
        </div>
      </body>
    </html>
  );
}
