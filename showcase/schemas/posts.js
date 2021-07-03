export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      },
         {
          name: 'category',
          title: "Category",
          type: "string",
          options: {
              list: [
                  {title: "Artes Musicales", value: "artesMusicales"},
                  {title: "Artes Visuales", value: "artesVisuales"},
                  {title: "Artes Mixtas", value: "artesMixtas"},
              ],
              layout: "radio"
          }
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
