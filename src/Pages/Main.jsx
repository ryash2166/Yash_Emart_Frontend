import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Interior from "../Components/Interior";
import ShippingLable from "../Components/ShippingLable";
import Tools from "../Components/Tools";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import Arrival from "../Components/Arrival";

const Main = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Interior />
      <ShippingLable />
      <Tools />
      <Arrival />
      <Mail />
      <Footer_1 />
    </div>
  );
};

export default Main;
