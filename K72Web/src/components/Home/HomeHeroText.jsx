// import React from 'react'

import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw]">The spark for</div>

      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-cnter">
        all
        <div>
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
