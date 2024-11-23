import React, { useEffect } from "react";
import Mail from "../Components/Mail";
import Footer_1 from "../Components/Footer_1";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import fire from "../assets/SVG/fire.svg";
import { RxStar } from "react-icons/rx";
import { RxStarFilled } from "react-icons/rx";
import { FaTruck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import web from "../assets/SVG/web.svg";
import jcb from "../assets/SVG/jcb.svg";
import visa from "../assets/SVG/visa.svg";
import maestro from "../assets/SVG/maestro.svg";
import american from "../assets/SVG/american.svg";
import { NavLink, useParams } from "react-router-dom";
import { showErrorMessage, showSuccessMessage } from "../Components/Alerts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "../CartRedux/Redux/Action";
import { CiHeart } from "react-icons/ci";
import Card from "../Components/Common/Card";
import data from '../CartRedux/ProductRedux/Data/Emart.json'

const Eye = () => {

  const dispatch = useDispatch();

  const ID = useParams();
  const ProductInfo = data.filter((ProductsData) => {
    return ProductsData.id === Number(ID.id);
  });

  const { name, img, id, d_price , category} = ProductInfo[0] 

  const CartData = useSelector((state) => state.Reducer);
  const WishData = useSelector((state) => state.WishReducer);

  const Cart_Data = (ProductInfo) => {
    dispatch(addToCart(ProductInfo));
    let find = CartData.findIndex((item) => item.id === ProductInfo.id);
    find === -1
      ? showSuccessMessage(
          "Your item has been added to the Cart list!",
          "bottom-right"
        )
      : showErrorMessage(
          "Item already in Cart List. Please review and checkout promptly.",
          "bottom-right"
        );
  };
  
  const Wish_Data = (ProductInfo) => {
    dispatch(addToWishList(ProductInfo));
    let find = WishData.findIndex(item => item.id === ProductInfo.id)
    find === -1 ? showSuccessMessage(
      "Your item has been added to the Wish list!",
      "bottom-right"
    ) : showErrorMessage("Item already in Wish List. Please review and checkout promptly.","bottom-right")
  };
  
  return (
    <div>
      <div className="container py-[80px] max-lg:py-0">
        <div className={`row ProductInfo-${id}`}>
          <div className="pt-[90px] pb-[20px] pr-[15px]">
            <section>
              <p>
                Home / {category}&nbsp;
                <span className="max-sm:hidden">/ {name}</span>
              </p>
            </section>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div>
              <div className="w-[52%] float-left pr-[7px] m-0 block relative max-xl:w-full max-xl:pr-0">
                <div>
                  <div className="">
                    <img src={img} alt="" className="max-xl:w-full" />
                  </div>
                  <ol className="mt-[16px] flex mb-[30px] max-xl:hidden ">
                    <li className="mr-[16px]">
                      <img
                        src={img}
                        alt=""
                        className="p-[7px] border-[1px] border-black w-[134px] h-[132px] object-cover"
                      />
                    </li>
                    <li className="mr-[16px]">
                      <img
                        src={img}
                        alt=""
                        className="p-[7px]  border-black w-[134px] h-[132px] object-cover"
                      />
                    </li>
                  </ol>
                </div>
              </div>
              <div className="float-right !w-[48%] max-xl:!w-full max-xl:pl-0 max-xl:pr-0 max-xl:float-none clear-none relative inline-block right-0 mb-[32px] pl-[60px] pb-[45px] pr-[40px] max-xl:mt-4 max-lg:mb-0">
                <h4 className="mb-[18px] font-[Jost] font-400 text-[25px]">
                  {name}
                </h4>
                <div className="absolute top-0 right-0">
                  <button
                    onClick={() => Wish_Data(ProductInfo[0])}
                    className=""
                  >
                    <div className="border-[1px] rounded-full flex justify-center items-center w-[50px] h-[50px] relative  hover:bg-[#d51243] hover:text-[#CFCFCF] transition-all">
                      <CiHeart className="text-2xl" />
                    </div>
                  </button>
                </div>
                <div className="mb-[18px] ">
                  <div className="flex overflow-hidden items-center relative mt-[8px] mb-[10px]">
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStarFilled />
                    <RxStar />
                    <RxStar />
                    <div className="float-left ml-[10px] text-[14px] leading-[30px] text-[#6b6b6b] tracking-[1.3px]">
                      (1 Review)
                    </div>
                  </div>
                </div>
                <p className="my-[10px] text-[#000A12] flex items-center text-[17px]">
                  <img src={fire} alt="" className="h-6 w-6" />
                  <span className="ml-2 text-[#B91400] font-[600]">
                    Hot Deal Ends Soon
                  </span>
                </p>
                <p className="my-[10px] text-[25px] text-[#000A12]">
                  <span className="ml-2">$ {d_price}.00</span>
                </p>
                <p className="text-[16px] mt-[20px] font-[500] pb-[10px]">
                  Quantity
                </p>
                <div className="mb-[20px] flex">
                  <div className="w-[110px] border-[1px] text-[18px] border-transparent bg-[#efefef] mr-[16px] h-[calc(52px) flex justify-around items-center relative">
                    <div className="text-gray-400">-</div>
                    <p className="">1</p>
                    <div className="text-gray-400">+</div>
                  </div>
                  <button
                    className="font-[Jost] border-[1px] border-black w-[80%] max-xl:w-full font-[500] px-[33px] py-[15px] text-[17px] hover:-translate-y-2 duration-300 ease-in-out"
                    onClick={() => Cart_Data(ProductInfo[0])}
                  >
                    Add to Cart
                  </button>
                </div>
                <NavLink to="/shopnow">
                  <button className="font-[Jost] border-[1px] w-full mb-[20px] bg-black border-black font-[500] hover:-translate-y-2 ease-in-out duration-300 text-white px-[33px] py-[15px] text-[17px]">
                    Return to Shop
                  </button>
                </NavLink>
                <div className="pb-[20px] mb-[20px] border-b-[1px] border-[#cdcdcd]">
                  <ul>
                    <li className="flex items-center pb-[5px]">
                      <FaTruck className="text-[30px]" />
                      <span className="pl-3 text-gray-500">
                        <strong className="text-black">
                          Estimated Delivery:
                        </strong>
                        &nbsp;Within 5 - 7 days
                      </span>
                    </li>
                    <li className="flex items-center pb-[5px]">
                      <IoCartOutline className="text-[30px]" />
                      <span className="pl-3 text-gray-500">
                        <strong className="text-black">Free Shipping:</strong>
                        &nbsp;On orders over $1499 and above
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-[20px] flex justify-between">
                  <span className="pl-2">
                    <strong className="text-black font-[600]">SKU:</strong>
                    MPP50020
                  </span>
                  <span className="pr-2">
                    <strong className="text-black font-[600]">Category:</strong>
                    &nbsp;{category}
                  </span>
                </div>
                <div className="bg-[#efefef] text-center p-[30px] w-full ">
                  <p className="pb-[8px] font-[500]">Online payment option</p>
                  <div className="flex justify-center gap-x-3">
                    <img
                      src={visa}
                      alt=""
                      className="w-[50px] max-md:w-[40px]"
                    />
                    <img
                      src={web}
                      alt=""
                      className="w-[50px] max-md:w-[40px]"
                    />
                    <img
                      src={jcb}
                      alt=""
                      className="w-[50px] max-md:w-[40px]"
                    />
                    <img
                      src={maestro}
                      alt=""
                      className="w-[50px] max-md:w-[40px]"
                    />
                    <img
                      src={american}
                      alt=""
                      className="w-[50px] max-md:w-[40px]"
                    />
                  </div>
                </div>
              </div>
              <div className="clear-both ">
                <Tabs
                  defaultActiveKey="Description"
                  id="uncontrolled-tab-example"
                  className="mb-3 text-black tabs"
                >
                  <Tab
                    eventKey="Description"
                    title="Description"
                    className="text-black"
                  >
                    <div className="px-[20px] flex mb-[32px] max-lg:block max-md:px-0">
                      <div className="pr-[15px] max-lg:flex max-lg:justify-center max-lg:pr-0">
                        <img
                          src={img}
                          alt=""
                          className="h-[500px] max-w-[800px] max-md:w-full max-md:object-cover"
                        />
                      </div>
                      <div className="pl-[30px] max-lg:pl-0 max-lg:pt-3">
                        <div className="pb-[24px]">
                          <h4 className="font-[Jost] text-[20px] mb-[8px]">
                            Product details
                          </h4>
                        </div>
                        <div className="text-[#666666] pr-[100px] max-lg:pr-0">
                          <p>
                            Talk digital shark heads-up door win involved turn
                            timepoint bed. Room management exploratory they
                            forward should reinvent field. Dunder buy-in first
                            invested gave ipsum down email monday elephant.
                            Please pushback deliverables dive best.
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            Commitment are by world across ui first charts. 2
                            unit live whatever diarize when closing all know.
                            Now anomalies shelf-ware you win-win-win me close
                            plane. Don't stop then tomorrow work. Creep
                            procrastinating break support sky.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="Additional information"
                    title="Additional information"
                  >
                    <div className="mb-[32px] px-[20px]">
                      <table className=" mb-[23px] w-full">
                        <tbody>
                          <tr>
                            <th className="text-left leading-[28px] border-b-[1px] p-[10px] !font-[500] w-[160px]">
                              Type
                            </th>
                            <td className="border-b-[1px]">
                              <p className="py-[10px] text-[#666]">Decorator</p>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-left leading-[28px] p-[10px] !font-[500] w-[160px]">
                              Pot Type
                            </th>
                            <td className="">
                              <p className="py-[10px] text-[#666]">Clay</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  <Tab eventKey="Reviews (1)" title="Reviews (1)">
                    <div className="px-[20px] ">
                      <div className="border-b-[1px] mb-[70px] pb-[38px]">
                        <div className="mb-[20px] flex">
                          <div>
                            <img
                              src="https://cdn-icons-png.freepik.com/512/847/847969.png"
                              alt=""
                              className=" w-[60px] h-auto rounded-full"
                            />
                          </div>
                          <div className="px-[15px] pt-[5px]">
                            <div className="flex mb-[10px]">
                              <RxStarFilled />
                              <RxStarFilled />
                              <RxStarFilled />
                              <RxStarFilled />
                              <RxStar />
                            </div>
                            <p className="mb-[16px] text-[#666]">
                              Very good product
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <section className="px-[15px] max-md:px-0 pb-[65px] mt-[40px] ">
          <div className="font-[Jost] text-[21px] text-[#000A12] pb-[10px] max-md:pl-6 max-sm:pl-4">Related Products</div>
          <div className="flex row justify-between g-0 max-md:justify-around ">
            {data
              .flat()
              .slice(2 , 7)
              .map((item , ind) => {
                return (
                    <div className="col-5 col-lg-2 relative" key={ind}>
                      <Card id={item.id} img={item.img} discount={item.discount} d_price={item.d_price} price={item.price} name={item.name} />
                    </div>
                );
              })}
        </div>
      </section>
      </div>
      <ToastContainer transition={Zoom} />
      <Mail />
      <Footer_1 />
    </div>
  );
};

export default Eye;
