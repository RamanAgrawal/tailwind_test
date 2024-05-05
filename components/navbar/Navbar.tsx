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
    <nav className="h-24 fixed w-full flexCenter  bg-[#372b70]">
      <div className="container flexBetween">
        <div className="relative h-10 w-40">
          <Image src="/logo-light@2x.png" alt="logo" fill />
        </div>
        <div className="flexBetween gap-10">
          <ul className="flexBetween gap-10 font-bold text-white">
            <li className="relative group">
              <Link href="#">Demos</Link>

              <div className="absolute invisible translate-y-96 bg-black group-hover:-translate-y-80  group-hover:visible h-lvh -right-[43vw] w-[90vw] container border"></div>
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
