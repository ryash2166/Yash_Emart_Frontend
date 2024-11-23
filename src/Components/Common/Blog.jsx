import React from "react";
const Blog = (props) => {
  let { img, author, title , date } = props;
  return (
      <article className="col-lg-4  px-[15px]">
        <div>
          <div className="pt-[34px] pic">
            <img
              decoding="async"
              src={img}
              alt="Image"
              data-no-retina=""
              loading="lazy"
              className="hover:opacity-80 duration-300 ease-in-out object-cover max-lg:w-[1000px] lozad "
            />
          </div>
          <div className="data pt-[20px] pb-[30px]">
            <div className="mb-[20px]">
              <div className="author text-[15px] font-[Jost] text-[#6b6b6b] leading-[28px] font-[450]">
                {author}
              </div>
            </div>
            <h5 className="mb-[12px] text-[24px] leading-[34px] font-[Jost] font-[500]">
              {title}
            </h5>
            <span className="font-[Jost] text-[#0d1d28] flex float-left items-center">
              <Icon/>
              {date}
            </span>
          </div>
        </div>
      </article>
  );
};

export default Blog;

function Icon(props) {
    return (
        <svg
        {...props}
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        className="mr-[10px] saturate-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z"
          stroke="#7347FC"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
        <path
          d="M4.79297 9.5166H9.28449"
          stroke="#7347FC"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
        <path
          d="M4.79297 13.3945H14.5175"
          stroke="#7347FC"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
        <path
          d="M7.12305 1V5.15254"
          stroke="#7347FC"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
        <path
          d="M12.5898 1V5.15254"
          stroke="#7347FC"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
      </svg>
    );
  }