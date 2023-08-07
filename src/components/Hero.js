import React from "react";

// import woman image
import WomanImg from "../assets/img/final.png";

const Hero = () => {

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      
    >

      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px] mt-5">
              Hey, I'm Md Rakibul Islam!! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I am Software <br /> Enginner
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              A self-driven attitude, willingness to learn and a strong presence
              of mind. Energetic, devoted, sincere and hard-working.
            </p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
              <a href="https://www.linkedin.com/in/rakibul-islam-69a932173/">
                {" "}
                Work with me
              </a>
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
