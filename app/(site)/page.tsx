import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
{
  /* <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}> */
}

const Home = async () => {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent">
          Colin!
        </span>
      </h1>
      <p className="mt-3 text-xl text-slate-300 font-bold">
        Thanks for visiting my portfolio site!
      </p>
      <p className="mt-20 text-xl text-gray-100 font-bold">べ My Projects</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="bg-cyan-300/[17%] border-2 border-gray-300 rounded-lg p-1 hover:scale-105 hover:border-cyan-400 transition"
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750} // 250
                height={300} // 100
                className="object-cover rounded-lg border border-violet-300" // border-gray-500
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
