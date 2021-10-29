import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { sanityClient } from "../sanity";

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
      <Head>
        <title>Join Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden">
        {/* <Slider trigger={AnimationEnds} /> */}
        {isVisible ? (
          <>
            {/* TODO: DESKTOP */}
            {/*  md:block */}
            {/* <div className="hidden">
              <Nav />

              <div className="min-h-screen bg-black grid  md:grid-cols-2 items-center justify-center text-white font-body">
                <div className="flex justify-center items-center h-full w-full bg-red-800">
               
                  <iframe
                    width="560"
                    height="315"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col justify-center items-center min-h-screen ">
                  <h1 className="uppercase text-center text-7xl lg:text-8xl 2xl:text-9xl font-bold absolute top-1/4 ">
                    <div>{splitTitle ? splitTitle[0] : "common"}</div>
                    <div className="relative transform -translate-y-2 lg:-translate-y-4 2xl:-translate-y-8">
                      {splitTitle ? splitTitle[1] : "join"}
                    </div>
                    <div className="relative transform -translate-y-4 lg:-translate-y-8 2xl:-translate-y-16">
                      {splitTitle ? splitTitle[2] : "us"}
                    </div>
                  </h1>
                  <div className="absolute bottom-12">
                    <div className="relative">
                      <div className="flex flex-col justify-center items-center py-8">
                        <h3 className="uppercase font-bold">
                          {descriptionTitle ? descriptionTitle : "You Know"}
                        </h3>
                        <p className="max-w-xs text-center">
                          {description
                            ? description
                            : " It isnt that difficult, just click the button below and send us yout art."}
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="bg-red-800 px-8 py-2 rounded-md animate-pulse hover:scale-125 active:scale-75 hover:animate-none  ">
                          <p>HERE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* TODO: MOBIL */}
            {/*  md:hidden */}
            <div className="block">
              <Nav />
              <div className="absolute min-h-screen min-w-full bg-black">
                {mainImage.asset.url ? (
                  <Image
                    className="h-full w-full object-cover opacity-80"
                    src={mainImage.asset.url}
                    alt=""
                    layout="fill"
                    priority={true}
                  />
                ) : (
                  <Image
                    className="h-full w-full object-cover opacity-80"
                    src="/BWBG.jpg"
                    alt=""
                    layout="fill"
                    priority={true}
                  />
                )}
              </div>
              {/* remember the padding 20 */}
              <div className="max-h-screen bg-black  items-center justify-center text-white font-body">
                <div className="relative min-h-screen flex flex-col justify-center items-center">
                  <h1 className="relative text-7xl uppercase text-center md:text-9xl py-8  font-bold">
                    <div>{splitTitle ? splitTitle[0] : "common"}</div>
                    <div className="relative transform -translate-y-4 md:-translate-y-8">
                      {splitTitle ? splitTitle[1] : "join"}
                    </div>
                    <div className="relative transform -translate-y-8  md:-translate-y-16">
                      {splitTitle ? splitTitle[2] : "us"}
                    </div>
                  </h1>
                  {/* Text under title */}
                  <div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="relative uppercase font-bold">
                        {descriptionTitle ? descriptionTitle : "You Know"}
                      </h3>
                      <p className="relative max-w-xs text-center text-sm font-light">
                        {description
                          ? description
                          : " It isnt that difficult, just click the button below and send us yout art."}
                      </p>
                    </div>
                    {/* <div className="text-sm  transform translate-y-4 md:translate-y-16 bg-red-800 px-4 py-2 md:px-8 md:py-2 rounded-md animate-pulse hover:scale-125 active:scale-75 hover:animate-none ">
                    <p>HERE</p>
                  </div> */}
                    <div className="flex items-center justify-center">
                      <div className="absolute bottom-4 animate-bounce">
                        <Image
                          src="/scroll.png"
                          alt=""
                          width="30"
                          height="30"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* TODO: SECOND SECTION */}
                <div className="flex flex-col justify-center items-center min-h-screen md:h-full  w-screen">
                  <div className="relative flex  justify-center  items-center w-full py-20">
                    <div className="container">
                      <iframe
                        className="responsive-iframe"
                        src={video}
                      ></iframe>
                    </div>
                  </div>
                  {/* Button */}
                  {/* <div className="flex flex-col justify-center items-center">
                    <h3 className="relative uppercase font-bold">
                      {descriptionTitle ? descriptionTitle : "You Know"}
                    </h3>
                    <p className="relative max-w-xs text-center text-sm font-light">
                      {description
                        ? description
                        : " It isnt that difficult, just click the button below and send us yout art."}
                    </p>
                  </div> */}
                  {/* TODO: LINK */}
                  <div className="pb-20">
                    <a
                      href="https://wetransfer.com/"
                      className="button1 bouncy"
                    >
                      WE TRANSFER
                    </a>
                  </div>
                </div>
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
// export const getServerSideProps = async ({ params }) => {
// export const getServerSideProps = async ({ params }) => {
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
