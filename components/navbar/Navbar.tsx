import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const Navbar = () => {
  const demos = [
    {
      imgSrc: "/demos/1.jpg",
      imgSrcset: "/demos/1.jpg 1x",
    },
  ];
  return (
    <nav className="h-24 fixed w-full flexCenter  bg-[#3b2e74]">
      <div className="container flexBetween">
        <div className="relative h-10 w-40">
          <Image src="/logo-light@2x.png" alt="logo" fill />
        </div>
        <div className="flexBetween gap-10">
          <ul className="flexBetween gap-10 font-bold text-white">
            <li className="relative group">
              <Link href="#">Demos</Link>

              <ul className="absolute h-[80vh] w-lvw -right-[49vw] pt-10 ">
                <div className="container bg-gray-600 h-full rounded-lg">
                  <div className="grid grid-cols-6 p-10 gap-4 overflow-hidden ">
                    {Array.from(Array(18)).map(()=>(
                    <div className="text-black relative w-full aspect-video h-36  hover:-translate-y-1 transition-all duration-150">
                      <Image src="/navimage1.jpg" alt="" fill className="rounded-lg" />
                    </div>
                    )
                    )
                 }
                  </div>
                </div>
              </ul>
            </li>
            <li className="relative">
              <Link href="#">Pages</Link>
            </li>
            <li className="relative">
              <Link href="#">Projects</Link>
            </li>
            <li className="relative">
              <Link href="#">Blogs</Link>
            </li>
            <li className="relative">
              <Link href="#">Blocks</Link>
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
