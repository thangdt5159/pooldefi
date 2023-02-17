import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { aboutUsData } from "./constant";

const Section2 = () => {
  const [isInView, setIsInView] = useState<boolean>();
  const section2Ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(entry.isIntersecting);
      }
    });
    observer.observe(section2Ref.current);
    return () => observer.unobserve(section2Ref.current);
  }, []);

  return (
    <div className="bg-white text-black py-[44px] md:py-[150px] relative">
      <div className="md:flex items-start w-[80%] md:max-w-[1080px] mx-auto relative">
        <div
          className={`md:w-1/2 transition-all duration-[1.5s] ${
            isInView
              ? "translate-x-0 opacity-100"
              : "translate-x-[100px] opacity-0"
          }`}
          ref={section2Ref}
        >
          <Image
            src="/images/aboutUsImg.jpg"
            alt=""
            width={500}
            height={500}
            className="object-contain w-full md:w-[500px] h-full md:ml-[-150px] bg-transparent mb-[30px] md:mb-0"
          />
        </div>
        <div className="text-[#333] md:w-2/3 md:ml-[-150px]">
          <div className="text-[36px] md:text-[56px] font-bold relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 mb-12">
            What We Do
          </div>
          <div className="md:grid grid-cols-2 gap-14 py-7 relative">
            {aboutUsData.map((item) => (
              <div key={item.id} className="mb-[30px] md:mb-0">
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
