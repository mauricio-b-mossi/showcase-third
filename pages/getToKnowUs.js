import React from "react";
import Nav from "../components/Nav";
import { sanityClient } from "../sanity";
import MeetTheTeamTitle from "../components/MeetTheTeamTitle";
import BackgroundComponent from "../components/BackgroundComponent";
import MemberIteratorComponent from "../components/MemberIteratorComponent";
import SEOComponent from "../components/SEOComponent";


const getToKnowUs = ({ members, page }) => {

  // Destructuring Query into different portions
  const { description, mainImage } = page;

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={"Meet Out Crew"} />

      {/* Whole page wrapper div */}
      <div className="overflow-x-hidden">
        {/* Navigation Bar Component */}
        <Nav />

        {/* Background image setter component */}
        <BackgroundComponent image={mainImage.asset.url} />

        <div className="max-h-screen bg-black  items-center justify-center text-white font-body">

          {/* Meet The Team title Component */}
          <MeetTheTeamTitle />

          {/* Member Iterator Component: accepts list of members*/}
          <MemberIteratorComponent members={members} />
        </div>
      </div>
    </>
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
