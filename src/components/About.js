import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="nav-height mt-40md:mb-96">
      <div className="container p-8 mx-auto xl:px-0">
        <div className="flex flex-wrap mt-24 lg:gap-10 lg:flex-nowrap ">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div>
              <Image
                src="/images/undraw_about.svg"
                width={1221}
                height={1221}
                alt="about"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
            <div>
              <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight lg:text-4xl">
                  About Us
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-black lg:text-xl xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>

              {["Lorem Ipsum", "dolor sit amet", "consectetur adipiscing"].map(
                (item, i) => (
                  <div key={i} className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-sky-500 rounded-md w-11 h-11 "></div>
                    <div>
                      <h4 className="text-xl font-medium text-black">{item}</h4>
                      <p className="text-black">dolor</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
