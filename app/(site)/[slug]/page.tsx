import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

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
      <div className="text-lg text-gray-400 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
};

export default Page;
