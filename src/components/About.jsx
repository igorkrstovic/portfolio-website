import React from "react";
import { MdLiveTv } from "react-icons/md";
import Igor from "../assets/prof.JPG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen sm:h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-2 border-[#6eb5f1]">
              {"<AboutMe/>"}
            </p>
          </div>
          <div></div>
          <div>
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="lg:w-2/4 my-2">
                <p>
                  I am a Front-End developer based in Toronto, Canada. I've been
                  passionate about computers since my first encounter with the
                  ZX Spectrum 128, and good old Basic at an early age. Currently
                  my focus is on building responsive web and mobile applications
                  using current and most widely used programming languages.
                </p>
                <br />
                <p>
                  I strive to write clean code using ReactJS, JavaScript, HTML5,
                  CSS3, and TailWindCSS. Additionally, I also build projects
                  using Firebase and MongoDB databases. I'm constantly on the
                  lookout to learn new skills and expand my knowledge in web
                  development.
                </p>
                <br />
                <p>
                  Apart from coding, I have extensive experience building brands
                  in e-commerce, creating communities, and making viral content.
                  My experience in different fields provides me with a
                  well-rounded set of skills to better understand business needs
                  and how to sell products.
                </p>
                <br />
                <p>
                  Lastly, when I'm not coding, you can find me streaming Call of
                  Duty - Warzone.
                </p>
                <div className="pt-4">
                  <a
                    href="https://linktr.ee/barkingbob"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className=" sm:w-[100px]">
                      <MdLiveTv size={20} />
                    </button>
                  </a>
                </div>
              </div>

              <div className="lg:w-auto">
                <img
                  className="sm:w-[100px] md:w-[200px] lg:w-[350px] hidden sm:block"
                  src={Igor}
                  alt="JavaScript icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
