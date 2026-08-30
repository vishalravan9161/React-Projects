// import React from 'react'

const FullScreenNav = () => {
  return (
    <div className="bg-black text-white">
        <div id="fullscreennav" className="h-screen  py-30 w-full absolute bg-amber-800">
          <div className="links border-t leading-20 relative ">
            <h1 className="font-[font2] text-[7vw] mt-3  text-center uppercase">Projects</h1>
            <div className="absolute flex  top-0 bg-[#D3FD50] text-black">
                <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">SEE EVERYTHING</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">SEE EVERYTHING</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                </div>
                 <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">SEE EVERYTHING</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">SEE EVERYTHING</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                </div>
                
            </div>
          </div>
          
        </div>

    </div>
  )
}

export default FullScreenNav