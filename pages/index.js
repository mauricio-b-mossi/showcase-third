import Head from "next/head";
import Image from "next/image";
import HoverItems from "../components/HoverItems";
import { motion} from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Anim from "../components/Anim";
import SideText from "../components/SideText.js";
import { sanityClient } from "../sanity";
import Slider from "../components/Slider";
import SEOComponent from "../components/SEOComponent";


const Home = ({ homeInfo }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisSwitching(false);
  //   }, 2000);
  // }, [isSwitching]);

  // const [isSwitching, setisSwitching] = useState(false);

  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);

  const { mainImage, home, artists, joinus, about, team } = homeInfo[0];



  return (
    <div>
      <SEOComponent title={ "Home" }/>
      <Anim intro={intro} />
      <div className="absolute min-h-screen min-w-full bg-black">
        <div className="block md:hidden">
          {mainImage ? (
            <Image
              className="h-full w-full object-cover opacity-80"
              src={mainImage.asset.url}
              alt=""
              layout="fill"
              priority={true}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* sm:text-9xl */}
      <motion.div className=" font-body text-7xl min-h-screen flex flex-col items-center  justify-center uppercase  relative overflow-hidden ">
        <div>
          {/* TODO: THIS IS THE HEADER */}
          <Link href="/">
            {/* h-12 w-12 top-6 left-6 */}
            <div className="absolute h-20 w-20 top-4 left-4 sm:h-24 sm:w-24 sm:top-12 sm:left-12  cursor-pointer">
              <a>
                <Image
                  src="/showcase.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </div>
          </Link>

          {/* FIXME: LINKS START HERE */}
          <div>
            <div className="flex justify-center items-center m-4 ">
              <Link href="/">
                <a>
                  <HoverItems
                    text={"Home"}
                    position={"text-white hover:text-red-300 cursor-pointer"}
                  />
                </a>
              </Link>
              <div className="hidden md:block">
                <SideText sideText={JSON.stringify(home)} />
              </div>
            </div>
            {/* <Image
          className="absolute animate-spin-slow right-4 bottom-4 rounded-full"
          src="/Product_0.svg"
          alt=""
          width="160"
          height="160"

        /> */}
            <div className="flex justify-center items-center m-4">
              <div className="hidden md:block">
                <SideText sideText={JSON.stringify(artists)} />
              </div>
              <Link href="/artists">
                <a>
                  <HoverItems
                    text={"Artists"}
                    position={"text-white hover:text-yellow-300 cursor-pointer"}
                  />
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center m-4">
              <Link href="/joinUs">
                <a>
                  <HoverItems
                    text={"Join-us"}
                    position={"text-white hover:text-green-300 cursor-pointer"}
                  />
                </a>
              </Link>
              <div className="hidden md:block">
                <SideText sideText={JSON.stringify(joinus)} />
              </div>
            </div>
            <div className="flex justify-center items-center m-4">
              <div className="hidden md:block">
                <SideText sideText={JSON.stringify(about)} />
              </div>
              <Link href="/about">
                <a>
                  <HoverItems
                    text={"About"}
                    position={"text-white hover:text-blue-300 cursor-pointer"}
                  />
                </a>
              </Link>
            </div>
            {/* HERE */}
            <div className="flex justify-center items-center m-4">
              <Link href="/getToKnowUs">
                <a>
                  <HoverItems
                    text={"Crew"}
                    position={"text-white hover:text-yellow-600 cursor-pointer"}
                  />
                </a>
              </Link>
              <div className="hidden md:block">
                <SideText sideText={JSON.stringify(team)} />
              </div>
            </div>
            {/* HERE */}
          </div>
          {/* FIXME: LINKS START HERE */}
          <motion.div className="absolute bottom-0 left-0"></motion.div>
        </div>
        <Link href="https://www.instagram.com/showcase.sv/">
          <a className="absolute bottom-4">
            <Image src="/insta.webp" width="30" height="30" />
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

// export const getServerSideProps = async ({ params }) => {
  export const getStaticProps = async ({ params }) => {
// export const getServerSideProps = async ({ params }) => {
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
