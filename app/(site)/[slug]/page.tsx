import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import System from "../../../app/components/System";
import Headshot from "../../../app/components/Headshot";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug);
  console.log(page.linkedIn);

  return (
    <div>
      <h1 className="flex bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow justify-center">
        {page.title}
      </h1>
      {/* HeadShot goes here */}
      {page.image && <Headshot {...page} />}
      <div
        className={`prose prose-strong:font-extrabold prose-strong:text-gray-300 prose-h3:text-gray-300 text-xl text-gray-400 mt-10 font-bold justify-center ${
          page.title === "Contact" ? "text-center" : ""
        }`}
      >
        <PortableText value={page.content} />
      </div>
      {page.linkedIn && (
        <div
          id="square-container"
          className="grid grid-cols-2 grid-rows-2 h-44 w-44 aspect-w-1 aspect-h-1 mx-auto"
        >
          {page.linkedIn && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.linkedIn}
                className="gap-2 text-gray-300 hover:scale-125 transition"
              >
                <FaLinkedin className="h-14 w-14" />
              </a>
            </div>
          )}
          {page.gmail && (
            <div className="flex justify-center mt-10 ">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.gmail}
                className="gap-2 text-gray-300 hover:scale-125 transition"
              >
                <FaEnvelope className="h-14 w-14" />
              </a>
            </div>
          )}
          {page.github && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.github}
                className="gap-2 text-lg hover:scale-125 transition"
              >
                <FaGithub className="h-14 w-14 text-gray-300" />
              </a>
            </div>
          )}
          {page.twitter && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.twitter}
                className="gap-2 text-lg hover:scale-125 transition"
              >
                <FaTwitter className="h-14 w-14 text-gray-300" />
              </a>
            </div>
          )}
        </div>
      )}

      {page.system && <System {...page} />}
    </div>
  );
};

// <>
//   <header>{repeatedElements.map(() => throwTrigram())}</header>
//   <h3 className="text-center font-semibold pb-1">SYSTEM</h3>
//   <div className="text-2xl text-center border pb-1 px-1 rounded-2xl">
//     {page.system.map((el, i) => (
//       <span key={i} className="p-2">
//         {el}
//       </span>
//     ))}
//   </div>
// </>

export default Page;
