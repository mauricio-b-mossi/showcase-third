import React from 'react'

// Component accepts a props object with the following properties:
// - href: the link to destination of the button
// - text: the internal text of the button
export default function Button({href, text}) {
    return (
      <div className="pb-20">
        <a href={href} className="button1 bouncy">
          {text}
        </a>
      </div>
    );
}
