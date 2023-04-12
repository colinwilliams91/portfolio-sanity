import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-200 border border-gray-400 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>
      {/* content goes here */}
      <div className="text-lg text-gray-300 mt-5">
        <PortableText value={project.content} />
      </div>
      {/* image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-5 border-2 border-gray-400 object-cover rounded-xl"
      />
      {/* contributions go here */}
      {/* <div className="flex"> */}
      <h2 className="text-lg flex justify-center mt-5 mx-auto text-gray-300">
        <b>Contributions</b>
      </h2>
      <article className="prose prose-xl prose-strong:font-bold prose-strong:text-gray-400 text-gray-400 mt-3 mx-auto">
        <PortableText value={project.contributions} />
      </article>
      {/* </div> */}
    </div>
  );
};

export default Project;
