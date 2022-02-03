export default {
  name: "team",
  title: "Team Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      description: "Si no hay imagen el default es el fondo negro",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

