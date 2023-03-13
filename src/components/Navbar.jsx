import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import PDF from "../assets/ik.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#000000] text-[#d9b326]">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>

      {/* MENU */}

      <ul className="hidden md:flex font-bold">
        <li className="hover:text-white duration-300">
          <Link to="home" smooth={true} duration={500}>
            {"<HOME>"}
          </Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="about" smooth={true} duration={500}>
            {"<ABOUT>"}
          </Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="skills" smooth={true} duration={500}>
            {"<SKILLS>"}
          </Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="work" smooth={true} duration={500}>
            {"<WORK>"}
          </Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="contact" smooth={true} duration={500}>
            {"<CONTACT>"}
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center font-bold"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}

      <div className=" flex fixed flex-col top-[35%] left-0 font-bold">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href="https://www.linkedin.com/in/igor-krstovic/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href="https://github.com/igorkrstovic"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href={PDF}
              download="Igor Krstovic Resume 2023.pdf"
            >
              Resume <FiDownloadCloud size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
