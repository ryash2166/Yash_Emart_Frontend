import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { NavLink } from "react-router-dom";

const Category = (props) => {

  const { title, img } = props;

  return (
    <div className="col image-container max-md:mb-2 up">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <img src={img} alt="Your Image" />
        <div className="overlay pr-[25px] max-lg:px-0 max-lg:pr-[25px]">
          <p className="font-[Jost] text-[25px]">{title}</p>
          <NavLink to="shopnow" className="side pr-[10px]">
            <Icon />
          </NavLink>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Category;


function Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      className="side"
    >
      <path
        d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z"
        fill="#C7B9B6"
      ></path>
      <path
        d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.877 18.5459H24.2664"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}