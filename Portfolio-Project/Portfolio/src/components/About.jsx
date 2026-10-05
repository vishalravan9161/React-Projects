// import React from 'react'

import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <div className="intro h-30 w-full rounded-md p-3 mt-1 shadow-md/300 bg-[#67bee077]">
          <h1 className="text-xl font-[font2]">
            Hi, I'm 'Vishal Kumar', a passionate 'Frontend Developer' who loves
            turning ideas into clean, modern, and user-friendly digital
            experiences. I enjoy building websites and applications that are not
            only visually appealing but also fast, responsive, and easy to use.
            I'm constantly learning new technologies and experimenting with
            better ways to solve problems through code.
          </h1>
        </div>
        <div className="flex justify-between gap-5 mt-3">
          <div className=" h-70 w-1/2 rounded-xl shadow-md/300 bg-[#E1D7C6]">
            <h1 className="ml-3 px-3 w-30 rounded-md font-semibold text-xl mt-1 bg-[#f0b6e1b9]">
              What I Do
            </h1>
            <ul className="mx-5 mt-2 font-semibold ">
              <li>🌐 Modern & Responsive Websites</li>
              <li>⚡ Frontend Development</li>
              <li>🛠️ Full-Stack Web Applications</li>
              <li>🎨 Clean UI Implementation</li>
              <li>🚀 Performance & User Experience</li>
            </ul>
            <h1 className=" ml-3 w-40 mt-2 rounded-md font-semibold text-xl bg-[#f0b6e1b9]">
              My Tech Stack
            </h1>
            <ul className="mx-5 mt-2 font-semibold">
              <li>
                <span className="rounded-md px-2 font-semibold bg-[#f3c8e7b9]">
                  Frontend:
                </span>{" "}
                HTML, CSS, JavaScript, React, Next.js
              </li>
              <li>
                <span className="rounded-md px-2 mt-2 font-semibold bg-[#f3d2eab9]">
                  Backend:
                </span>{" "}
                Node.js, Express
              </li>
              <li>
                <span className="rounded-md px-2 mt-2 font-semibold bg-[#f1c7e6b9]">
                  Tools:
                </span>{" "}
                Git, GitHub, VS Code, Figma
              </li>
            </ul>
          </div>
          <div className=" h-70 w-1/2  rounded-md shadow-md/300 bg-[#E1D7C6]">
            <h1 className="rounded-md text-xl font-semibold mb-3 ml-3 mt-1 bg-[#f0b6e1b9] w-30">
              Education
            </h1>
            <h1 className="px-5 font-semibold">
              🎓 Bachelor of Computer Applications
            </h1>
            <h1 className="px-5 font-semibold">
              <i class="ri-school-line"></i> Jananayak Chandrashekhar University
            </h1>
            <p className="px-10">2024-27</p>

            <p className="px-10 mt-8 font-semibold">
              Currently pursuing my 'BCA' , where I'm developing my technical
              knowledge and strengthening my problem-solving skills.
            </p>
          </div>
        </div>
        <div className="personal mt-3 h-32 w-full rounded-t-md shadow-xl/300 bg-[#CCFBFA]">
          <h1 className="bg-[#f0b6e1b9] w-30 rounded-md text-xl font-semibold ml-3">My Journey</h1>
          <p className="font-semibold px-8">
            I started my journey with web development because I wanted to
            understand how websites and applications work. Since then, I've been
            building projects, learning new technologies, and improving my
            skills one project at a time.
          </p>
          <p className="font-semibold px-8">I believe the best way to learn is by building, experimenting, and solving real-world problems.</p>
        </div>
      </div>
    </>
  );
};

export default About;
