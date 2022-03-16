import React from "react";
import Link from "next/link";
import HoverNav from "./HoverNav";
import Image from "next/image";


const Nav = () => {

  return (
    <>
      <div>
        <div className="font-body bg-black flex flex-col items-center
        justify-center uppercase  relative z-20 ">
          <nav>
            <Link href="/">
              <div className="fixed h-20 w-20 top-4 left-4 sm:h-24
              sm:w-24 sm:top-12 sm:left-12  cursor-pointer">
                <a>
                  {/* Main logo */}
                  <Image
                    src="/showcase.webp"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </div>
            </Link>
            <div className="text-white text-sm font-normal fixed h-24 
            w-40 top-4 right-6 flex flex-col justify-center items-end">
              {/* Home nav item */}
              <Link href="/">
                <a>
                  <HoverNav
                    text={"Home"}
                    position={"text-white hover:text-red-300 cursor-pointer"}
                  />
                </a>
              </Link>
              {/* Artists nav item */}
              <Link href="/artists">
                <a>
                  <HoverNav
                    text={"Artists"}
                    position={"text-white hover:text-yellow-300 cursor-pointer"}
                  />
                </a>
              </Link>
              {/* JoinUs nav item */}
              <Link href="/joinUs">
                <a>
                  <HoverNav
                    text={"join-us"}
                    position={"text-white hover:text-green-300 cursor-pointer"}
                  />
                </a>
              </Link>
              {/* About nav item */}
              <Link href="/about">
                <a>
                  <HoverNav
                    text={"About"}
                    position={"text-white hover:text-blue-300 cursor-pointer"}
                  />
                </a>
              </Link>
              {/* Crew nav item */}
              <Link href="/getToKnowUs">
                <a>
                  <HoverNav
                    text={"crew"}
                    position={"text-white hover:text-yellow-600 cursor-pointer"}
                  />
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
