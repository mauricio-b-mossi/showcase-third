import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function SocialIcon({ href, image }) {
  return (
    <Link href={href}>
        <a className="absolute bottom-4">
        <Image src={image} width="30" height="30" />
        </a>
      </Link>
    );
}
