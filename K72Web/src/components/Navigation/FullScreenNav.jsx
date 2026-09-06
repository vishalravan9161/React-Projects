// import React from 'react'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useRef } from "react"
import  { NavbarContext } from "../../context/NavContext"
import { Link } from "react-router-dom"
import K72 from "../NavComponent/k72"
import Footer from "../../Footer/Footer"

const FullScreenNav = () => {
    const [navOpen, setNavOpen] =  useContext(NavbarContext)

        // console.log(navOpen)

   const fullNavLinkRef = useRef(null)
   const fullScreenRef = useRef(null)

         function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
     }, [navOpen])

  return (
    <div ref={fullScreenRef} id="fullscreennav" className="fullscreennav text-white hidden overflow-hidden absolute z-50 h-screen w-full ">
      <div className="h-screen w-full fixed ">
           <div className="h-full flex w-full">
        <div className="stairing h-full w-1/6 bg-black"></div>
        <div className="stairing h-full w-1/6 bg-black"></div>
        <div className="stairing h-full w-1/6 bg-black"></div>
        <div className="stairing h-full w-1/6 bg-black"></div>
        <div className="stairing h-full w-1/6 bg-black"></div>
         <div className="stairing h-full w-1/6 bg-black"></div>
      </div>
      </div>

      <div ref={fullNavLinkRef} className="relative">
        <div className=" navlink flex justify-between  w-full items-start h-30">
       <div className="icon">
        <K72 /> //K72 svg component
       </div>
        
         <div>
           <button onClick={()=>{
            setNavOpen(false)
           }}
            >
             <svg  className="cursor-pointer hover:text-[#D3FD50]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="110" height="110" viewBox="0 0 50 50">
             <path fill="currentColor" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
           </button>
         </div>
   
       </div>
        
        <div className="overflow-hidden h-screen">
         <Link onClick={()=>{
          setNavOpen(null)
         }} to='/projects'>
         <div className="link origin-top border-t leading-20 relative ">
            <h1 className="font-[font2] text-[8vw] mt-3  text-center uppercase">Projects</h1>
            <div className="moveLink absolute  flex  top-0 bg-[#D3FD50] text-black">
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
         </Link>

          <Link onClick={()=>{
          setNavOpen(null)
         }}
           to='/agence'>
          <div className="link origin-top border-t leading-20 relative ">
            <h1 className="font-[font2] text-[8vw] mt-3  text-center uppercase">Agency</h1>
            <div className="moveLink absolute  flex  top-0 bg-[#D3FD50] text-black">
                <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Know Us</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Know Us</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" />
                </div>
                 <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Know Us</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Know Us</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" />
                </div>
                
            </div>
          </div>
          </Link>

          <div className="link origin-top border-t leading-20 relative ">
            <h1 className="font-[font2] text-[8vw] mt-3  text-center uppercase">Contact</h1>
            <div className="moveLink absolute  flex  top-0 bg-[#D3FD50] text-black">
                <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Send Us A Fax</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=612x612&w=0&k=20&c=R5wzCGHu6ZS-8EQpJ2Z1tkSbKGGdJH4apVhFM18EXSM=" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Send Us A Fax</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://media.istockphoto.com/id/1015358064/photo/website-contact-us-concept-with-wooden-blocks.jpg?s=612x612&w=0&k=20&c=zgN6OOItg8FXd6nmNsklQr_Dl4DZ13ndP5RpAPsv8lQ=" alt="" />
                </div>
                 <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Send Us A Fax</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://media.istockphoto.com/id/1015358064/photo/website-contact-us-concept-with-wooden-blocks.jpg?s=612x612&w=0&k=20&c=zgN6OOItg8FXd6nmNsklQr_Dl4DZ13ndP5RpAPsv8lQ=" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Send Us A Fax</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=612x612&w=0&k=20&c=R5wzCGHu6ZS-8EQpJ2Z1tkSbKGGdJH4apVhFM18EXSM=" alt="" />
                </div>
                
            </div>
          </div>

          <div className="link origin-top border-y leading-20 relative ">
            <h1 className="font-[font2] text-[8vw] mt-3  text-center uppercase">Blog</h1>
            <div className="moveLink absolute  flex  top-0 bg-[#D3FD50] text-black">
                <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Read Articles</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Read Articles</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                </div>
                 <div className=" moveX flex items-center">
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Read Articles</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                  <h2 className="font-[font2] whitespace-nowrap text-[7vw] mt-3 text-center uppercase">Read Articles</h2>
                  <img className="h-20 rounded-full ml-3 mr-3 object-cover w-50 shrink-0" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                </div>
                    
            </div>
            <div className="border-t">
               <Footer />
            </div>
          </div>
         
     
        
        </div>
       
      </div>
         
    </div>
  )
}

export default FullScreenNav