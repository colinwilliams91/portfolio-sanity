import Link from "next/link";
import "../globals.css";

export const metadata = {
  title: "Colin Williams Dev",
  description: "Live Portfolio Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Williams
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
