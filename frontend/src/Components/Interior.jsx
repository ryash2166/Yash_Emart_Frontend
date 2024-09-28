import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "../CartRedux/ProductRedux/ProductAction";

import { AnimationOnScroll } from 'react-animation-on-scroll';

import interior from '../assets/Interior.webp'

import Card from "./Common/Card";

const Interior = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductReducer);
  
    useEffect(() => {
      dispatch(ProductData());
    }, []);
  return (
    <>
      <div className="px-[15px] pb-[73px] max-md:pb-0">
        <div className="px-[15px] pb-[36px] max-md:pb-0 ">
          <div className="text-center text-[45px] font-[Jost] max-md:text-[32px] pb-[11px]">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <h1 className="mb-[8px]">Best Interior Plants</h1>
            </AnimationOnScroll>
          </div>
          <div className="text-[16px] text-center text-muted font-[Poppins] ">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <p>Rectangle follower library hand ellipse device strikethrough.</p>
            </AnimationOnScroll>
          </div>
        </div>
        <section className="py-[50px] flex max-md:block mb-[50px] max-md:mb-0 overflow-hidden">
          <section className="w-[43%] max-md:w-[100%] mb-3 px-[30px] max-xl:px-0 overflow-hidden">
           <AnimationOnScroll animateIn="animate__fadeInUp">
              <img
                decoding="async"
                src={interior}
                className=""
                alt="plant-gallery-left-img"
                loading="lazy"
              />
            </AnimationOnScroll>
          </section>

          <section className="w-[57%] pl-5 max-md:px-1 max-md:block max-md:w-[100%] max-md:p-0">
            <div className="flex flex-wrap row">
                {data.flat().slice(5 , 11).map((item , ind) => {
                    return(
                        <div   className="col-6 col-md-4 px-2 relative" key={ind}>
                            {/* <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                                <span className='text-white bg-black px-2'>{item.discount}</span>
                            </div>
                            <div className='relative primary-img'>
                              <NavLink to='eye'>
                                <div className='overflow-hidden relative '>
                                    <img  src={item.img} loading='lazy' alt='ProductImg' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                                </div>
                              </NavLink>
                                <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                                    <div className=''>
                                        <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                            <button onClick={() => Wish_Data(item)} className="p-[12px]">
                                                <img src={heart} alt="AddToWishlist" loading="lazy" />
                                            </button>
                                        </div>
                                        <NavLink to='eye'>
                                          <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                            <button className='p-[12px] '>
                                            
                                                  <img src={eye} alt="ProductDetails" loading='lazy' />
                                            </button>
                                          </div>
                                        </NavLink>
                                        <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                            <button onClick={() => Cart_Data(item)} className="p-[12px]">
                                                <img src={cart} alt="AddToCart" loading="lazy" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]'>
                                <h5>{item.name}</h5>
                                <p className='text-muted '>
                                    <del className='pr-[8px]'>${item.price}</del>
                                    <span>${item.d_price}</span>
                                </p>
                            </div>
                            </div> */}
                            <Card  id={item.id} img={item.img} discount={item.discount} d_price={item.d_price} price={item.price} name={item.name} />
                        </div>
                    )
                })}
              
            </div>
          </section>
          <ToastContainer transition={Zoom} />
        </section>
      </div>
    </>
  );
};

export default Interior;
