import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { sanityClient } from "../sanity";
import MeetTheTeamTitle from "../components/MeetTheTeamTitle";
import BackgroundComponent from "../components/BackgroundComponent";
import MemberIteratorComponent from "../components/MemberIteratorComponent";
import SEOComponent from "../components/SEOComponent";


const getToKnowUs = ({ members, page }) => {
  const { description, mainImage } = page;

  return (
    <div>
      <SEOComponent title={"Meet Out Crew"} />
      
      <div className="overflow-x-hidden">

          <Nav />
          <BackgroundComponent image={mainImage.asset.url} />

        <div className="max-h-screen bg-black  items-center justify-center text-white font-body">

          <MeetTheTeamTitle />

          <MemberIteratorComponent members={members} />
          
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const membersQuery = `*[_type == "members"]| order(order){
    name,
    position,
    biography,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
  }`;
  const pageQuery = `*[_type == "team"][0]{
 
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
  }`;

  //    description,

  const members = await sanityClient.fetch(membersQuery);
  const page = await sanityClient.fetch(pageQuery);

  return {
    props: {
      members,
      page,
    },
  };
};

export default getToKnowUs;
