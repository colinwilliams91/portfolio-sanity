import { getPage, getCertificates } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

// import Trigrams from "../../components/Trigrams";
import System from "../../../app/components/System";
import Headshot from "../../../app/components/Headshot";
import Certificate from "../../components/Certificate";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug);
  const certificates = await getCertificates();
  console.log(page.linkedIn);

  return (
    <div>
      <h1 className="flex bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow justify-center">
        {page.title}
      </h1>
      {/* {page.title === "Skills" && <Trigrams />} */}
      {/* Certifications go here */}
      {/* TODO change `lg:grid-cols-3 -> 2 and remove fixed size, format actual cert images to uniform sizes */}
      {page.title === "Certifications" && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates
            .filter(
              (certificate) =>
                !certificate.title.includes("Home Headshot") &&
                !certificate.title.includes("Badge")
            )
            .map((certificate) => (
              <Certificate key={certificate._id} {...certificate} />
            ))}
        </div>
      )}
      {/* HeadShot goes here */}
      {page.image && <Headshot {...page} />}
      <div
        className={`prose prose-li:drop-shadow-4xl prose-strong:font-extrabold prose-strong:text-gray-200 prose-h3:text-gray-100 text-xl text-gray-400 mt-5 font-bold justify-center ${
          page.title === "Contact" ? "text-center" : ""
        }`}
      >
        <div className="text-gray-200">
          <PortableText value={page.content} />
        </div>
      </div>
      {page.linkedIn && (
        // <div className="flex justify-center mx-auto mt-7 h-60 w-60 aspect-w-1 aspect-h-1 border border-gray-300/50 rounded-2xl">
        <div
          id="square-container"
          className="grid grid-cols-2 grid-rows-2 h-52 w-52 aspect-w-1 aspect-h-1 mx-auto mt-2 items-center"
        >
          {page.linkedIn && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.linkedIn}
                className="text-gray-200 hover:scale-125 transition"
              >
                <FaLinkedin className="h-28 w-28 p-4" />
              </a>
            </div>
          )}
          {page.gmail && (
            <div className="flex justify-center mt-10 ">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.gmail}
                className="text-gray-200 hover:scale-125 transition"
              >
                <FaEnvelope className="h-28 w-28 p-4" />
              </a>
            </div>
          )}
          {page.github && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.github}
                className="text-lg hover:scale-125 transition"
              >
                <FaGithub className="h-28 w-28 text-gray-200 p-4" />
              </a>
            </div>
          )}
          {page.twitter && (
            <div className="flex justify-center mt-10">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={page.twitter}
                className="text-lg hover:scale-125 transition"
              >
                <FaTwitter className="h-28 w-28 text-gray-200 p-4" />
              </a>
            </div>
          )}
        </div>
        // </div>
      )}
      {page.system && <System page={page} item="system" />}
      {page.server && <System page={page} item="server" />}
      {page.database && <System page={page} item="database" />}
      {page.client && <System page={page} item="client" />}
      {page.styles && <System page={page} item="styles" />}
      {page.audiovisual && <System page={page} item="audiovisual" />}
      {page.deployment && <System page={page} item="deployment" />}
      {page.management && <System page={page} item="management" />}
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
