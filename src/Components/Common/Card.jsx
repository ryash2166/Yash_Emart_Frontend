import React, { useEffect } from "react";

// Logo
import heart from '../../assets/SVG/heart.svg'
import eye from '../../assets/SVG/Eyes.svg'
import cart from '../../assets/SVG/Cart.svg'

import { NavLink } from "react-router-dom";

import { addToCart, addToWishList } from "../../CartRedux/Redux/Action";

import { showErrorMessage, showSuccessMessage } from "../Alerts";

import { useDispatch, useSelector } from "react-redux";

import { ProductData } from "../../CartRedux/ProductRedux/ProductAction";

const Card = (product_data) => {
  
    const dispatch = useDispatch();

    const CartData = useSelector((state) => state.Reducer)
    const WishData = useSelector((state) => state.WishReducer)
    
    let {id=1,img,name,price,d_price,discount} = product_data;
    
    const Cart_Data = (product_data) => {
      dispatch(addToCart(product_data));
      let find = CartData.findIndex(item => item.id === product_data.id)
      find === -1 ? showSuccessMessage(
        "Your item has been added to the Cart list!",
        "bottom-right"
      ) : showErrorMessage("Item already in Cart List. Please review and checkout promptly.","bottom-right")
    };
  
    const Wish_Data = (product_data) => {
      dispatch(addToWishList(product_data));
      let find = WishData.findIndex(item => item.id === product_data.id)
      find === -1 ? showSuccessMessage(
        "Your item has been added to the Wish list!",
        "bottom-right"
      ) : showErrorMessage("Item already in Wish List. Please review and checkout promptly.","bottom-right")
    };
  
    useEffect(() => {
      dispatch(ProductData());
    }, []);
    

  return (
    <>
      <div className="absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden">
        <span className="text-white bg-black px-2">{discount}</span>
      </div>
      <div className="relative primary-img">
        <NavLink to={`/eye/${id}`}>
          <div className="overflow-hidden relative ">
            <img
              src={img}
              loading="lazy"
              alt="ProductImg"
              className="hover:scale-110 duration-[2000ms] ease-in-out"
            />
          </div>
        </NavLink>
        <div className="absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon">
          <div className="">
            <div className=" bg-white rounded-full flex justify-center icon-1 mb-3">
              <button onClick={() => Wish_Data(product_data)} className="p-[12px]">
                <img src={heart} alt="AddToWishlist" loading="lazy" />
              </button>
            </div>
            <NavLink to={`/eye/${id}`}>
              <div className=" bg-white rounded-full flex justify-center icon-1 mb-3">
                <button className="p-[12px]" >
                  <img src={eye} alt="ProductDetails" loading="lazy" />
                </button>
              </div>
            </NavLink>
            <div className=" flex justify-center bg-white rounded-full icon-1 mb-3">
              <button onClick={() => Cart_Data(product_data)} className="p-[12px]">
                <img src={cart} alt="AddToCart" loading="lazy" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[15px]">
          <h5>{name}</h5>
          <p className="text-muted ">
            <del className="pr-[8px]">${price}</del>
            <span>${d_price}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
