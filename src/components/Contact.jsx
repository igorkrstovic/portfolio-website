import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8ee8743d-69cf-4da3-9e1e-d7edd58d3479"
        className="flex flex-col max-w-[600px] w-full"
        target="_blank"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FBB574] text-gray-300">
            {"<Contact>"}
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email at - igkrstovic@gmail.com
          </p>
        </div>
        <input
          className="bg-[ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#d9b326] hover:border-white px-4 py-3 my-8 mx-auto flex items-center font-bold"
        >
          LET'S COdENECT
        </button>
      </form>
    </div>
  );
};

export default Contact;
