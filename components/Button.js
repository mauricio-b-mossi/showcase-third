import React from 'react'

export default function Button({href, text}) {
    return (
      <div className="pb-20">
        <a href={href} className="button1 bouncy">
          {text}
        </a>
      </div>
    );
}
