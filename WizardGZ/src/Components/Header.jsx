
import gsap from "gsap";
var tl = gsap.timeline()
tl.from(".section1 h1",{
  y:30,
  opacity:0,
  duration:0.9,
  stagger:0.5
})

tl.from(".navdiv h1",{
   y:30,
  duration:0.5,
  stagger:0.5
})

tl.from("section1 button",{
  y:30,
  duration:0.5,
  stagger:0.5
})

const Header = () => {
  return (
    <div>
     <section className="Section">
       <div className=" section1 flex  justify-between px-10 pt-10">
        <h1 className="wizard text-3xl font-bold -mt-3"><span className="icon inline-block rotate-45"><i class="ri-shining-2-fill"></i></span> WizardGZ</h1>
        <div className=" navdiv flex justify-between h-8 text-xl gap-10 -mr-60 font-semibold">
          <h1 className="hover:bg-[#B9FF66]">About us</h1>
          <h1 className="hover:bg-[#B9FF66]">Servises</h1>
          <h1 className="hover:bg-[#B9FF66]">Use Cases</h1>
          <h1 className="hover:bg-[#B9FF66]">Pricing</h1>
          <h1 className="hover:bg-[#B9FF66]">Blog</h1>
        </div>
        <button className=" button border hover:bg-[#B9FF66] outline-none px-7 py-3 text-xl font-semibold rounded-xl -mt-2 ">Request A Quote</button>
      </div>
     </section>
    </div>
  );
};

export default Header;
