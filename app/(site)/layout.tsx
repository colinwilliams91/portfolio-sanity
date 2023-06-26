"use client";

import Link from "next/link";
import "../globals.css";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import { getLinks, getPages } from "@/sanity/sanity-utils";
import { LinkDTO } from "@/types/Link";

import Background from "../components/Background";
import ParallaxBanner from "../components/ParallaxBanner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

/* べ */

// import { metadata } from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { title, description } = metadata;
  const [pages, setPages] = useState([]);
  const [links, setLinks] = useState<LinkDTO[]>([]);
  const [icons, setIcons] = useState<any>({});

  useEffect(() => {
    getPages()
      .then((data) => setPages(data as any))
      .catch((err) => console.error("failed fetching pages", err));
    getLinks()
      .then((data: LinkDTO[]) => setLinks(data))
      .catch((err) => console.error("failed fetching contact links", err));
  }, []);

  useEffect(() => {
    setIcons({
      FaLinkedin: <FaLinkedin />,
      FaGithub: <FaGithub />,
      FaTwitter: <FaTwitter />,
      FaEnvelope: <FaEnvelope />,
    });
  }, []);

  console.log({ links });

  return (
    <html lang="en">
      <Helmet>
        <title>Colin Williams Developer Portfolio</title>
        <meta
          name="description"
          content="React | Next | Sanity Portfolio Application"
        ></meta>
        <link rel="robots" href="/robots.txt"></link>
      </Helmet>
      <body className="max-w-3xl mx-auto pt-16">
        <div className="h-full w-full overflow-hidden">
          <Background />
        </div>
        <header className="flex items-end justify-between">
          <motion.span
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 13 }}
            tabIndex={-1}
          >
            <Link
              href="/"
              className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-500 bg-clip-text text-transparent text-lg font-bold hover:scale-125 hover:bg-gradient-to-l hover:from-purple-500 to hover:bg-cyan-300 transition"
            >
              Colin Williams
            </Link>
          </motion.span>
          {/* Contact Nav goes here */}
          <div className="flex flex-col items-end justify-center text-gray-100">
            <div className="flex text-gray-100">
              {links.map((contact: any) => (
                <motion.span
                  className="h-5 w-5 mb-1 mr-3"
                  whileHover={{ scale: 1.3, color: "rgb(103, 232, 249)" }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 13 }}
                  key={contact._id}
                  tabIndex={-1}
                >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={contact.url}
                  >
                    {icons[contact.icon]}
                  </a>
                </motion.span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-100 pb-[0.15rem]">
              {pages.map((page: any) => (
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 13 }}
                  key={page._id}
                  tabIndex={-1}
                >
                  <Link href={`/${page.slug}`} className=" hover:text-cyan-300">
                    {page.title}
                  </Link>
                </motion.span>
              ))}
            </div>
          </div>
        </header>
        <main className="py-10">{children}</main>
        <div className="relative text-gray-300 text-xs text-center mt-5">
          ┄ COPYRIGHT © 2023 C B WILLIAMS ┄
        </div>
        {/* <ParallaxBanner /> */}
      </body>
    </html>
  );
}
