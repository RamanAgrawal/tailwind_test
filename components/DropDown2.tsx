import Image from "next/image";
import React, { FC } from "react";
type Props = {
  className?: string;
};
const DropDown2: FC<Props> = ({ className }) => {
  return (
    <ul className={`absolute h-[40vh] w-[15vw] left-0 pt-10 transition-all duration-150 hidden group-hover:block ${className}`}>
      <div className="container bg-gray-600 h-full rounded-lg"></div>
    </ul>
  );
};

export default DropDown2;
