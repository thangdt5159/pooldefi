import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { aboutUsData } from "./constant";

const Section2 = () => {
  return (
    <div className="bg-white text-black py-[150px] relative">
      <div className="flex items-start w-[80%] max-w-[1080px] mx-auto relative">
        <div className="w-1/2">
          <Image
            src="/images/aboutUsImg.jpg"
            alt=""
            width={500}
            height={500}
            className="object-contain w-[500px] h-full ml-[-150px] bg-transparent"
          />
        </div>
        <div className="text-[#333] w-2/3 ml-[-150px]">
          <div className="text-[56px] font-bold relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 mb-12">
            What We Do
          </div>
          <div className="grid grid-cols-2 gap-14 py-7">
            {aboutUsData.map((item) => (
              <div key={item.id}>
                <h3 className="text-xl font-bold mb-[10px]">{item.title}</h3>
                <p className="text-[#666] font-medium leading-[1.8em]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
