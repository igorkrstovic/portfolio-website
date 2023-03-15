import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import JAPAN from "../assets/japan.gif";
import JAPANWEB from "../assets/japanWeb.gif";
// import { GoMarkGithub, GoEye } from "react-icons/go";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black ">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#6eb5f1]">
            {"<Projects/>"}
          </p>
          <p className="py-6 text-black">Check out some of my recent work:</p>
        </div>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="w-full "
        >
          {/* CONTAINER */}
          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-5 ">
            {/* SLIDER no1 */}
            <SwiperSlide className="text-center text-lg ">
              <div
                style={{ backgroundImage: `url(${JAPAN})` }}
                className=" bg-cover bg-center shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div w-100% h-[50vm]"
              ></div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white border-2 border-black hover:bg-[#f1f1f1]  justify-center items-center text-black font-bold py-1 px-14 mx-2 ">
                    {/* <GoMarkGithub color="black" size="1.5rem" /> */}
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    {/* <GoEye color="black" size="1.5rem" /> */}
                    LIVE
                  </button>
                </a>
              </div>
            </SwiperSlide>

            {/* SLIDER no2 */}

            <SwiperSlide className="text-center text-lg">
              <div
                style={{ backgroundImage: `url(${JAPANWEB})` }}
                className=" bg-cover bg-center  group container rounded-md flex justify-center items-center mx-auto  content-div w-100% h-[50vm]"
              ></div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white border-2 border-black hover:bg-[#f1f1f1]  justify-center items-center text-black font-bold py-1 px-14 mx-2 ">
                    {/* <GoMarkGithub color="black" size="1.5rem" /> */}
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    {/* <GoEye color="black" size="1.5rem" /> */}
                    LIVE
                  </button>
                </a>
              </div>
            </SwiperSlide>

            {/* SLIDER no3 */}

            <SwiperSlide className="text-center text-lg">
              <div
                style={{ backgroundImage: `url(${JAPAN})` }}
                className=" bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-100% h-[50vm]"
              ></div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white border-2 border-black hover:bg-[#f1f1f1]  justify-center items-center text-black font-bold py-1 px-14 mx-2 ">
                    {/* <GoMarkGithub color="black" size="1.5rem" /> */}
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    {/* <GoEye color="black" size="1.5rem" /> */}
                    LIVE
                  </button>
                </a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
