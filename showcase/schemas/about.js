export default {
  name: "aboutUs",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "video",
      title: "Video Link",
      description:
        "Meter el link en version : https://www.youtube.com/embed/(codigo)",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      description:
        "Imagenes en la seccion de about",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "mission",
      title: "Our Mission",
      description: "Info sobre cual es la mission",
      type: "text",
    },
    {
      name: "vision",
      title: "Our Vision",
      description: "Info sobre cual es la vision",
      type: "text",
    },
    {
      name: "reasons",
      title: "Reasons",
      description: "Info sobre las razones",
      type: "text",
    },
  ],
};