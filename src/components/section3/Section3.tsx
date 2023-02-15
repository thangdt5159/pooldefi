import Image from "next/image";
import React from "react";
import { tokenData } from "../constant";
import Sub from "./Sub";

const Section3 = () => {
  return (
    <section className="pt-[8vw] mb-[100px] max-w-[96%] bg-[#edf1f4] text-[#333] mr-0 ml-auto">
      <div className="w-[80%] max-w-[1080px] mx-auto py-7 flex justify-between">
        <div>
          <div className="relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 mb-12">
            <h2 className="text-[56px] font-bold">Tokenomics</h2>
          </div>
          <ul className="list-disc px-7 text-[#666] mb-[50px]">
            {tokenData.map((item) => (
              <li className="font-medium">{item.value}</li>
            ))}
          </ul>
          <button className="uppercase bg-[#29cb8b] text-white tracking-[2px] w-[210px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[220px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4">
            view whitepaper
          </button>
        </div>
        <Image
          src="/images/climb-token.png"
          alt=""
          width={500}
          height={600}
          className="mr-[-130px] md:w-[450px] md:h-[270px]"
        />
      </div>
      <Sub />
      <div className="mt-[5%] text-white text-[22vw] font-extrabold leading-[0.6em] mb-[-5.5vw]">
        Ascent
      </div>
    </section>
  );
};

export default Section3;
