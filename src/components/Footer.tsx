import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Footer = () => {
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
        "Staking the $PD token for longer periods of time will lower the tax you pay when unstaking your tokens. If you unstake any amount of your staked $PD tokens your tax resets to the highest level of 10%.",
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

  const [isHover, setIsHover] = useState(false);
  const [contentInView, setContentInView] = useState<boolean>();
  const [titleInView, setTitleInView] = useState<boolean>();
  const [btmInView, setBtmTitleInView] = useState<boolean>();
  const titleRef = useRef<any>(null);
  const btmRef = useRef<any>(null);
  const sliderRef = useRef<any>(null);
  const contentRef = useRef<any>(null);
  // const isMobile = window.innerWidth;

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

    const contentObserver = new IntersectionObserver((entries) => {
      const contentEntry = entries[0];
      if (contentEntry.isIntersecting) {
        setContentInView(contentEntry.isIntersecting);
      }
    });

    titleObserver.observe(titleRef.current);
    btmObserver.observe(btmRef.current);
    contentObserver.observe(contentRef.current);

    return () => {
      titleObserver.unobserve(titleRef.current);
      btmObserver.unobserve(btmRef.current);
      contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="bg-[#000dff] max-w-[96%] h-[96%] md:h-auto mr-auto ml-0 pt-[54px] mb-[100px] md:mb-0 md:py-[54px] relative">
      <div
        className={`text-center text-[#27cb8b] text-[150px] mx-auto flex justify-center py-7 transition-all duration-500 ${
          titleInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-[30px]"
        }`}
        ref={titleRef}
      >
        <RiDoubleQuotesR />
      </div>
      <div
        className="text-white text-center w-[80%] pb-[50px] md:py-[50px] mx-auto footer-slider"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Slider {...settings} ref={sliderRef}>
          {data.map((item) => (
            <div
              key={item.id}
              ref={contentRef}
              className={`transition-all duration-[1.5s] delay-500 ${
                contentInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[100px]"
              }`}
            >
              <h3 className="w-[85%] mx-auto md:w-full text-[24px] md:text-[30px] md:font-light mb-3">
                <i>{item.title}</i>
              </h3>
              <div className="font-semibold">{item.value}</div>
            </div>
          ))}
        </Slider>

        <div
          className={`absolute text-[50px] transition-all duration-300 top-1/2 md:top-1/3 cursor-pointer ${
            isHover ? "opacity-100 left-6" : "opacity-0 left-0"
          }`}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className={`absolute text-[50px] transition-all duration-300 top-1/2 md:top-1/3 cursor-pointer ${
            isHover ? "opacity-100 right-6" : "opacity-0 right-0"
          }`}
          onClick={() => sliderRef.current.slickNext()}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div
        className={`text-[21vw] font-bold md:font-extrabold text-right mt-[80px] md:mt-[130px] md:mb-[-3.5vw] md:leading-[0.8em] select-none transition-all duration-[1.5s] ${
          btmInView ? "translate-y-0 opacity-100" : " translate-y-[50px]"
        }`}
        ref={btmRef}
      >
        Summit
      </div>
    </div>
  );
};

export default Footer;
