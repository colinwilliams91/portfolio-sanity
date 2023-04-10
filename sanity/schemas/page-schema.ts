const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96, // <-- define validation here
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "gmail",
      title: "Gmail",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "github",
      title: "Github",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default page;
