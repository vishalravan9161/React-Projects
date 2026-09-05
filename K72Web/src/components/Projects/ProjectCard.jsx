// import React from 'react'

const ProjectCard = (props) => {
    // console.log(props.image1)
  return (
     <div className="gap-3 flex w-full">
        <div  className="w-1/2 group  relative h-full transition-all rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
         <div className="h-full w-full opacity-0 transition-all group-hover:opacity-100  absolute items-center flex justify-center top-0 left-0 bg-black/10">
         <h2 className="uppercase text-5xl text-white border font-[font1] pt-2 rounded-full px-4 text-center">
          View Projects</h2>
         </div>
         
        </div>

        <div  className="w-1/2 group  relative h-full transition-all rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
         <div className="h-full w-full opacity-0 transition-all group-hover:opacity-100  absolute items-center flex justify-center top-0 left-0 bg-black/10">
         <h2 className="uppercase text-5xl text-white border font-[font1] pt-2 rounded-full px-4 text-center">
          View Projects</h2>
         </div>
         
        </div>
        
    
     </div>
  )
}

export default ProjectCard