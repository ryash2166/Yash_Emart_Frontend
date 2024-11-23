import React from "react";
import { NavLink } from "react-router-dom";
import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'

function Banner() {
  return (
    <div className="overflow-hidden ">
      <section className=" pt-[90px] py-[15px] pb-[109px] max-md:pb-[40px] text-center overflow-hidden ">
        <div className="mx-[50px]  flex max-md:block text-center max-2xl:mx-[15px]">
          <div className=" flex  items-center justify-center text-wrap text-center pr-[100px] max-lg:pr-0">
            <div className="">
              <div className="">
                <div className="">
                  
                  <div className="max-md:text-[50px] max-lg:text-[66px] max-[1025px]:text-left max-md:text-center text-[88px] mb-[25px] BannerText">
                    <h1 className=" ">Plant a tree for better world</h1>
                  </div>
                </div>
              </div>
                <div className="mb-[56px]  max-md:mb-[45px] BannerSub">
                  <p className="text-[16px] font-light max-md:text-[15px] text-muted max-[1025px]:text-left max-md:text-center">
                    Rectangle follower distribute device layer. Library hand ellipse device strikethrough.
                  </p>
                </div>
              <div className="">
                <div className="max-[1025px]:text-left max-md:text-center">
                  <div className="shop BannerShop">
                    <NavLink to="shopnow" className="" role="button">
                      <button className='font-[Poppins] font-[500] text-[17px] py-[12px] px-[40px] border-1 border-black  hover:bg-black hover:text-white hover:-translate-y-[20px] duration-300 ease-in-out'>Shop Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[55%] mr-5 mt-20 max-xl:mr-2 ">
            <div className=" max-md:hidden ">
              <div className="">
                <div className="BannerImg1">
                  <img
                    decoding="async"
                    src={banner1}
                    className="hover:translate-x-5 duration-400 ease-in-out "
                    loading="lazy"
                    alt="plants-banner-first "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <div className="ml-[15px] max-lg:ml-[20px] max-md:ml-0 max-xl:ml-2 BannerImg2 ">
                  <img
                    decoding="async"
                    src={banner2}
                    className="w-[850px] max-lg:w-[450px] max-xl:w-[600px] max-md:w-auto hover:translate-x-5 duration-400 ease-in-out"
                    loading="lazy"
                    alt="plants-banner-second"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
