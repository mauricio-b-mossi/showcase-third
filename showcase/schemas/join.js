export default {
  name: "joinUs",
  title: "Join Us",
  type: "document",
  fields: [
    {
      name: "title",
      description: "Max 3 letters en el title",
      title: "Title",
      type: "string",
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
    {
      name: "descriptionTitle",
      title: "Description Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "video",
      title: "Video Link",
      description:
        "Meter el link en version : https://www.youtube.com/embed/(codigo)",
      type: "string",
    },
  ],
};
