

const Header = () => {
  return (
    <div>
     <section className="Section1">
       <div className="flex justify-between p-10">
        <h1 className="wizard text-3xl font-bold"><span className="icon inline-block rotate-45"><i class="ri-shining-2-fill"></i></span> WizardGZ</h1>
        <div className=" flex justify-between h-8 text-xl gap-10 -mr-60 font-semibold">
          <h1 className="hover:bg-[#B9FF66]">About us</h1>
          <h1 className="hover:bg-[#B9FF66]">Servises</h1>
          <h1 className="hover:bg-[#B9FF66]">Use Cases</h1>
          <h1 className="hover:bg-[#B9FF66]">Pricing</h1>
          <h1 className="hover:bg-[#B9FF66]">Blog</h1>
        </div>
        <button className="border hover:bg-[#B9FF66] outline-none px-7 py-3 text-xl font-semibold rounded-xl -mt-2 ">Request A Quote</button>
      </div>
     </section>
    </div>
  );
};

export default Header;
