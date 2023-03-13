import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f ] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6eb5f1]">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi! I'm Igor, nice to meet you.</p>
            </div>
            <div>
              <p>
                I'm passionate about building excelent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to the large enterprise corporations. What would you do
                if you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
