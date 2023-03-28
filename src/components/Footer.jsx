import React from "react";
import PDF from "../assets/ik.pdf";
import { FiDownloadCloud } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[50px]  justify-between items-center px-4 bg-[#000000] text-[#d9b326] ">
      <ul className="md:hidden z-10 flex font-bold justify-center ">
        <li className="hover:text-white duration-300">
          <a
            className="flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/igor-krstovic/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="hover:text-white duration-300">
          <a
            className="flex justify-between items-center w-full"
            href="https://github.com/igorkrstovic"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="hover:text-white duration-300">
          <a
            className="flex justify-between items-center w-full"
            href={PDF}
            target="_blank"
            rel="noreferrer"
          >
            <FiDownloadCloud size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
