import React from 'react'
import Mail from '../Components/Mail'
import { useDispatch, useSelector } from 'react-redux'
import Footer_1 from '../Components/Footer_1'
import { NavLink } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";
import { addToCart, removeToWishList } from '../CartRedux/Redux/Action'
import "react-toastify/dist/ReactToastify.css";
import { showErrorMessage, showSuccessMessage } from '../Components/Alerts'
import { ToastContainer , Zoom } from 'react-toastify';
import { IoCartOutline } from "react-icons/io5";

const Wishlist = () => {
  
  let today = new Date()

  const wishData = useSelector((state) => state.WishReducer)

  const dispatch = useDispatch()

  const Remove_list = (item) => {
    dispatch(removeToWishList(item.id))
    showErrorMessage('Your item has been removed from the Wishlist!','bottom-right')
  }
  const ADD_cart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeToWishList(item.id))
    showSuccessMessage('Your item has been added to the Cart list!','bottom-right')
  }
  
  return (
    <div>
    {wishData.length === 0 ? (
      <div className=''>
        <section className='py-[185px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
            <div className='container'>
                <div>
                    <div className=''>
                        <p className='px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100'>Your Wishlist is currently empty.</p>
                        <div className='flex gap-x-2 max-md:block '>
                          <p className='mb-[30px] hover:-translate-y-1 duration-300 ease-in-out'>
                              <NavLink to="/cart" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black shadow-lg'>Go to Cart</NavLink>
                          </p>
                          <p className='hover:-translate-y-1 duration-300 ease-in-out'>
                              <NavLink to="/shopnow" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black shadow-lg'>Return to shop</NavLink>
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ToastContainer transition={Zoom} />
      </div>
       ) : (
        <div className='py-[120px] px-[15px] ' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
          <div className='container'>
            <div className='p-[30px] flex justify-center bg-white shadow-lg shadow-slate-100 align-middle '>
              <form className="">
                <table className='table-fixed w-full'>
                  <thead>
                    <tr className=''>
                      <th className='border-t-[1px] max-md:hidden px-[8px] py-[16px] w-[35px] text-center align-middle font-[500]'></th>
                      <th className='border-t-[1px] max-md:hidden px-[16px] py-[16px] max-w-full max-h-full w-[100px] align-middle'>&nbsp;</th>
                      <th className='border-t-[1px] max-md:w-full max-md:border-0 max-md:!text-center px-[16px] py-[16px] text-[#000a12] text-[16px] text-left align-middle font-[500]'>
                        <span className=''>Product Name</span>
                      </th>
                      <th className='border-t-[1px] max-md:hidden px-[16px] py-[16px] text-[#000a12] text-[16px] text-left align-middle font-[500]'>Unit Price</th>
                      <th className='border-t-[1px] max-md:hidden px-[16px] py-[16px] text-[#000a12] text-[16px] text-left align-middle font-[500]'>Date Added</th>
                      <th className='border-t-[1px] max-md:hidden px-[16px] py-[16px] text-[#000a12] text-[16px] text-left align-middle font-[500]'>Stock Status</th>
                      <th className='border-t-[1px] max-md:hidden px-[16px] py-[16px] text-[#000a12] text-[16px] text-left align-middle font-[500]'>&nbsp;</th>
                    </tr>
                  </thead>
                  {wishData.map((item , ind) => {
                    return(
                      <tbody key={ind}>
                        <tr>
                          <td className='border-t-[1px] px-[16px] py-[16px] max-md:block'>
                            <a className='cursor-pointer' onClick={() => Remove_list(item)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                              </svg>
                            </a>
                          </td>
                          <td className='border-t-[1px] max-md:border-0 px-[16px] py-[16px] align-middle max-md:block'>
                            <NavLink to={`/eye/${item.id}`}>
                              <img src={item.img} alt="" className='max-w-[100px] h-[100px] w-[100px] object-cover' />
                            </NavLink>
                          </td>
                          <td className='border-t-[1px] max-md:border-0 px-[16px]  py-[16px] align-middle text-[#666666] max-md:block'>
                            <p className='ml-2 max-md:ml-0'>{item.name}</p>
                          </td>
                          <td className='border-t-[1px] max-md:border-0 px-[16px] py-[16px] align-middle max-md:block'>
                            <p className='flex  items-center text-[#666666] max-lg:block'>
                              <span><del className='pr-[10px] max-md:pr-0'>${item.price}</del>&nbsp;</span>
                              <span className=''> ${item.d_price}&nbsp;</span>
                              <span className=''>{item.discount}</span>
                              </p>
                          </td>
                          <td  className='border-t-[1px] max-md:border-0 px-[16px] py-[16px] align-middle max-md:block'>
                            <p className='text-[#666666] text-[16px]'>{today.toDateString()}</p>
                          </td>
                          <td className='border-t-[1px] max-md:border-0 px-[16px] py-[16px] align-middle text-[#666666] max-md:block'>
                              <span className='mr-[15px] ml-auto'>
                                <FaCheck />
                              </span>
                            <h1 className='text-[16px] text-[#666666]'>{item.stock}</h1>
                          </td>
                          <td className=' border-t-[1px] max-md:border-0 px-[10px] py-[16px] align-middle text-[#666666] overflow-hidden max-md:block'>
                              <a className='border-[1px] border-black max-md:w-full max-md:text-center px-[15px] py-[11px] max-lg:px-3 bg-black cursor-pointer hover:!bg-white hover:!text-black text-white hover:-translate-y-2 duration-400 ease-in-out' onClick={() => ADD_cart(item)}>
                                <span className='mx-auto text-center tracking-[2px]  font-[Jost]  font-[500] max-lg:hidden max-md:block'>Add to Cart </span>
                                <span className='mx-auto text-center tracking-[2px] px-[25px]  font-[Jost] text-[20px] max-md:hidden max-lg:block max-xl:hidden hidden'><IoCartOutline /></span>
                              </a>
                          </td>
                        </tr>
                      </tbody>
                    )
                  })}
                  </table>
                </form>
              </div>
            </div>
          <ToastContainer transition={Zoom} />
        </div>
      )}
      <Mail/>
     <Footer_1/>
    </div>
  )
}

export default Wishlist
