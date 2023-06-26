const link = {
  name: "link",
  title: "Links",
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
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
    },
  ],
};

export default link;