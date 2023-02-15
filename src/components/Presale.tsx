import Image from "next/image";
import React from "react";

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

  return (
    <div className="w-[80%] max-w-[1080px] mx-auto flex text-[#333] py-[100px]">
      <Image
        src="/images/presaleImg.jpg"
        alt=""
        width={1000}
        height={1000}
        className="w-1/2 pr-[5.5%] py-[4%] object-cover"
      />
      <div className="w-1/2">
        <div className="text-[56px] font-bold relative after:absolute after:bg-[#29cb8b] after:w-[50px] after:h-[3px] after:-bottom-5 after:left-0 mb-12">
          Presale and Public Launch
        </div>
        {data.map((item) => (
          <div key={item.id} className="mb-[20px] mt-[10px]">
            <h3 className="text-[22px] font-bold mb-[10px]">{item.title}</h3>
            <p className="text-[#666]">{item.content}</p>
          </div>
        ))}
        <button className="uppercase text-white bg-[#29cb8b] tracking-[2px] w-[206px] h-[56px] font-semibold rounded-[4px] py-4 px-5 transition-all duration-400 text-start relative after:absolute after:content-['->'] after:ml-2 after:opacity-0 hover:after:opacity-100 hover:w-[215px] after:transition-all hover:tracking-[1px] after:duration-500 after:right-6 hover:after:right-4 mt-5">
          view all details
        </button>
      </div>
    </div>
  );
};

export default Presale;
