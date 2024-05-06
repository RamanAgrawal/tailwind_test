"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";
import DropDown from "../DropDown";
import { FaFileArrowDown, FaInstagram } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdCropSquare } from "react-icons/md";
import DropDown2 from "../DropDown2";
import DropDown3 from "../DropDown3";
import DropDown4 from "../DropDown4";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [active, setactive] = useState<boolean>(false);
  const demos = [
    {
      imgSrc: "/demos/1.jpg",
      imgSrcset: "/demos/1.jpg 1x",
    },
  ];
  return (
    <>
      <nav className="h-24 fixed w-full z-50 lg:flexCenter  bg-[#3b2e74] hidden ">
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

                <DropDown img="/navimage1.jpg" className="" />
              </li>
              <li className=" group hover:text-gray-500 transition-all duration-150 relative">
                <Link href="#" className="flexCenter">
                  Pages
                  <MdKeyboardArrowDown size={20} />
                </Link>

                <DropDown2 className="" />
              </li>
              <li className=" group hover:text-gray-500 transition-all duration-150 relative">
                <Link href="#" className="flexCenter">
                  Projects
                  <MdKeyboardArrowDown size={20} />
                </Link>

                <DropDown3 className="" />
              </li>
              <li className=" group hover:text-gray-500 transition-all duration-150 relative">
                <Link href="#" className="flexCenter">
                  Blogs
                  <MdKeyboardArrowDown size={20} />
                </Link>

                <DropDown4 className="" />
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
      <header className={`lg:hidden fixed h-16 flexBetween p-6 w-full z-50 `}>
        <div className="relative h-8 w-1/3 mt-5 ">
          <Image src="/logo-light.png" fill alt="logo" />
        </div>
        <div className="text-3xl h-full p-5" onClick={() => setactive(!active)}>
          <div className="w-9 rounded h-[6px] bg-white mb-1"></div>
          <div className="w-9 rounded h-[6px] bg-white mb-1"></div>
          <div className="w-9 rounded h-[6px] bg-white"></div>
        </div>
        <nav
          className={`fixed h-lvh bg-[#25253d] w-full top-0 left-0 transition-all duration-200 ${
            active ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-[80vw] p-4 bg-[#1e2228] ">
            <div className="flexBetween w-full h-10 my-9">
              <div className="relative h-10 w-3/4 ">
                <Image src="/logo-light.png" fill alt="logo" />
              </div>
              <IoCloseCircleOutline
                className="text-white"
                size={40}
                onClick={() => setactive(false)}
              />
            </div>
            <div className="flex flex-col h-[80vh] justify-between">
              <ul>
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="text-white text-xl mb-4 flexBetween ">
                    Services
                    <MdKeyboardArrowDown size={30} />
                  </li>
                ))}
              </ul>
              <div className="">
                <h1 className="text-white text-xl">info@email.com</h1>
                <h1 className="text-white text-xl">00 (123) 456 78 90</h1>

                <div className="flex gap-5 text-white mt-6">
                  <FaInstagram size={30} />
                  <FaInstagram size={30} />
                  <FaInstagram size={30} />
                  <FaInstagram size={30} />
                  <FaInstagram size={30} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
