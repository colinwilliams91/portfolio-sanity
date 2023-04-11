import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
        {page.title}
      </h1>
      <div className="text-xl text-gray-300 mt-10 font-bold">
        <PortableText value={page.content} />
      </div>
      {page.linkedIn && (
        <div className="flex items-center gap-2 w-5/12 text-lg text-gray-300 mt-10 hover:scale-105 transition">
          <FaLinkedin /> :
          <PortableText value={page.linkedIn} />
        </div>
      )}
      {page.gmail && (
        <div className="flex items-center gap-2 w-2/5 text-lg text-gray-300 mt-10 hover:scale-105 transition">
          <FaEnvelope /> :
          <PortableText value={page.gmail} />
        </div>
      )}
      {page.github && (
        <div className="flex items-center gap-2 w-1/3 text-lg text-gray-300 mt-10 hover:scale-105 transition">
          <FaGithub /> :
          <PortableText value={page.github} />
        </div>
      )}
      {page.twitter && (
        <div className="flex items-center gap-2 w-1/3 text-lg text-gray-300 mt-10 hover:scale-105 transition">
          <FaTwitter /> :
          <PortableText value={page.twitter} />
        </div>
      )}
      {page.system && (
        <>
          <h3 className="text-center font-semibold pb-1">SYSTEM</h3>
          <div className="text-2xl text-center border pb-1 px-2 rounded-2xl">
            <PortableText value={page.system} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
