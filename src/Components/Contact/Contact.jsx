import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactBtn from "../ui/ContactBtn";

const Contact = () => {
  return (
    <>
      <div className=" h-[70vh] mt-12">
        <ContactBtn />
        <div className="flex w-full h-[57%] max-w-6xl m-auto">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
