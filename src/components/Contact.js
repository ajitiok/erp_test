import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mt-40 mb-20 p-8 mx-auto xl:px-0 !p-0"
    >
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-sky-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit amet,
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-sky-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
