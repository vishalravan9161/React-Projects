import gsap, { ScrollTrigger } from "gsap/all";
import {useGSAP} from "@gsap/react"
 gsap.registerPlugin(ScrollTrigger);
const Card = () => {
useGSAP(()=>{
 function animatio1(){
   var tl= gsap.timeline()
tl.from(".Section1 h1",{
  y:-90,
  opacity:0,
  duration:0.5,
  stagger:0.5
})

tl.from(".navdiv h2",{
  y:-20,
  opacity:0,
  stagger:0.4
})
tl.from(".navbutton button",{
  y:-20,
  opacity:0
})
tl.from(".Content .paraContent",{
  x:-100,
  opacity:0
})
tl.from(".Content .image",{
  x:100,
  opacity:0
})
tl.from(".company",{
  opacity:0
})
tl.from(".servise",{
  x:200,
  opacity:0
})
 }
 animatio1()
  gsap.from(".carddiv1 .card1",{
    x:-600,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".card1",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })

   gsap.from(".carddiv1 .card2",{
    x:600,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".card2",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })

   gsap.from(".carddiv2 .card3",{
    x:-600,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".card3",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })

   gsap.from(".carddiv2 .card4",{
    x:600,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".card4",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })

   gsap.from(".thingshapendiv",{
    y:150,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".thingshapendiv",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })
   gsap.from(".study",{
    y:-100,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".study",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })

     gsap.from(".footer",{
    y:-200,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger:".footer",
      markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })
},[])
  return (
    <div>
      <div className="carddiv1 flex gap-10 px-10 mb-10 ">
        <div className="card1 rounded-2xl flex border-2 outline-none  w-1/2">
          <div className="texts flex flex-col justify-between m-5">
            <h1 className="text-3xl bg-[#B9FF66]  font-bold">
              Search engine optimization
            </h1>
            <div className="h-10 w-10 text-[#B9FF66] flex justify-center items-center bg-black rounded-full">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <div className="h-50 flex justify-center mt-2 w-70 pr-10">
            <img
              src="https://swobodamarketing.com/wp-content/uploads/2021/09/SEO.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="card2 rounded-2xl flex border-2 outline-none  w-1/2">
          <div className="texts flex flex-col justify-between m-5 ">
            <h1 className="text-3xl bg-[#B9FF66] font-bold">
              Pay per click advertising
            </h1>
            <div className="h-10 w-10 text-black flex justify-center items-center bg-[#B9FF66] rounded-full">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <div className="h-50 flex justify-center mt-2 w-70 pr-10">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/427/296/non_2x/ppc-advertising-managers-work-with-websites-ppc-campaign-pay-per-click-model-internet-marketing-tools-search-engine-advertising-concept-flat-modern-illustration-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="carddiv2 flex gap-10 px-10 mb-10  ">
        <div className="card3 rounded-2xl flex border-2 outline-none  w-1/2">
          <div className="texts flex flex-col justify-between m-5 ">
            <h1 className="text-3xl bg-[#B9FF66] font-bold">
              Social media marketing
            </h1>

            <div className="h-10 w-10 text-black flex justify-center items-center bg-[#B9FF66] rounded-full">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <div className="h-50 flex justify-center mt-2 w-70 pr-10">
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/019/079/non_2x/social-media-illustration-concept-social-network-banner-with-icons-free-vector.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="card4 rounded-2xl flex border-2 outline-none  w-1/2">
          <div className="texts flex flex-col justify-between m-5">
            <h1 className="text-3xl bg-[#B9FF66] font-bold">
              E-mail marketing
            </h1>
            <div className="h-10 w-10 text-[#B9FF66] flex justify-center items-center bg-black rounded-full">
              <i class="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <div className="h-50 flex justify-center mt-2 w-70 ml-14 pr-10">
            <img
              src="https://unblast.com/wp-content/uploads/2021/08/Email-Marketing-Illustration-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
