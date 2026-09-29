
import gsap from "gsap";
function animation1(){
  var tl = gsap.timeline()
tl.from(".Section1 h1",{
  y:-30,
  opacity:0,
  duration:0.4,
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

animation1()


const Header = () => {
  return (
    <div>
     <section className="Section1">
       <div className="navbutton flex justify-between px-10 pt-10">
        <h1 className="wizard text-3xl font-bold -mt-3"><span className="icon inline-block rotate-45"><i class="ri-shining-2-fill"></i></span> WizardGZ</h1>
        <div className=" navdiv flex justify-between h-8 text-xl gap-10 -mr-60 font-semibold">
          <h2 className="hover:bg-[#B9FF66]">About us</h2>
          <h2 className="hover:bg-[#B9FF66]">Servises</h2>
          <h2 className="hover:bg-[#B9FF66]">Use Cases</h2>
          <h2 className="hover:bg-[#B9FF66]">Pricing</h2>
          <h2 className="hover:bg-[#B9FF66]">Blog</h2>
        </div>
        <button className=" border hover:bg-[#B9FF66] outline-none px-7 py-3 text-xl font-semibold rounded-xl -mt-2 ">Request A Quote</button>
      </div>
     </section>
    </div>
  );
};

export default Header;
