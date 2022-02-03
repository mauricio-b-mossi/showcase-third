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

// Page receives a props object with the following properties:
// - about : which contains the mission, vision, reasons,
//            video, images, and mainImage of the page
const AboutDemo = ({ about }) => {

  // Destructuring about into different portions
  const {
    mission,
    vision,
    reasons,
    video,
    images,
    mainImage,
  } = about;

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={"About"} />

      <div className="overflow-x-hidden">
        <Nav />

        {/* Wrapper component which displays 
        the background id="bg-b" on large screen and above */}
        <div
          id="bg-b"
          className="min-h-screen  bg-black lg:bg-transparent 
          flex flex-col items-center justify-center text-white 
          mx-auto font-body "
        >
          {/* Hero image component */}
          {/* The image is hidden in large screens and above to 
          avoid blur*/}
          <div className="relative flex justify-center  bg-black
           lg:bg-transparent items-center w-full h-screen  ">
            {/* Conditionally rendering fetched image if any. 
            Else display /BWBG.jpg*/}
            {mainImage.asset.url ? (
              <div className="lg:hidden">
                <BgImage image={mainImage.asset.url} />
              </div>
            ) : (
              <div className="lg:hidden">
                <BgImage image={"/BWBG.jpg"} />
              </div>
            )}

            {/* Title in the center of Hero image */}
            <h1 className="absolute text-7xl sm:text-9xl lg:text-xxl
             font-bold uppercase">
              About
            </h1>
          </div>

          {/* Information segment Wrapper */}
          <div className="relative flex-col justify-center bg-black
          lg:bg-transparent items-center w-full h-auto ">

            {/* Youtube Individual Video Component: accepts Video url prop */}
            <Video video={video} />

            {/* Draggable image slider: accepts 3 props leftText, 
            rightText, and the images*/}
            <FlowImageComponent
              leftText={"swipe swipe swipe"}
              rightText={"swipe swipe swipe"}
              images={images}
            />

            {/* Information Components: accept title and description props */}
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
    </>
  );
};

export const getStaticProps = async () => {
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
