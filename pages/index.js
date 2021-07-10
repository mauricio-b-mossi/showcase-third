import Head from "next/head";
import Image from "next/image";
import HoverItems from "../components/HoverItems";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Anim from "../components/Anim";
import SideText from "../components/SideText.js";
import { sanityClient } from "../sanity";
import Slider from "../components/Slider";

// Tabs to make:
// Home
// Artists
// Join Us
// About Us

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

  const { title, home, artists, joinus, about } = homeInfo[0];

  // console.log(home);
  // console.log(title);
  // console.log(home);
  // console.log(artists);
  // console.log(joinus);
  // console.log(about);

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Anim intro={intro} className="" />

      <motion.div className="font-body text-7xl sm:text-9xl min-h-screen bg-black  flex flex-col items-center  justify-center uppercase  relative overflow-hidden ">
        <div className="">
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
                  text={"Join Us"}
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
            <Link href="/aboutDemo">
              <a>
                <HoverItems
                  text={"About"}
                  position={"text-white hover:text-blue-300 cursor-pointer"}
                />
              </a>
            </Link>
          </div>
          <motion.div className="absolute bottom-0 left-0"></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "home"]`;

  const homeInfo = await sanityClient.fetch(query);

  return {
    props: {
      homeInfo,
    },
  };
};

export default Home;
