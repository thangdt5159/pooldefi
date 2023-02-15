import React, { useState } from "react";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Footer = () => {
  const [isHover, setIsHover] = useState(false);

  const data = [
    {
      id: 1,
      title:
        "Unstaking tax is dynamic the longer you have your tokens staked.  The longer you stake your tokens, the less tax you will pay.",
      value: "Unstaking Taxes",
    },
    {
      id: 2,
      title:
        "Staking the $climb token for longer periods of time will lower the tax you pay when unstaking your tokens. If you unstake any amount of your staked $climb tokens your tax resets to the highest level of 10%.",
      value: "Dynamic Unstake tax",
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-[#000dff] max-w-[96%] mr-auto ml-0 py-[54px] relative">
      <div className="text-center text-[#27cb8b] text-[150px] mx-auto flex justify-center py-7">
        <RiDoubleQuotesR />
      </div>
      <div
        className="text-white text-center w-[80%] py-[50px] mx-auto footer-slider"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="text-[30px] font-light mb-3">
                <i>{item.title}</i>
              </h3>
              <div className="font-semibold">{item.value}</div>
            </div>
          ))}
        </Slider>

        <div
          className={`absolute text-[50px] transition-all duration-300 top-1/3 cursor-pointer ${
            isHover ? "opacity-100 left-6" : "opacity-0 left-0"
          }`}
          onClick={}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className={`absolute text-[50px] transition-all duration-300 top-1/3 cursor-pointer ${
            isHover ? "opacity-100 right-6" : "opacity-0 right-0"
          }`}
          onClick={}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="text-[21vw] font-extrabold text-right mt-[130px] mb-[-3.5vw] leading-[0.8em]">
        Summit
      </div>
    </div>
  );
};

export default Footer;
