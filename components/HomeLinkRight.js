import React from 'react'
import HoverItems from "../components/HoverItems";
import SideText from "../components/SideText.js";
import Link from "next/link";




export default function HomeLinkRight({title, text, href}) {
    return (
      <div className="flex justify-center items-center m-4 ">
        <Link href={href}>
          <a>
            <HoverItems
              text={title}
              position={"text-white hover:text-red-300 cursor-pointer"}
            />
          </a>
        </Link>
        <div className="hidden md:block">
          <SideText sideText={JSON.stringify(text)} />
        </div>
      </div>
    );
}
