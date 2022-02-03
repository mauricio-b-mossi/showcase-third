import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import OnMountAnim from "../components/OnMountAnim";
import { sanityClient } from "../sanity";
import SEOComponent from "../components/SEOComponent";
import MobileBackground from "../components/MobileBackground";
import CornerLogo from "../components/CornerLogo";
import SocialIcon from "../components/SocialIcon";
import HomeLinkRight from "../components/HomeLinkRight";
import HomeLinkLeft from "../components/HomeLinkLeft";

// Page receives a props object with the following properties:
// - homeInfo : which contains the mainImage and the description
//              for the home, artists, jooinus, about, and
//              team links.
const Home = ({ homeInfo }) => {
  
  // While intro is True the body of the page will be hidden
  const [intro, setIntro] = useState(true);

  // React hook that sets Into to false after 3 seconds/the duration of the animation
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);

  // Destructuring Query into different portions
  const { mainImage, home, artists, joinus, about, team } = homeInfo[0];

  return (
    <>
      {/* Page Meta data */}
      <SEOComponent title={"Home"} />

      {/* OnMountAnim accepts the intro prop which is a boolean.*/}
      <OnMountAnim intro={intro} />

      {/* Mobile background image component */}
      <MobileBackground image={mainImage.asset.url} />

      {/* Body Wrapper div */}
      <div className=" font-body text-5xl min-h-screen flex flex-col items-center  justify-center uppercase  relative overflow-hidden ">
        {/* Showcase Logo in the corner */}
        <CornerLogo />

        {/* All the individual link components */}
        {/* They accept 3 props: The title, the link description text, and the route */}
        <HomeLinkRight title={"Home"} text={home} href={"/"} />
        <HomeLinkLeft title={"Artists"} text={artists} href={"/artists"} />
        <HomeLinkRight title={"Join-us"} text={joinus} href={"/joinUs"} />
        <HomeLinkLeft title={"About"} text={about} href={"/about"} />
        <HomeLinkRight title={"Crew"} text={team} href={"/getToKnowUs"} />

        {/* Social icon component at the bottom of the homescreen */}
        {/* It accepts 2 props: The link to the social media, and the icon */}
        <SocialIcon
          href={"https://www.instagram.com/showcase.sv/"}
          image={"/insta.webp"}
        />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "home"]{
      mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
    home,
    artists,
    joinus,
    about,
    team
  }`;

  const homeInfo = await sanityClient.fetch(query);

  return {
    props: {
      homeInfo,
    },
  };
};

export default Home;
