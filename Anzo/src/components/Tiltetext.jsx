import React, { useRef } from "react";
const Tiltetext = (props) => {
  return (
   <>
    <div id="tilteDiv" ref={props.abc} className=" pl-10">
          <h1 className="text-[4.5vw] leading-20 mt-10 font-bold w-140">
            I AM <span className="text-black">DARK MODE </span>
            <span className="text-[8vw] font-bold"> DESIGNER</span>
          </h1>
          <h2 className="text-6xl font-bold ">TO HIRE </h2>
        </div>
   </>
  );
};

export default Tiltetext;
