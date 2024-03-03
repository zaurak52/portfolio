import React from "react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="p-10 text-5xl font-bold text-center"> {title} </h1>
    </div>
  );
};

export default Header;
