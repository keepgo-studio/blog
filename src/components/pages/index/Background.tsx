'use client'

import React, { useEffect, useRef } from "react";

const Background = () => {
  const bgRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      let y = 0;
      const elem = bgRef.current;
      const totalHeight = elem.offsetHeight;

      const animation = () => {
        y += 0.2;
        if (y >= totalHeight) y = 0;
        elem.scrollTo({
          behavior: 'instant',
          left: 0,
          top: y
        });
        requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation)
    }
  }, []);

  return (
    <section
      ref={bgRef}
      className="
        fixed
        top-0
        left-0
        w-screen
        h-screen
        z-[-1]
        overflow-hidden
      "
    >
      <div
        className="relative w-full h-[200%]"
        style={{
          backgroundImage: `linear-gradient(#161e2c 1.5px, transparent 1.5px), linear-gradient(90deg, #161e2c 1.5px, transparent 1.5px), linear-gradient(#0f151d 1px, transparent 1px), linear-gradient(90deg, #0f151d 1px, transparent 1px)`,
          backgroundPosition: "-1.5px -1.5px, -1.5px -1.5px, -1px -1px, -1px -1px",
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
      />

      <div 
        className="sticky bottom-0 left-0 w-full h-24"
        style={{
          backgroundImage: 'linear-gradient(0deg, #0f151d 15%, rgba(0, 0, 0, 0) 86%)'
        }}
      />
    </section>
  );
};

export default Background;
