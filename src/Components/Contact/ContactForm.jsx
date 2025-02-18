import React from "react";

const ContactForm = () => {
  return (
    <form className="w-[50%] h-full max-w-md mx-auto flex flex-col gap-6 p-4">
      <label htmlFor="name" className="flex flex-col text-sm font-medium">
        Name
        <input
          id="name"
          type="text"
          className="mt-1 p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="email" className="flex flex-col text-sm font-medium">
        Email
        <input
          id="email"
          type="email"
          className="mt-1 p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="message" className="flex flex-col text-sm font-medium">
        Message
        <textarea
          id="message"
          className="mt-1 p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </label>

      <button className="mt-4 w-[40%] m-auto font-semibold py-2 px-4 cursor-pointer rounded-full border bg-gray-800 border-gray-700 ">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
