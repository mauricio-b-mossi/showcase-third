import React from "react";
import { sanityClient } from "../../sanity";
import ArtistComponent from "../../components/ArtistComponent";
import SEOComponent from "../../components/SEOComponent";



const Slug = (props) => {

  const list = [props.slugInfo.mainImage, ...props.slugInfo.images]
  const title = props.slugInfo.title
  const description = props.slugInfo.description

  return (
    <>
      <SEOComponent title={ title }/>
      <ArtistComponent title={title} description={description} images={list} />
      </>
  );
};

export const getServerSideProps = async (context) => {

  // It's important to default the slug so that it doesn't return "undefined"
  const slug = context.params.slug;


  const slugInfo = await sanityClient.fetch(
    `
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
    { slug }
  );

  return {
    props: {
      slugInfo,
    },
  };
};

export default Slug;
