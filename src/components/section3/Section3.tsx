import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { tokenData } from "../constant";
import Sub from "./Sub";

const Section3 = () => {
  const [titleInView, setTitleInView] = useState<boolean>();
  const [btmInView, setBtmTitleInView] = useState<boolean>();
  const titleRef = useRef<any>(null);
  const btmRef = useRef<any>(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver((entries) => {
      const titleEntry = entries[0];
      if (titleEntry.isIntersecting) {
        setTitleInView(titleEntry.isIntersecting);
      }
    });
    const btmObserver = new IntersectionObserver((entries) => {
      const btmEntry = entries[0];
      if (btmEntry.isIntersecting) {
        setBtmTitleInView(btmEntry.isIntersecting);
      }
    });

    titleObserver.observe(titleRef.current);
    btmObserver.observe(btmRef.current);
    return () => {
      titleObserver.unobserve(titleRef.current);
      btmObserver.unobserve(btmRef.current);
    };
  }, []);

  return (
    <section className="pt-[8vw] mb-[100px] max-w-[96%] text-[#333] mr-0 ml-auto transition-all duration-[5s] bg-[#edf1f4]">
      <div className="w-[80%] max-w-[1080px] mx-auto py-7 md:flex justify-between">
        <div
          className={`transition-all duration-1000  ${
            titleInView
              ? "translate-x-[0px] opacity-100"
              : "opacity-0 translate-x-[50px]"
          }`}
        >
          <div
            className="relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 md:mb-12 mb-16"
            ref={titleRef}
          >
            <h2 className="text-[36px] md:text-[56px] font-bold">Tokenomics</h2>
          </div>
          <ul className="list-disc px-7 text-[#666] mb-[50px]">
            {tokenData.map((item) => (
              <li
                key={item.id}
                className="font-medium leading-[26px] md:leading-normal"
              >
                {item.value}
              </li>
            ))}
          </ul>
          <div
            className={`transition-all duration-1000 ${
              titleInView
                ? "translate-x-[0px] opacity-100"
                : "opacity-0 -translate-y-[50px]"
            }`}
          >
            <button className="uppercase bg-[#29cb8b] text-white tracking-[2px] w-[210px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[220px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4">
              view whitepaper
            </button>
          </div>
        </div>
        <div
          className={`mt-[30px] w-[450px] h-[270px] bg-blue-500 transition-all duration-1000 ${
            titleInView ? "rotate-0 opacity-100" : "opacity-0 rotate-45"
          }`}
        ></div>
        {/* <Image
          src="/images/climb-token.png"
          alt=""
          width={500}
          height={600}
          className={`mt-[30px] md:mt-0 mr-[-130px] md:w-[450px] md:h-[270px] transition-all duration-1000 ${
            titleInView ? "rotate-0 opacity-100" : "opacity-0 rotate-45"
          }`}
        /> */}
      </div>
      <Sub />
      <div
        className={`mt-[5%] text-white text-[22vw] font-extrabold leading-[0.6em] mb-[-5.5vw] select-none transition-all duration-[1.5s] ${
          btmInView ? "translate-y-0 opacity-100" : " translate-y-[50px]"
        }`}
        ref={btmRef}
      >
        Ascent
      </div>
    </section>
  );
};

export default Section3;
