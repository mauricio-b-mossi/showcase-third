import React from "react";
import Nav from "../components/Nav";
import { sanityClient } from "../sanity";
import SEOComponent from "../components/SEOComponent";
import BgImage from "../components/BgImage";
import BackgroundComponent from "../components/BackgroundComponent";
import FlowImageComponent from "../components/FlowImageComponent";
import Video from "../components/Video";
import TextTitleRightComponent from "../components/TextTitleRightComponent";
import TextTitleLeftComponent from "../components/TextTitleLeftComponent";

const AboutDemo = ({ about }) => {
  const {
    title,
    mission,
    vision,
    reasons,
    video,
    images,
    mainImage,
    mainImageVideo,
    mainImageMVR,
  } = about;

  return (
    <div>
      <SEOComponent title={"About"} />

      <div className="overflow-x-hidden">
        <Nav />
        <div
          id="bg-b"
          className="min-h-screen  bg-black lg:bg-transparent flex flex-col items-center justify-center text-white  mx-auto font-body "
        >
          <div className="relative flex justify-center  bg-black lg:bg-transparent items-center w-full h-screen  ">
            {mainImage.asset.url ? (
              <div className="lg:hidden">
                <BgImage image={mainImage.asset.url} />
              </div>
            ) : (
              <div className="lg:hidden">
                <BgImage image={"/BWBG.jpg"} />
              </div>
            )}
            <h1 className="absolute text-7xl sm:text-9xl lg:text-xxl font-bold uppercase">
              About
            </h1>
          </div>

          <div className="relative flex-col justify-center  bg-black lg:bg-transparent items-center w-full h-auto ">
            <Video video={video} />

            <FlowImageComponent
              leftText={"swipe swipe swipe"}
              rightText={"swipe swipe swipe"}
              images={images}
            />

            <div className="md:p-10 lg:p-20">

              <TextTitleRightComponent
                title={"Our Mission"}
                description={mission}
              />

              <TextTitleLeftComponent
                title={"Our Vision"}
                description={vision}
              />

              <TextTitleRightComponent
                title={"Couple Reasons"}
                description={reasons}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "aboutUs"][0]{
    title,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
      mainImageVideo{
                    asset->{
                        _id,
                        url
                    }
                },
                  mainImageMVR{
                    asset->{
                        _id,
                        url
                    }
                },
    mission,
    vision,
    reasons,
    video,
     images[]{
     asset->{
                        _id,
                        url
                    }
  },

  }`;

  const about = await sanityClient.fetch(query);

  return {
    props: {
      about,
    },
  };
};

export default AboutDemo;
