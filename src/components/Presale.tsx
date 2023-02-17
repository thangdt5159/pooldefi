import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Presale = () => {
  const data = [
    {
      id: 1,
      title: "PRESALE 1",
      content:
        "The first presale will be open to Whitelist users only and will be hosted on Pinksale. The total raise will be 150 BNB.",
    },
    {
      id: 2,
      title: "PRESALE 2",
      content:
        "The second presale will take place 2-3 weeks after the first Presale raise completes, also on Pinksale.",
    },
    {
      id: 3,
      title: "PUBLIC LAUNCH",
      content:
        "The public launch of Ascend Finance will happen within 48 hours after 2nd Presale. The $climb token can be purchased on Pancakeswap.finance.",
    },
  ];

  const [imageInView, setImageInView] = useState<boolean>();
  const [btnInView, setBtnTitleInView] = useState<boolean>();
  const imageRef = useRef<any>(null);
  const btnRef = useRef<any>(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries) => {
      const imageEntry = entries[0];
      if (imageEntry.isIntersecting) {
        setImageInView(imageEntry.isIntersecting);
      }
    });
    const btnObserver = new IntersectionObserver((entries) => {
      const btnEntry = entries[0];
      if (btnEntry.isIntersecting) {
        setBtnTitleInView(btnEntry.isIntersecting);
      }
    });

    imageObserver.observe(imageRef.current);
    btnObserver.observe(btnRef.current);

    return () => {
      imageObserver.unobserve(imageRef.current);
      btnObserver.unobserve(btnRef.current);
    };
  }, []);

  return (
    <div className="w-[80%] md:max-w-[1080px] mx-auto md:flex text-[#333] md:py-[100px]">
      <Image
        src="/images/presaleImg.jpg"
        alt=""
        width={1000}
        height={1000}
        className={`md:w-1/2 pr-[5.5%] py-[4%] object-cover transition-all duration-1000 ${
          imageInView
            ? "translate-x-[0px] opacity-100"
            : "-translate-x-[100px] opacity-0"
        }`}
        ref={imageRef}
      />
      <div className="md:w-1/2">
        <div className="text-[36px] md:text-[56px] font-bold relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 md:mb-12 mb-16">
          Presale and Public Launch
        </div>
        {data.map((item) => (
          <div key={item.id} className="mb-[30px] md:mb-[20px] mt-[10px]">
            <h3 className="text-[22px] font-bold mb-[10px]">{item.title}</h3>
            <p className="text-[#666] tracking-wide md:tracking-normal leading-[26px] md:leading-normal">
              {item.content}
            </p>
          </div>
        ))}
        <div
          className={`mt-[-10px] mb-[44px] md:my-0 transition-all duration-1000 ${
            btnInView
              ? "translate-y-0 opacity-100"
              : "-translate-y-[50px] opacity-0"
          }`}
          ref={btnRef}
        >
          <button className="uppercase text-white bg-[#29cb8b] tracking-[2px] w-[206px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[215px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4 mt-5">
            view all details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presale;
