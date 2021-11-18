import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Slider from "../components/Slider";
import { sanityClient } from "../sanity";
import JoinUsTitle from "../components/JoinUsTitle";
import VideoSectionContainer from "../components/VideoSectionContainer";
import BackgroundComponent from "../components/BackgroundComponent";
import SEOComponent from "../components/SEOComponent";

const JoinUs = ({descriptionInfo}) => {
  // controls wether view is shown
  const [isVisible, setIsVisible] = useState(true);


  const { title, mainImage, description, descriptionTitle, video } = descriptionInfo
  
  const splitTitle = title.split(" ")

  function AnimationEnds() {
    setIsVisible(true);
  }
  return (
    <div>
      <SEOComponent title={"Join Us"} />
      <div className="overflow-x-hidden">
        {/* <Slider trigger={AnimationEnds} /> */}
        {isVisible ? (
          <>
            <div>
              <Nav />

              <BackgroundComponent image={mainImage.asset.url} />

              <div className="max-h-screen bg-black  items-center justify-center text-white font-body">
                <JoinUsTitle
                  splitTitle={splitTitle}
                  descriptionTitle={descriptionTitle}
                  description={description}
                />
                <VideoSectionContainer video={video} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="min-h-screen bg-black"></div>
          </>
        )}
      </div>
    </div>
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
