import React from "react";

const Blocks = ({ number, imageUrl, text, name }) => {
  return (
    <div
      className="w-72 flex flex-col justify-between h-full bg-cover bg-no-repeat bg-center p-4 mx-5 mt-10 rounded-tl-[20px] rounded-tr-[20px] shrink-0"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-10 h-10 rounded-full bg-amber-50 text-black text-2xl flex items-center justify-center">
        {number}
      </div>
      <div className="flex mb-9 flex-col items-center">
        <p className="text-amber-50 text-3xl backdrop-blur-xs bg-black/10 px-3 py-1 rounded-lg">{text}</p>
        <div className="w-full mt-4 flex justify-between items-center">
          <div className="w-max px-4 py-2 rounded-full bg-amber-50 text-black">
            {name}
          </div>
          <img
            className="w-10 h-10 invert brightness-0"
            src="/smallArrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
