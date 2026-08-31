// import React from 'react'

const FullScreenNav = () => {
  return (
    <div className=" full bg-black text-white">
       <div className="">
        <div className=" flex justify-between  h-30">
        <svg className="ml-2 " xmlns="http://www.w3.org/2000/svg" width="115" height="78" viewBox="0 0 103 44">
            <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        
         <button className="">
           <svg  className="cursor-pointer hover:text-[#D3FD50]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="110" height="110" viewBox="0 0 50 50">
             <path fill="currentColor" d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
         </button>
           {/* <div className="bg-white hover:bg-[#D3FD50]  h-0.5 w-35  rotate-45"></div>
           <div className="bg-white hover:bg-[#D3FD50] h-0.5 w-35  -rotate-45"></div> */}
         
       </div>
       </div>
        
        <div id="fullscreennav" className="h-screen overflow-hidden w-full absolute bg-black">
          <div className="link border-t leading-20 relative ">
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

          <div className="link border-t leading-20 relative ">
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

          <div className="link border-t leading-20 relative ">
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

          <div className="link border-y leading-20 relative ">
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
          </div>
          
        </div>

    </div>
  )
}

export default FullScreenNav