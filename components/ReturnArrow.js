import Link from "next/link";
import Image from "next/image";

// Component accepts a props object with the following properties:
//  - link : the link to the page
export default function ReturnArrow({link}) {
  return (
      <Link href={`${link}`}>
      <a>
        <div className="absolute top-4 left-4 transform rotate-180">
          <Image src="/arrow.png" width={40} height={40} objectFit="contain" />
        </div>
      </a>
    </Link>
  );
}
