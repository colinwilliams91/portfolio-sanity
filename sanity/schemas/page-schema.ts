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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
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
      type: "string",
    },
    {
      name: "gmail",
      title: "Gmail",
      type: "string",
    },
    {
      name: "github",
      title: "Github",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
    },
    {
      name: "system",
      title: "System",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "server",
      title: "Server",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "database",
      title: "Database",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "client",
      title: "Client",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "styles",
      title: "Styles",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "audiovisual",
      title: "Audiovisual",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "deployment",
      title: "Deployment",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "management",
      title: "Management",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
};

export default page;
