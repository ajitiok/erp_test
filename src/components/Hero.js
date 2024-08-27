import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  useGSAP(() => {
    gsap.to(".hero-heading", {
      opacity: 1,
      y: 0,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <div id="hero" className="nav-height">
      <div className="container p-8  mx-auto xl:px-0 flex flex-wrap">
        <Image
          src="/images/blob_up.svg"
          width="416"
          height="217"
          className="absolute -top-52 -left-20 -z-50"
          alt="Hero Illustration"
          loading="eager"
        />
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src="/images/undraw_hero.svg"
            width="816"
            height="717"
            alt="Hero Illustration"
            loading="eager"
          />
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div  className="max-w-2xl mb-8">
            <h1 className="hero-heading text-4xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Landing Page ERP
            </h1>
            <p className="hero-heading py-5 text-xl leading-normal text-black text-justify	 lg:text-xl xl:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/wave_down.svg"
        width="1416"
        height="617"
        className="hidden absolute bottom-0 lg:block w-full -z-50"
        alt="Hero Illustration"
        loading="eager"
      />
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <p className="hero-heading hidden sm:block py-5 text-xl italic leading-normal text-black lg:text-xl xl:text-2xl">
              &quot;Excepteur sint occaecat cupidatat non proident&quot;
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default Hero;
