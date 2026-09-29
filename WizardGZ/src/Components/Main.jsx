import Card from "./Card";

const Main = () => {
  return (
    <div>
      <section className="section2">
        <div className="Content h-110 p-10 -mt-3 flex">
          <div className="paraContent w-100 -mt-5">
            <h1 className="text-5xl font-bold">
              Navigating the digital landscape for success
            </h1>
            <p className="text-md font-semibold text-gray-600 pt-5">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO,PPC.social media
              marketing, and content creation.
            </p>
            <button className="bg-black text-white hover:text-[#B9FF66] px-8 py-4 mt-5 rounded-xl text-xl outline-none flex gap-4">
              Book a cunsultation<i class="ri-arrow-right-long-line"></i>
            </button>
          </div>
          <div className="image -mt-5">
            <img
              className="flex h-110 pl-100"
              src="https://makarios.in/wp-content/uploads/2023/10/Illustration-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="company h-30 px-10 mr-10 -mt-10">
          <div className="logo h-30 w-full flex gap-25 justify-center  ">
            <img
              className="h-40 -mt-5"
              src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
              alt=""
            />
            <img
              src="https://images.seeklogo.com/logo-png/27/1/dribbble-logo-png_seeklogo-273044.png"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD_Eelly0WFQmWGEyt22R5-W0JyW4R7yGef4jA6Gj4erL5qQBiYcb-bI&s=10"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp-Z53s63cTWzjyq-8FuGf4xGkCVo_waIa8KjgyNLHP906pAiN_mMoj4&s=10"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEf7Cl1OAXkds7HoeSYof1Fx7Jo5WAZAnqt5CnDRyGof7vYEkghY5h74&s=10"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDMt-E0Cp_qv-fib1Y8TL1XQ-LDpaT9NWG2UfyDWW3PXQk8SxqyQo_pdJ&s=10"
              alt=""
            />
          </div>
        </div>

        <div className="servise flex h-20 px-10 text-center">
          <div className="">
            <h1 className="text-4xl font-bold bg-[#B9FF66] px-5 rounded-xl py-1">
              Services
            </h1>
          </div>
          <div className="w-120 ml-15 font-medium text-gray-600 ">
            <p>
              At our digital marketing agency. We offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>

        {/* <div className="carddiv1 flex gap-10 px-10 mb-10 ">
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
        </div> */}
        <Card />
      </section>

      <div className=" px-10 mb-10 flex">
        <div className="bg-amber-50 flex justify-between rounded-2xl h-70 w-full ">
          <div className=" px-14 py-5">
            <h1 className="text-4xl  font-bold">Let's make things happen</h1>
            <p className="w-150 text-md font-semibold text-gray-600 mt-5">
              Don't just dream about success. Let's make it happen together.
              Contact us today to learn more about our digital marketing
              services and how we can help your business grow.
            </p>
            <button className="px-5 hover:text-[#B9FF66]   py-2 font-semibold rounded-2xl bg-black text-white mt-5">
              {" "}
              Get your free proposal
            </button>
          </div>
          <div className="h-60 w-70 mr-10">
            <img
              src="https://theo-durand.fr/wp-content/uploads/2024/09/Group-7-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" px-10 -mt-5 mb-10">
        <div className="study flex gap-10">
          <h1 className="text-3xl font-bold bg-[#B9FF66] pt-1 rounded-xl px-5">
            Case study
          </h1>
          <div className="text-md font-semibold text-gray-600 ">
            <p>
              Explore Real-Life Examples of Our Proven Digital Marketing
              Successes
            </p>
            <p>Through Our Case Studies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
