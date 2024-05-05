"use client";
import "./header.scss";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Button from "../Button";

const Header = () => {
  return (
    <section className=" bg-[#3b2e74] h-lvh">
      <div className=" w-full flex flex-wrap-reverse items-center justify-between pt-44 p-3 gap-3  container">
        <div className=" w-full h-full lg:w-1/2 font-semibold">
          <h1 className="text-white text-[45px]">
            Crafting project specific solutions with expertise.
          </h1>
          <p className="header-para">
            We’re a creative company that focuses on establishing long-term
            relationships with customers.
          </p>
          <div className="gap-4 flex">
            <Button title="Explore Now" />
            <Button title="Contact Us" transparent />
          </div>
        </div>
        <div>
          <Swiper
            className="h-[40vh] lg:h-[70vh] lg:aspect-square rounded-lg "
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={true}
          >
            {/* {HeaderData.map((item, i) => ( */}
            <SwiperSlide>
              <Image src="/header1.jpg" alt="" fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/header2.jpg" alt="" fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/header1.jpg" alt="" fill />
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Header;
