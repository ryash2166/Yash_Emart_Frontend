import React from "react";
import { NavLink } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Tools = () => {
  return (
    <div className="">
      <div className="bg-cover relative bg-[url('https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/full-bg-img-scaled.webp')] h-[426px]">
        <div className="flex m-auto absolute  h-full max-xl:backdrop-brightness-50 max-md:backdrop-brightness-[.3]">
          <div className=" mx-[56px] h-[196px] flex justify-end m-auto  max-xl:mx-auto">
            <div className="ml-[997px] max-2xl:ml-[720px] max-xl:ml-[630px] max-lg:ml-[100px] max-md:ml-10 pr-10 max-sm:pr-0 max-sm:ml-0">
              <div className="pl-[72px] pr-[101px] max-xl:p-0 max-md:px-[40px]">
                <div className="text-white mr-[10px] max-md:mr-0">
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    <h2 className="mb-[8px] text-white font-[Jost] text-[45px] max-md:text-[30px] max-md:text-center">
                      Find your perfect gardening{" "}
                      <br className="max-2xl:hidden" /> tools on best price.
                    </h2>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="ml-[74px] max-xl:ml-0 max-md:flex max-md:justify-center">
                <div className="text-[17px] mt-[40px] now">
                  <div className="Shop">
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                      <NavLink
                        to="shopnow"
                        className="px-[40px] py-[12px]"
                        role="button"
                      >
                        <span className="font-normal">shop now</span>
                      </NavLink>
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
