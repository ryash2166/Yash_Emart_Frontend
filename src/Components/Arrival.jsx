import React, { useEffect } from "react";

// ToastiFy
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

// Redux
import { useDispatch, useSelector } from "react-redux";

// ProductRedux
import { ProductData } from "../CartRedux/ProductRedux/ProductAction";

// Animation Scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Card from "./Common/Card";

const Arrival = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(ProductData());
  }, []);

  return (
    <div>
      <section className="pt-[110px] px-[15px] pb-[20px] max-lg:pt-[50px] max-lg:pb-[37px]">
        <div className="mx-[42px] max-lg:mx-0 max-lg:flex max-lg:justify-center">
          <div className="mb-[8px]">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h1 className="font-[Jost] text-[45px] max-md:text-[32px]">
              New arrivals
            </h1>
          </AnimationOnScroll>
          </div>
        </div>
      </section>
      <section className="px-[15px] max-md:px-0 pb-[65px]">
          <div className="flex flex-wrap row justify-evenly g-0">
            {data
              .flat()
              .slice(5 , 10)
              .map((item , ind) => {
                return (
                    <div className="col-5 col-lg-2 relative" key={ind}>
                      <AnimationOnScroll animateIn="animate__fadeIn">
                        <Card  id={item.id} img={item.img} discount={item.discount} d_price={item.d_price} price={item.price} name={item.name} />
                      </AnimationOnScroll>
                    </div>
                );
              })}
        </div>
      </section>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default Arrival;
