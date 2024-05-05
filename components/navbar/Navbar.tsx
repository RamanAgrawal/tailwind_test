import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import DropDown from "../DropDown";
import { FaFileArrowDown } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown2 from "../DropDown2";

const Navbar = () => {
  const demos = [
    {
      imgSrc: "/demos/1.jpg",
      imgSrcset: "/demos/1.jpg 1x",
    },
  ];
  return (
    <nav className="h-24 fixed w-full z-50 flexCenter  bg-[#3b2e74]">
      <div className="container flexBetween">
        <div className="relative h-10 w-40">
          <Image src="/logo-light@2x.png" alt="logo" fill />
        </div>
        <div className="flexBetween gap-10">
          <ul className="flexBetween gap-10 font-bold text-white">
            <li className=" group hover:text-gray-500 transition-all duration-150">
              <Link href="#" className="flexCenter">
                Demos
                <MdKeyboardArrowDown size={20} />
              </Link>

              <DropDown
                img="/navimage1.jpg"
                className=""
              />
            </li>
            <li className=" group hover:text-gray-500 transition-all duration-150 relative">
              <Link href="#" className="flexCenter">
                Pages
                <MdKeyboardArrowDown size={20} />
              </Link>

              <DropDown2 className=""/>
            </li>
            <li className="relative">
              <Link href="#">Projects</Link>
            </li>
            <li className="relative">
              <Link href="#">Blogs</Link>
            </li>
            <li className=" group hover:text-gray-500 transition-all duration-150">
              <Link href="#" className="flexCenter">
                Blocks
                <MdKeyboardArrowDown size={20} />
              </Link>

              <DropDown
                img="https://sandbox-tailwindcss.ibthemespro.com/assets/img/demos/block1.svg"
                className="transition-all duration-150 hidden group-hover:block"
              />
            </li>
            <li className="relative">
              <Link href="#">Documentation</Link>
            </li>
          </ul>
          <Button title="Free Trial" />
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
