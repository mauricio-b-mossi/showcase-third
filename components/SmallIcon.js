import React from 'react'
import Image from "next/image";


export default function SmallIcon() {
    return (
      <div className="flex items-center justify-center">
        <div className="absolute bottom-4 animate-bounce">
          <Image src="/scroll.png" alt="" width="30" height="30" priority />
        </div>
      </div>
    );
}
