import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Colin Williams Dev",
  description: "Live Portfolio Application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of my pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-20">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Portfolio
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            {pages.map((page) => (
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
      </body>
    </html>
  );
}
