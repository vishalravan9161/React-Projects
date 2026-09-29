

const Footer = () => {
  return (
    <div className="px-10">
      <div className="footer h-50 border flex text-white  rounded-2xl bg-black mb-10">
          <div className="w-1/3 border-r p-5 h-full">
              <p className="text-md font-semibold">For a local e-commerce store, we implemented a targeted SEO strategy that increased organic traffic by 150% in just 6 months, resulting in a significant boost in sales and revenue.</p>
              <button className="text-[17px] font-semibold text-[#B9FF66] flex gap-2 mt-10" >Learn more<i class="ri-arrow-right-long-line"></i></button>
          </div>

          <div className="w-1/3 border-r p-5 h-full">
              <p className="text-md font-semibold">For a SaaS company, we ran a multi-channel PPC campaign that drove a 3x increase in conversions and reduced cost per acquisition by 40% within 3 months</p>
              <button className="text-[17px] text-[#B9FF66] flex gap-2 mt-10 font-semibold">Learn more<i class="ri-arrow-right-long-line"></i></button>
          </div>

          <div className="w-1/3 p-5 h-full">
              <p className="text-md font-semibold">For a health and wellness brand, we created a social media strategy that grew their Instagram following by 250% and increased engagement by 180%, helping them build a stronger community.</p>
              <button className="text-[17px] font-semibold text-[#B9FF66] flex gap-2 mt-10">Learn more <i class="ri-arrow-right-long-line"></i></button>
          </div>
      </div>


    </div>
  )
}

export default Footer