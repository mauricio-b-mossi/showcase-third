import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CornerLogo() {
    return (
      <Link href="/">
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
    );
}
