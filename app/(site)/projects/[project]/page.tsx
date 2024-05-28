import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import RightArrow from "../../../components/RightArrow";
import Link from "next/link";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div id="outter-project-page">
      <header className="flex items-center justify-between mx-auto">
        <h1 className=" align-middle h-auto bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <div id="arrow-button-container" className="flex items-center mr-12">
          <RightArrow />
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-orange-400 to via-red-500 bg-purple-600 border-2 border-gray-400 inset-2 rounded-lg text-orange-100 font-bold py-3 px-4 whitespace-nowrap hover:bg-gradient-to-tl from-orange-400 to via-red-500 bg-purple-600 hover:text-cyan-400 transition duration-300 ease-in-out hover:border-gray-200 -mr-4 sm:-mr-8 lg:-mr-12"
          >
            View Project
          </a>
        </div>
      </header>
      {/* content goes here */}
      <div className="text-lg text-gray-100 mt-5">
        <PortableText value={project.content} />
      </div>
      {/* image goes here */}
      <div className="flex">
        <Link
          href={project.url}
          className="rounded-2xl p-1 bg-orange-400/[17%]
          border-[2px] border-violet-400 my-5
          hover:border-cyan-400 hover:bg-gradient-to-tr
          from-pink-500/40 to-cyan-300/30 transition"
          target="_blank"
          rel="noopener noreferrer"
          key={project._id}>
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="object-cover rounded-xl border
              border-violet-300 transition-shadow"
          />
        </Link>
      </div>
      {/* contributions go here */}
      {/* <div className="flex"> */}
      <h2 className="text-lg flex justify-center mt-2 mx-auto text-gray-200">
        <b>Contributions:</b>
      </h2>
      <article className="prose prose-xl prose-strong:font-bold prose-strong:text-gray-300 prose-a:text-gray-300 hover:prose-a:text-cyan-300 text-gray-300 mt-3 mx-auto">
        <PortableText value={project.contributions} />
      </article>
      {/* </div> */}
    </div>
  );
};

export default Project;
