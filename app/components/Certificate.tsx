import React from "react";
import { getPhoto } from "@/sanity/sanity-utils";
import Image from "next/image";

const Certificate: any = async (slug: string) => {
  const photo = await getPhoto(slug);
  return (
    <>
      <Image
        src={photo.image}
        alt={slug}
        width={500}
        height={600}
        className="border-4 border-double border-gray-200/50 rounded-xl mt-10"
      />
    </>
  );
};

export default Certificate;
