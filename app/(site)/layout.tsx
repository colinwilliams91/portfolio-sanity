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
      <body className="max-w-3xl mx-auto py-20">
        <div className=" h-full w-full overflow-hidden">
          <Background />
        </div>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Portfolio
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            {pages.map((page: any) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
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
