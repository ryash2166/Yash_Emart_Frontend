import React from "react";
import Loader from "./Common/Loader";

const PlaceHolder = () => {
  return (
    <div className="translate-y-[8%] cursor-wait max-lg:translate-y-0">
      <div className="flex w-full max-lg:block">
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="flex w-full max-lg:block">
        <Loader />
        <Loader />
        <Loader />
      </div>
      <div className="flex w-full max-lg:block">
        <Loader />
        <Loader />
        <Loader />
      </div>
    </div>
  );
};

export default PlaceHolder;
