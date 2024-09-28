import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import Category from "./Common/Category";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Categories = () => {
  return (
    <div className="mx-[30px] max-lg:mx-[15px] pb-[50px] max-md:pb-0">
      <div className="flex justify-end text-[45px] font-[Jost] px-[15px] pb-[19px] max-xl:justify-start max-md:justify-center max-md:text-[30px] ">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 className="tracking-normal">Shop by categories</h1>
        </AnimationOnScroll>
      </div>
      <div className=" pb-[108px] max-md:pb-[50px]">
        <div className="flex gap-4 max-xl:block overflow-hidden ">
          <div className="row  max-md:block max-xl:mb-6 max-md:mb-0">
            <Category title={"Aloe Vera"} img={img1} />
            <Category title={"Old Lady Cactus"} img={img2} />
            <Category title={"Calathea Ornata"} img={img3} />
            <Category title={"Green Aloevera"} img={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
