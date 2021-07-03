import Head from "next/head";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { sanityClient } from "../sanity";

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
      {/* <Anim intro={intro} className="" /> */}

      <motion.div className="font-body text-9xl min-h-screen bg-black  flex flex-col items-center justify-center uppercase  relative overflow-hidden ">
        <Link href="/">
          <div className="absolute h-24 w-24 top-12 left-12 cursor-pointer">
            <a>
              <Image src="/showcase.webp" alt="" layout="fill" />
            </a>
          </div>
        </Link>
        <div className="flex justify-center items-center m-4 ">
          <Link href="/">
            <a>
              {/* <HoverItems */}
                {/* text={"Home"}
                position={"text-white hover:text-red-300 cursor-pointer"}
              /> */}
            </a>
          </Link>
          {/* <SideText sideText={JSON.stringify(home)} /> */}
        </div>
        <Image
          className="absolute h-40 w-40 animate-spin-slow right-4 bottom-4 rounded-full"
          src="/Product_0.svg"
          alt=""
          layout="fill"
        />
        <div className="flex justify-center items-center m-4">
          {/* <SideText sideText={JSON.stringify(artists)} /> */}
          <Link href="/artists">
            <a>
              {/* <HoverItems */}
                {/* text={"Artists"}
                position={"text-white hover:text-yellow-300 cursor-pointer"}
              /> */}
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center m-4">
          <Link href="/joinUs">
            <a>
              {/* <HoverItems */}
                {/* text={"Join Us"}
                position={"text-white hover:text-green-300 cursor-pointer"}
              /> */}
            </a>
          </Link>
          {/* <SideText sideText={JSON.stringify(joinus)} /> */}
        </div>
        <div className="flex justify-center items-center m-4">
          {/* <SideText sideText={JSON.stringify(artists)} /> */}
          <Link href="/aboutDemo">
            <a>
              {/* <HoverItems */}
                {/* text={"About"}
                position={"text-white hover:text-blue-300 cursor-pointer"}
              /> */}
            </a>
          </Link>
        </div>
        <motion.div className="absolute bottom-0 left-0"></motion.div>
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
