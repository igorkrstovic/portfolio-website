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
        <Swiper navigation={true} modules={[Navigation]} className="w-full">
          {/* CONTAINER */}
          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-5 ">
            <SwiperSlide className="text-center text-lg  ">
              <div
                style={{ backgroundImage: `url(${JAPAN})` }}
                className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-100% h-[50vm]"
              >
                1
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <GoMarkGithub />
                  </button>
                </a>
                <a href="/">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <ImYoutube2 />
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-xg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <GoMarkGithub />
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <ImYoutube2 />
                  </button>
                </a>
              </div>
              <div
                style={{ backgroundImage: `url(${JAPANWEB})` }}
                className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                2
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
              <div
                style={{ backgroundImage: `url(${JAPAN})` }}
                className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                3
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
              <div
                style={{ backgroundImage: `url(${JAPANWEB})` }}
                className="bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                4
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
