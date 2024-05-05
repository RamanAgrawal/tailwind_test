import Image from "next/image";
import React, { FC } from "react";
type Props = {
  className?: string;
};
const DropDown4: FC<Props> = ({ className }) => {
  return (
    <ul
      className={`absolute h-[40vh] w-[12vw] left-0 pt-10 transition-all duration-150 hidden group-hover:block ${className}`}
    >
      <div className="container bg-white h-full rounded-lg p-4">
        {Array.from({ length: 5 }).map(() => (
          <div className="text-gray-700 mb-5">Blog without sidebar</div>
        ))}
      </div>
    </ul>
  );
};

export default DropDown4;
