import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

import HomeHeadshot from "../components/HomeHeadshot";

// const inter = Inter({ subsets: ["latin"] });
{
  /* <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}> */
}

const Home = async () => {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-bold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent">
          C o l i n !
        </span>
      </h1>
      {/* <p className="mt-3 text-xl text-gray-100">
        Thanks for visiting my portfolio site!
      </p> */}
      <p className="flex justify-center mt-10 text-xl text-gray-100">
        べ &nbsp; P r o j e c t s べ
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-orange-400/[17%] border-[4px] border-double border-gray-200/50 p-1 hover:scale-110 hover:border-cyan-400 transition"
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750} // 250
                height={300} // 100
                className="object-cover rounded-xl border border-violet-300 transition-shadow" // border-gray-500 // hover:drop-shadow-4xl
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <HomeHeadshot />
      </div>
    </div>
  );
};

export default Home;
