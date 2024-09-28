import React from "react";
import load from '../assets/load2.gif'
export const PageLoader = () => {

  return (

    <div className=" text-center container">
      <div className="flex justify-center items-center">
        <img src={load} alt="Loading..."  style={{height: '55px' , marginTop: "100px"}}/>
      </div>
        <div className="mt-3 font-[Jost] text-gray-400 text-[20px]">Please enter your email and password to access the Cart / Wishlist.</div>
    </div>

  );
};
