// import { Inter } from "next/font/google";
import { getProjects, getCertificates } from "@/sanity/sanity-utils";
// import { Helmet } from "react-helmet";
import Head from "next/head";
import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// import HomeHeadshot from "../components/HomeHeadshot";
import ProjectCard from "../components/ProjectCard";
// import Certificate from "../components/Certificate";
import L from "../components/Letters";

// const inter = Inter({ subsets: ["latin"] });
{
  /* <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}> */
}

/* べ */
export const metadata: Metadata = {
  title: "💻 Colin Williams, Full Stack Software Developer.",
  description: "I write code for work and play. Contact me if you want an app built for web, mobile or native.",
  openGraph: {
    type: "website",
    url: "https://www.colin-williams.dev/",
    title: "💻 Colin Williams, Full Stack Software Developer.",
    description: "I write code for work and play. Contact me if you want an app built for web, mobile or native.",
    images: "https://res.cloudinary.com/dbdyc4klu/image/upload/v1693501459/portfolio-1200-628_fgyrtz.jpg"
  },
  twitter: {
    card: "summary_large_image",
    title: "💻 Colin Williams, Full Stack Software Developer.",
    description: "I write code for work and play. Contact me if you want an app built for web, mobile or native.",
    images: "https://res.cloudinary.com/dbdyc4klu/image/upload/v1693501459/portfolio-1200-628_fgyrtz.jpg",
  }
};

// TODO: #1 Is Helmet throwing this new error? --> https://vercel.com/colinwilliams91/colin-williams-dev/2F9LFYM6k1tFU1CQWERYVVD6jzQB

const Home = async () => {
  const projects = await getProjects();
  // const certificates = await getCertificates();

  return (
    <div>
      <h1 className="font-bold text-gray-50 text-5xl mt-12">
        I&apos;m a{" "}
        <span className="font-bold bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent">
          Full Stack Developer!
        </span>
      </h1>
      <p className="mt-3 font-light text-xl text-gray-50">
        Contact me if you&apos;d like a project built.
      </p>
      <p className="flex justify-center mt-16 mb-8 text-xl text-gray-100">
        {" "}
        <L el={"べ"} />
        <L el={"P"} />
        <L el={"r"} />
        <L el={"o"} />
        <L el={"j"} />
        <L el={"e"} />
        <L el={"c"} />
        <L el={"t"} />
        <L el={"s"} />
        <L el={"べ"} />
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
      {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.length &&
          certificates
            .filter(
              (certificate) =>
                !certificate.title.includes("Home Headshot") &&
                !certificate.title.includes("Badge")
            )
            .map((certificate) => (
              <Certificate key={certificate._id} {...certificate} />
            ))}
      </div> */}
      {/* <div className="flex justify-center">
        <HomeHeadshot />
      </div> */}
    </div>
  );
};

export default Home;
