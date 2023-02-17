import React from "react";
import Footer from "./Footer";
import Presale from "./Presale";
import Section2 from "./Section2";
import Section3 from "./section3/Section3";

const Landing = () => {
  return (
    <section className="wrapper w-full h-screen text-white">
      <div className="landing-header relative md:h-full h-[75%] mt-[-165px] md:mt-0">
        <div className="background-image absolute w-full h-[85%] md:h-full bg-landingBg bg-no-repeat bg-cover bg-center md:bg-right-top object-cover z-[-1]">
          <div className="pt-[10vw] h-full"></div>
        </div>
      </div>
      <div className="landing-des w-[80%] md:max-w-[1080px] mx-auto absolute top-[8%] md:top-1/4 left-0 right-0">
        <h2 className="text-[18px] uppercase font-semibold mb-[10px] tracking-[4px] leading-[36px]">
          The Easiest Way for sustainable rewards
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold leading-[1.4em]">
          Ascend Finance
        </h1>
        <div className="md:flex items-center gap-4 mt-5">
          <button className="uppercase bg-[#29cb8b] tracking-[2px] w-[175px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[185px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4">
            join discord
          </button>
          <button className="uppercase bg-white text-[#29cb8b] tracking-[2px] w-[210px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[220px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4 mt-5 md:mt-0">
            view whitepaper
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="landing-title absolute top-[44%] left-0 md:bottom-[-250px] text-[27vw] font-bold z-[-1] tracking-[2px] select-none"
      >
        Climb
      </div>
      <Section2 />
      <Section3 />
      <Presale />
      <Footer />
    </section>
  );
};

export default Landing;
