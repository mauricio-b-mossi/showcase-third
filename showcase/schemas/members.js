export default {
  name: "members",
  title: "Members",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      description: "Introductir numero en el que aparecera el miembro",
      type: "number"
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "biography",
      title: "Biography",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
