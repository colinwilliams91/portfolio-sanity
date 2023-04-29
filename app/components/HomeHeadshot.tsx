import React from "react";
import { getPhoto } from "@/sanity/sanity-utils";
import Image from "next/image";

const HomeHeadshot: any = async () => {
  const photo = await getPhoto("home-headshot");
  return (
    <>
      <Image
        src={photo.image}
        alt="Home Headshot"
        width={500}
        height={600}
        className="border-4 border-double border-gray-200/50 rounded-xl mt-10"
      />
    </>
  );
};

export default HomeHeadshot;
