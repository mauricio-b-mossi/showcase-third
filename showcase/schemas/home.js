export default {
  name: "home",
  title: "Home",
  type: "document",
  // {
  //   name: "",
  //   title: "",
  //   type: "",
  // },
  fields: [
    {
      name: "title",
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
      name: "home",
      title: "Home",
      type: "string",
    },
    {
      name: "artists",
      title: "Artists",
      type: "string",
    },
    {
      name: "joinus",
      title: "Join Us",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "team",
      title: "Team",
      type: "string",
    },
  ],
};