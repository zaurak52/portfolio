/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = (props: { src: string }) => {
  return (
    <div className="relative w-full h-40 mb-8">
      <img
        alt="icon"
        className=""
        src={props.src}
        style={{
          objectFit: "contain",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-2xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Portfolio</h1>
        <p className="mt-2 text-2xl font-medium">上樂大治朗</p>
        <p>芝浦工業大学　情報工学科4年　実世界インタラクション研究室</p>
      </div>
    </div>
  );
};

export default Header;
