// import React from 'react'

import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white pt-5 text-center ">
      <div className="text-[9.5vw] uppercase justify-center flex items-cnter leading-[8vw]">The spark for</div>

      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-cnter">
        all
        <div className="h-[8vw] rounded-full mb-3 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] justify-center flex items-cnter uppercase leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
