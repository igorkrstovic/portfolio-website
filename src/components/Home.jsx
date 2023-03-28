import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#000000] w-full h-screen">
      {/* CONTAINER */}

      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full z-50">
        <p className="text-[#569CD6] font-bold px-1 py-2">{"<div>"}</p>
        <p className="text-white px-1">Hello World, my name is</p>
        <h1 className="text-4xl sm:text-6xl bold text-white">Igor.</h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#d9b326]">
          I'm a Front-End developer
        </h2>

        {/* type text start */}
        <div class="w-10 h-10 hidden sm:block">
          <div class="absolute inset-0 bg-transparent bg-center z-0 "></div>
          <div class="relative w-full  sm:mx-auto sm:max-w-lg sm:rounded-lg text-start sm:px-1">
            <div class="text-[#49ADE4]  text-lg font-bold border-r-2 border-black w-[34ch] whitespace-nowrap overflow-hidden animate-typing">
              focusing on building responsive web and mobile applications.
            </div>
          </div>
        </div>
        {/* type text end */}

        {/* <p className="text-[#6eb5f1]  px-1 max-w-[700px]">
          Focusing on building responsive web and mobile applications.
        </p> */}
        <p className="text-[#569CD6] font-bold px-1">{"</div>"}</p>
        <div className="z-0">
          <li className="text-white group border-2 px-6 py-3 my-2 w-[120px] h-[35px] flex items-center text-center hover:bg-[#d9b326]">
            <Link to="work" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
