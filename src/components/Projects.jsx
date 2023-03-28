import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import AXIOS from "../assets/Axios.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Twitch from "../assets/Twitch.png";
import Unsplash from "../assets/Unsplash.png";
import NotiMe from "../assets/NotiMe.gif";
import FireBase from "../assets/firebase.png";

import JAPAN1 from "../assets/japan1.gif";
import JAPANWEB from "../assets/japanWeb.gif";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black ">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#6eb5f1]">
            {"<Projects/>"}
          </p>
          <p className="py-6 text-black">Some of my recent work:</p>
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
              <div className=" sm:grid-cols-3 md:grid-cols-3 gap-9 mb-5  justify-center items-center flex ">
                <img className="w-11" src={HTML} alt="HTML icon" />
                <img className="w-11" src={JavaScript} alt="HTML icon" />
                <img className="w-11" src={ReactImg} alt="HTML icon" />
                <img className="w-11" src={Tailwind} alt="HTML icon" />
                <img className="w-11" src={Unsplash} alt="Unsplash icon" />
              </div>

              <div
                style={{ backgroundImage: `url(${JAPAN1})` }}
                className=" bg-cover bg-center group container flex justify-center items-center mx-auto content-div w-100% h-[50vm]"
              ></div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white border-2 border-black hover:bg-[#f1f1f1]  justify-center items-center text-black font-bold py-1 px-14 mx-2 ">
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    ABOUT
                  </button>
                </a>
              </div>
            </SwiperSlide>

            {/* SLIDER no2 */}

            <SwiperSlide className="text-center text-lg">
              <div className=" sm:grid-cols-3 md:grid-cols-3 gap-9 mb-5  justify-center items-center flex ">
                <img className="w-11" src={JavaScript} alt="JavaScript icon" />
                <img className="w-11" src={ReactImg} alt="React icon" />
                <img className="w-11" src={CSS} alt="CSS icon" />
                <img className="w-11" src={AXIOS} alt="Axios icon" />
                <img className="w-11" src={Unsplash} alt="Unsplash icon" />
              </div>

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
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    ABOUT
                  </button>
                </a>
              </div>
            </SwiperSlide>

            {/* SLIDER no3 */}

            <SwiperSlide className="text-center text-lg">
              <div className=" sm:grid-cols-3 md:grid-cols-3 gap-8 mb-5  justify-center items-center flex ">
                <img className="w-11" src={JavaScript} alt="JavaScript icon" />
                <img className="w-11" src={ReactImg} alt="React icon" />
                <img className="w-11" src={CSS} alt="CSS icon" />
                <img className="w-11" src={AXIOS} alt="HTML icon" />
                <img className="w-11" src={FireBase} alt="Firebase icon" />
                <img className="w-11" src={Twitch} alt="Twitch icon" />
              </div>
              <div
                style={{ backgroundImage: `url(${NotiMe})` }}
                className=" bg-cover bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div3 w-100% h-[50vm]"
              ></div>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/igorkrstovic/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white border-2 border-black hover:bg-[#f1f1f1]  justify-center items-center text-black font-bold py-1 px-14 mx-2 ">
                    GITHUB
                  </button>
                </a>
                <a href="/">
                  <button className="bg-white border-2 border-black hover:bg-[#f8f8f8]  justify-center items-center text-black font-bold py-1 px-16 mx-2">
                    ABOUT
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
