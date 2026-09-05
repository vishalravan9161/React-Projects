// import React from 'react'

const Projects = () => {
  return (
    <div className="py-1">
      <div className=" mt-[35vh]">
        <h1 className="font-[font2] text-[14vw] uppercase">Projects</h1>
      </div>
      <div className="gap-3 mb-4 -mt-20 flex h-170 w-full">
        <div  className="w-1/2 relative h-full transition-all rounded-none hover:rounded-[50px] overflow-hidden bg-amber-400">
        <img className="h-full w-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
         <div className="h-full w-full absolute items-center flex justify-center top-0 left-0 bg-black/10">
         <h2 className="uppercase text-6xl text-white border font-[font1] pt-2 rounded-full px-4 text-center">View Projects</h2>
         </div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Projects 