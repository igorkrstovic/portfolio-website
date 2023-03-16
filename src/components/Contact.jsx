import React from "react";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";

const Contact = () => {
  const handleCopyEmail = () => {
    const email = "igkrstovic@gmail.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8ee8743d-69cf-4da3-9e1e-d7edd58d3479"
        className="absolute flex flex-col max-w-[600px] w-full"
        target="_blank"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#d9b326] text-gray-300">
            {"<Contact>"}
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email at - {""}
            <span onClick={handleCopyEmail} style={{ cursor: "pointer" }}>
              igkrstovic@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-[ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#d9b326] hover:border-white px-4 py-3 my-8 mx-auto flex items-center font-bold"
        >
          LET'S codeNECT
        </button>
      </form>

      {/* HOME ICON */}
      <div className="mt-auto my-12 ">
        <li className="text-[#d9b326] hover:text-white mx-auto px-6 py-3 my-2 w-auto h-[35px] flex items-center text-center">
          <Link to="home" smooth={true} duration={500}>
            <AiOutlineHome size={30} />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Contact;
