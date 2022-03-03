import React from 'react'
import HoverItems from "../components/HoverItems";
import SideText from "../components/SideText.js";
import Link from "next/link";

// Component accepts a props object with the following properties:
// - title: the title of the link
// - text: the text of the link
// - href: the link to destination of the link
export default function HomeLinkLeft({title, text, href, color}) {
    return (
      <div className="flex justify-center items-center m-4">
        <div className="hidden md:block">
          <SideText sideText={JSON.stringify(text)} />
        </div>
        <Link href={href}>
          <a>
            <HoverItems
              text={title}
              position={`text-white hover:${color} cursor-pointer`}
            />
          </a>
        </Link>
      </div>
    );
}
