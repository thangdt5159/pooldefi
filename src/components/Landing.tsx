import React from "react";
import Footer from "./Footer";
import Presale from "./Presale";
import Section2 from "./Section2";
import Section3 from "./section3/Section3";

const Landing = () => {
  return (
    <section className="wrapper w-full h-screen text-white">
      <div className="landing-header relative h-full">
        <div className="background-image absolute w-full h-full bg-landingBg bg-no-repeat bg-cover bg-right-top object-cover z-[-1]">
          <div className="pt-[10vw] h-full"></div>
        </div>
      </div>
      <div className="landing-des md:max-w-[1080px] mx-auto absolute top-1/4 left-0 right-0">
        <h2 className="text-[18px] uppercase font-semibold mb-[10px] tracking-[4px]">
          The Easiest Way for sustainable rewards
        </h2>
        <h1 className="text-7xl font-bold leading-[1.4em]">Ascend Finance</h1>
        <div className="flex items-center gap-4 mt-5">
          <button className="uppercase bg-[#29cb8b] tracking-[2px] w-[175px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[185px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4">
            join discord
          </button>
          <button className="uppercase bg-white text-[#29cb8b] tracking-[2px] w-[210px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[220px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4">
            view whitepaper
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="landing-title absolute bottom-[-250px] text-[27vw] font-bold z-[-1] tracking-[2px]"
      >
        Climb
      </div>
      {/* <div className="w-full h-[250px] bg-white"></div> */}
      <Section2 />
      <Section3 />
      <Presale />
      <Footer />
    </section>
  );
};

export default Landing;
