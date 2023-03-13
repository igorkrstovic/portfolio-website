import React from "react";
import { Link } from "react-scroll";
import { BiRightArrowCircle } from "react-icons/bi";

const Home = () => {
  return (
    <div name="home" className="bg-[#000000] w-full h-screen">
      {/* CONTAINER */}

      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white px-1">{"< >"}</p>
        <p className="text-white px-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl bold text-white">Igor Krstovic</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#d9b326]">
          I'm a Front-End developer.
        </h2>
        <p className="text-[#6eb5f1]  px-1 max-w-[700px]">
          I'm specilizing in building exceptional digital experiences.
          Currently, I'm focused on building responsive web applications.
        </p>
        <p className="text-white px-1">{"</>"}</p>
        <div>
          <li className="text-white group border-2 px-6 py-3 my-2 w-[160px] h-[35px] flex items-center text-center hover:bg-[#d9b326]">
            <Link to="work" smooth={true} duration={500}>
              PORTFOLIO
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <BiRightArrowCircle className="ml-3" />
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
