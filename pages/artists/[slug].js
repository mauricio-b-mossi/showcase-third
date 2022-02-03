import React from "react";
import { sanityClient } from "../../sanity";
import ArtistComponent from "../../components/ArtistComponent";
import SEOComponent from "../../components/SEOComponent";

// Page receives a props object with the following properties:
//  - props : represents the return of the fetch.
const Slug = (props) => {
  const list = [props.slugInfo.mainImage];
  const title = props.slugInfo.title;
  const description = props.slugInfo.description;

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={title} />
      {/* Artist display component: accepts title, description, and images */}
      <ArtistComponent title={title} description={description} images={list} />
    </>
  );
};

// The function receives a single agrument called context.
// The context object contains the information of the current URL:
// If destructured it contains:
// - pathname - Current route. That is the path of the page in /pages
// - query - Query string section of URL parsed as an object
// - asPath - String of the actual path (including the query) shown in the
// - req - HTTP request object (server only)
// - res - HTTP response object (server only)
// - err - Error object if any error is encountered during the rendering

export const getServerSideProps = async (context) => {
  // Getting the slug of the URL from the context object
  const slug = context.params.slug;

  // Fetching data for the slug
  // The slug variable is represented by $<name>
  // The fetch function takes two arguments:
  // - query -  GROQ-query to perform
  // - params - Optional query parameters
  const slugInfo = await sanityClient.fetch(
    `
    *[slug.current == $slug][0]{
      title,
      description,

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
