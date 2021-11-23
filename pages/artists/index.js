import React from "react";
import Nav from "../../components/Nav";
import { sanityClient } from "../../sanity";
import SEOComponent from "../../components/SEOComponent";
import LeftSwiperText from "../../components/LeftSwiperText";
import RightSwiperText from "../../components/RightSwiperText";

const Index = ({
  artistsInfo,
  aMusicalesImgs,
  aMixtasImgs,
  aVisualesImgs,
  aMixtasCover,
  aMusicalesCover,
  aVisualesCover,
}) => {
  // TODO: SPREAD OPPERATE ALL THE aArtImgs while adding new IMG from the artist info

  // Destructuring Query into different portions
  const { aMixtas, aMusicales, aVisuales } = artistsInfo[0];

  // Merging all images from the specific category into a array.
  const aMusicalesImgsSlide = [aMusicalesCover, ...aMusicalesImgs];
  const aMixtasImgsSlide = [aMixtasCover, ...aMixtasImgs];
  const aVisualesImgsSlide = [aVisualesCover, ...aVisualesImgs];

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={"Artists"} />

      {/* Whole page wrapper div */}
      <div className="overflow-x-hidden">
        {/* Navigation Bar Component */}
        <Nav />

        {/* Body wrapper div */}
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-body">
          <div className="grid lg:grid-cols-2 min-h-screen justify-center items-center py-20 sm:p-10 ">
            {/* LeftSwiperText is a component with a Swiper to the left and text to the right */}
            {/* accepts: title, description, and images */}
            <LeftSwiperText
              title={"Artes Musicales"}
              description={aMusicales}
              images={aMusicalesImgsSlide}
            />

            {/* RightSwiperText is a component with a Swiper to the right and text to the left */}
            {/* accepts: title, description, and images */}
            <RightSwiperText
              title={"Artes Visuales"}
              description={aVisuales}
              images={aVisualesImgsSlide}
            />

            {/* LeftSwiperText is a component with a Swiper to the left and text to the right */}
            {/* accepts: title, description, and images */}
            <LeftSwiperText
              title={"Artes Mixtas"}
              description={aMixtas}
              images={aMixtasImgsSlide}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps = async ({ params }) => {
export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "artists"]{
    aVisuales,
    aMusicales,
    aMixtas,
    aVisImgs{
                    asset->{
                        _id,
                        url
                    }
                },
    aMusImgs{
                    asset->{
                        _id,
                        url
                    }
                },
    aMixImgs{
                    asset->{
                        _id,
                        url
                    }
                }
  
  }`;
  const aMusicalesQuery = `*[_type == "posts" && category == "artesMusicales" && cover != "Cover"]{
    slug,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;
  const aMixtasQuery = `*[_type == "posts" && category == "artesMixtas" && cover != "Cover"]{
    slug,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;
  const aVisualesQuery = `*[_type == "posts" && category == "artesVisuales" && cover != "Cover"]{
    slug,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;
  const aVisualesQueryCover = `*[_type == "posts" && category == "artesVisuales" && cover == "Cover"][0]{
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;
  const aMixtasQueryCover = `*[_type == "posts" && category == "artesMixtas" && cover == "Cover"][0]{
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;
  const aMusicalesQueryCover = `*[_type == "posts" && category == "artesMusicales" && cover == "Cover"][0]{
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
}`;

  const artistsInfo = await sanityClient.fetch(query);
  const aMusicalesImgs = await sanityClient.fetch(aMusicalesQuery);
  const aMixtasImgs = await sanityClient.fetch(aMixtasQuery);
  const aVisualesImgs = await sanityClient.fetch(aVisualesQuery);
  const aMixtasCover = await sanityClient.fetch(aMixtasQueryCover);
  const aMusicalesCover = await sanityClient.fetch(aMusicalesQueryCover);
  const aVisualesCover = await sanityClient.fetch(aVisualesQueryCover);

  return {
    props: {
      artistsInfo,
      aMusicalesImgs,
      aMixtasImgs,
      aVisualesImgs,
      aMixtasCover,
      aMusicalesCover,
      aVisualesCover,
    },
  };
};

export default Index;
