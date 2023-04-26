import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" my-8">
        <h1 className=" font-bold text-2xl">Have A Question?</h1>
      </div>
      <div className=" font-semibold mb-8">
        Contact me and I'll be happy to assist!
      </div>
      <br />
      <div className=" px-10 py-16 bg-rose-100 rounded-lg border-4">
        <label className=" font-semibold">Email: </label>
        <span className="">annachong.property@gmail.com</span>
        <div className=" my-6"></div>
        <label className=" font-semibold">Mobile: </label>
        <span>88668899</span>
      </div>
    </div>
  );
};

export default ContactPage;
