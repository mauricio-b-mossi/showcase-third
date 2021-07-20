import React from "react";
import { useRouter } from "next/router";
import { sanityClient } from "../../sanity";
import SwiperWOLinks from "../../components/SwiperWOLinks";

export const getStaticPaths = async () => {
  const query = `*[_type == "posts"]{
    slug{
      current
    }
  }`;

  const postInfo = await sanityClient.fetch(query);

  const paths = postInfo.map((post) => {
    return {
      params: {slug: post.slug.current}
    }
  })

  return {
    paths,
    fallback: false
  };

}

const Slug = (props) => {
  // const { mainImage, images, title, description } = props;

  // console.log("====================================");
  // console.log(props.slugInfo.images);
  // console.log("====================================");
  // console.log(images);
  // console.log("====================================");

  const list = [props.slugInfo.mainImage, ...props.slugInfo.images]

    console.log(list);

    list.map((img)=>console.log(img.asset))

  return (
    <div className="max-h-screen md:min-h-screen bg-black flex flex-col items-center justify-center text-white font-body py-20 sm:p-10 lg:p-20">
      <div className="grid md:grid-cols-2 min-h-screen justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase text-center text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl  py-4 md:py-16 font-bold">
            <div>{props.slugInfo.title}</div>
          </h1>
          <div className="max-w-lg relative transform -translate-y-4 lg:-translate-y-8 2xl:-translate-y-16 text-center py-8 md:py-0 text-xl md:text-2xl">
            <p>{props.slugInfo.description}</p>
          </div>
        </div>
        {/* <div className="hidden">
                  <ImageGallery />
                </div> */}
        <div className="pb-16 md:pb-0">
          <SwiperWOLinks list={list} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = context.params.slug;
  // return await sanityClient.fetch(
  //   `
  //   *[slug.current == $slug][0]{
  //     title,
  //     description,
  //         images[]{
  //    asset->{
  //                       _id,
  //                       url
  //                   }
  // },
  //         mainImage{
  //                   asset->{
  //                       _id,
  //                       url
  //                   }
  //               }
  //   }
  // `,
  //   { slug }
  // );

  //  const query = `
  //   *[slug.current == $slug][0]{
  //     title,
  //     description,
  //         images[]{
  //    asset->{
  //                       _id,
  //                       url
  //                   }
  // },
  //         mainImage{
  //                   asset->{
  //                       _id,
  //                       url
  //                   }
  //               }
  //   }
  // `;

   const slugInfo = await sanityClient.fetch(  `
    *[slug.current == $slug][0]{
      title,
      description,
          images[]{
     asset->{
                        _id,
                        url
                    }
  },
          mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
    }
  `,
    { slug });

   return {
     props: {
       slugInfo,
     },
   };
};

export default Slug;
