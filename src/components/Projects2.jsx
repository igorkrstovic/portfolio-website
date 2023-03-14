import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import JAPAN from "../assets/japan.gif";
import JAPANWEB from "../assets/japanWeb.gif";
import { GoMarkGithub } from "react-icons/go";
import { ImYoutube2 } from "react-icons/im";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black ">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#6eb5f1]">
            Work
          </p>
          <p className="py-6 text-black">Check out some of my recent work:</p>
        </div>
        {/* CONTAINER */}

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-5 ">
          <div
            style={{ backgroundImage: `url(${JAPAN})` }}
            className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cherry Blossom App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <GoMarkGithub />
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <ImYoutube2 />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Swiper>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${JAPAN})` }}
                className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* HOVER EFFECTS */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Cherry Blossom App
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href="https://github.com/igorkrstovic?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <GoMarkGithub />
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <ImYoutube2 />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${JAPANWEB})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* HOVER EFFECTS */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Cherry Blossom App
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <GoMarkGithub />
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <ImYoutube2 />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
