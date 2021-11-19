import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Anim from "../components/Anim";
import { sanityClient } from "../sanity";
import SEOComponent from "../components/SEOComponent";
import MobileBackground from "../components/MobileBackground";
import CornerLogo from "../components/CornerLogo";
import SocialIcon from "../components/SocialIcon";
import HomeLinkRight from "../components/HomeLinkRight";
import HomeLinkLeft from "../components/HomeLinkLeft";

const Home = ({ homeInfo }) => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);

  const { mainImage, home, artists, joinus, about, team } = homeInfo[0];

  return (
    <>
      <SEOComponent title={"Home"} />
      <Anim intro={intro} />
      <MobileBackground image={mainImage.asset.url} />

      <motion.div className=" font-body text-7xl min-h-screen flex flex-col items-center  justify-center uppercase  relative overflow-hidden ">
        
        <CornerLogo />

        <HomeLinkRight title={"Home"} text={home} href={"/"} />
        <HomeLinkLeft title={"Artists"} text={artists} href={"/artists"} />
        <HomeLinkRight title={"Join-us"} text={joinus} href={"/joinUs"} />
        <HomeLinkLeft title={"About"} text={about} href={"/about"} />
        <HomeLinkRight title={"Crew"} text={team} href={"/getToKnowUs"} />

        <SocialIcon
          href={"https://www.instagram.com/showcase.sv/"}
          src={"/insta.webp"}
        />
      </motion.div>
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
