import React, { useEffect, useRef, useState } from "react";

const Sub = () => {
  const [isInView, setIsInView] = useState<boolean>();
  const titleRef = useRef<any>(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver((entries) => {
      const titleEntry = entries[0];
      if (titleEntry.isIntersecting) {
        setIsInView(titleEntry.isIntersecting);
      }
    });

    titleObserver.observe(titleRef.current);
    return () => titleObserver.unobserve(titleRef.current);
  }, []);

  return (
    <section className="w-[80%] max-w-[1080px] mx-auto py-7">
      <div
        className={`relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 after:mx-auto after:right-0 mb-12 transition-all duration-1000 ${
          isInView
            ? "translate-x-[0px] opacity-100"
            : "opacity-0 translate-x-[50px]"
        }`}
        ref={titleRef}
      >
        <h2 className="text-[36px] md:text-[56px] font-bold text-center">
          Taxes
        </h2>
      </div>
      <div className="md:flex justify-between text-center py-7">
        <div className="md:w-1/2">
          <h3 className="text-[26px] font-bold mb-[10px]">Buy Tax- 3%</h3>
          <p className="text-[#666] text-xl font-semibold mb-1">Lottery – 1%</p>
          <p className="text-[#666] text-xl font-semibold mb-1">
            Treasury – 1%
          </p>
          <p className="text-[#666] text-xl font-semibold mb-1">Liquidity 1%</p>
        </div>
        <div className="md:w-1/2 mt-[30px] md:mt-0">
          <h3 className="text-[26px] font-bold mb-[10px]">Sell Tax- 7%</h3>
          <p className="text-[#666] text-xl font-semibold mb-1">Lottery – 3%</p>
          <p className="text-[#666] text-xl font-semibold mb-1">
            Treasury – 1%
          </p>
          <p className="text-[#666] text-xl font-semibold mb-1">Liquidity 3%</p>
        </div>
      </div>
    </section>
  );
};

export default Sub;
