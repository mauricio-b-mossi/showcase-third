import React from "react";
import Nav from "../components/Nav";
import { sanityClient } from "../sanity";
import JoinUsTitle from "../components/JoinUsTitle";
import VideoSectionContainer from "../components/VideoSectionContainer";
import BackgroundComponent from "../components/BackgroundComponent";
import SEOComponent from "../components/SEOComponent";

const JoinUs = ({descriptionInfo}) => {

  // Destructuring Query into different portions
  const { title, mainImage, description, descriptionTitle, video } = descriptionInfo
  
  // Splitting title into a array based on " " characters
  const splitTitle = title.split(" ")

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={"Join Us"} />

      {/* Whole page wrapper div */}
      <div className="overflow-x-hidden">

        {/* Navigation Bar Component */}
              <Nav />

        {/* Background image setter component */}
              <BackgroundComponent image={mainImage.asset.url} />

        {/* Wrapper div that contains the body of the page*/}
        <div className="max-h-screen bg-black  items-center justify-center text-white font-body">
          
          {/* Join us title Component */}
                <JoinUsTitle
                  splitTitle={splitTitle}
                  descriptionTitle={descriptionTitle}
                  description={description}
          />
          {/* Youtube Video Component */}
                <VideoSectionContainer video={video} />
              </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "joinUs"][0]{
    title,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
    descriptionTitle,
    description,
    video,
  }`;

  const descriptionInfo = await sanityClient.fetch(query);

  return {
    props: {
      descriptionInfo,
    },
  };
};

export default JoinUs;
