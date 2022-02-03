import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

// Component accepts a props object with the following properties:
// - href : the link to the page
// - image : the image to be shown as the icon
export default function SocialIcon({ href, image }) {
  return (
    <Link href={href}>
        <a className="absolute bottom-4">
        <Image src={image} width="30" height="30" />
        </a>
      </Link>
    );
}
