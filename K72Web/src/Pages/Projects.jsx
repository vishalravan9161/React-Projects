// import React from 'react'

import { useGSAP } from "@gsap/react"
import ProjectCard from "../components/Projects/ProjectCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Footer from "../Footer/Footer"

const Projects = () => {

  const Projectsimg = [
    {
    image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
  },
  {  image1:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
  image2:    'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'

},{
  image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
  image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'

},{
  image1:    'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860',
  image2:    'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'

},{
  image1:    'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
  image2:    'https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd'

},{
  image1:    'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
  image2:    'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'

},{
  image1:    'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
  image2:    'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'

}]

gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.from('.hero',{
    height:0,
    stagger:{
      amount:0.4
    },
    scrollTrigger:{
      trigger:'.lol',
      start: 'top 100%',
      end:'top -180%',
      scrub:true,
    }
  })
})

  return (
    <div className="py-1 pl-3">
      <div className=" lg:mt-[35vh] mt-40">
        <h1 className="font-[font2] font-bold lg:mb-0.5 mb-20 lg:text-[12vw] text-[50px] uppercase">Projects</h1>
      </div>
      <div className="lol">
          {Projectsimg.map(function(elem ,idx){
          return <div key={idx} className=" hero lg:gap-3 gap-6 lg:mb-18 mb-18 -mt-15 flex lg:h-100 h-80 w-full">
                <ProjectCard image1={elem.image1} image2={elem.image2} key={idx} />
            </div>
        })}
      </div>
     <div className="-mt-14">
       <Footer />
     </div>
    </div>
  )
}

export default Projects 