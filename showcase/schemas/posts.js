export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Si desea borrar presione CTRL + ALT + D, o en el post ir al botton a la par de PUBLISH, apretarlo, y alli aparecera la opcion DELETE",
      type: "string",
    },
    {
      name: "cover",
      title: "Cover",
      description: "Marcar el botton 'Cover' si la imagen es la caratula de la seccion de arte",
      type: "string",
      options: {
        list: [
          { title: "Cover", value: "Cover" },
          { title: "No Cover", value: "No Cover" },
        ],
        layout: "radio",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Artes Musicales", value: "artesMusicales" },
          { title: "Artes Visuales", value: "artesVisuales" },
          { title: "Artes Mixtas", value: "artesMixtas" },
        ],
        layout: "radio",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
