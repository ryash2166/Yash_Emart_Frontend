import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';

import {useDispatch , useSelector} from 'react-redux'
import {ProductData} from '../CartRedux/ProductRedux/ProductAction'

import { NavLink } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer , Zoom } from 'react-toastify';

import Card from './Common/Card';

const Shop = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)
  
  useEffect(()=>{
    dispatch(ProductData())
  }, [])

  return (
    <div className='pt-[70px] '>
      <div className='container'>
        <div>
          <div className='text-[20px]'>
            <span><NavLink to="/">Home</NavLink></span>
          </div>
          <section className='flex justify-between items-center mt-[5px] max-md:mt-[14px] pb-2 text-muted text-[16px]'>
            <div className='flex justify-center items-center'>
              <span className=''>Showing all 11 results</span>
            </div>
            <div className='flex justify-center items-center gap-x-2 max-md:hidden '>
              <div className=''>
                <button className='flex items-center justify-center'>Filters 
                <div className='ml-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="result-icon"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="currentColor" d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"></path></g></svg>
                </div>
                </button>
              </div>
              <span className='h-[32px] bg-slate-400 w-[1px]'></span>
              <div className='flex justify-center items-center w-[200px] cursor-pointer'>
                <Form.Select aria-label="Default sorting" style={{border: 0, outline: 'none'}} className='text-muted text-[15px] cursor-pointer'>
                  <option value="1">Default sorting</option>
                  <option value="2">Sort by popularity</option>
                  <option value="3">Sort by average rating</option>
                  <option value="4">Sort by latest</option>
                  <option value="5">Sort by price: low to high</option>
                  <option value="6">Sort by price: high to low</option>
                </Form.Select>
                <div className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z" opacity="0.05"></path><path fill="currentColor" d="M7.445 7.48V5.672L5.665 7.48h1.78zm1.09-4.42c.304.12.465.39.465.706v16.437a.784.784 0 01-.783.797.762.762 0 01-.772-.781V8.982H4.003a.832.832 0 01-.765-.204.759.759 0 01.002-1.105L7.652 3.23a.832.832 0 01.882-.17zm8.02 15.269l1.78-1.81h-1.78v1.81zm4.207-3.107a.76.76 0 01-.002 1.106l-4.412 4.442a.832.832 0 01-.882.17c-.305-.12-.466-.39-.466-.706V3.797c0-.432.332-.797.783-.797.45 0 .772.35.772.781v11.237h3.442a.833.833 0 01.765.204z"></path></g></svg>
                </div>
              </div>
              <span className='h-[32px] bg-slate-400 w-[1px] max-lg:hidden'></span>
              <div className='flex gap-x-2 items-center justify-center max-lg:hidden'>
              <p>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.4" y="0.4" width="6.2" height="6.2" fill="white" stroke="black" strokeWidth="0.8"></rect>
                  <rect x="9.4" y="0.4" width="6.2" height="6.2" fill="white" stroke="black" strokeWidth="0.8"></rect>
                  <rect x="0.4" y="9.4" width="6.2" height="6.2" fill="white" stroke="black" strokeWidth="0.8"></rect>
                  <rect x="9.4" y="9.4" width="6.2" height="6.2" fill="white" stroke="black" strokeWidth="0.8"></rect>
                </svg>
              </p>
              <p>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.4" y="0.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="0.4" y="5.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="0.4" y="10.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="5.4" y="0.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="5.4" y="5.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="5.4" y="10.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="10.4" y="0.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="10.4" y="5.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                  <rect x="10.4" y="10.4" width="5.2" height="5.2" fill="white" stroke="gray" strokeWidth="0.8"></rect>
                </svg>
              </p>
              <p className=''>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="2.842" y="0.947" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="7.895" y="0.947" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="2.842" y="6" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="7.895" y="6" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="2.842" y="11.053" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="7.895" y="11.053" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="2.842" y="16.105" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="7.895" y="16.105" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="12.947" y="0.947" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="18" y="0.947" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="12.947" y="6" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="18" y="6" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="12.947" y="11.053" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="18" y="11.053" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="12.947" y="16.105" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                  <g transform="matrix(1.09896,0,0,1.09896,-2.28125,-0.09375)">
                  <rect x="18" y="16.105" width="5.053" height="5.053" style={{fill:'white',stroke:'gray',strokeWidth:'0.63px'}}></rect>
                  </g>
                </svg>
              </p>
              </div>
            </div>
          </section>
          <div  className='flex row flex-wrap mt-2'>
                {data.flat().map((item , ind) =>{
                  return(
                      <div className='col-6 col-md-4 col-lg-3 relative' key={ind}>
                            {/* <div className='absolute right-[25px] text-[13px] top-[20px] flex items-center justify-center  z-1 max-md:hidden'>
                                <span className='text-white bg-black px-2'>{item.discount}</span>
                            </div>
                            <div className='relative primary-img'>
                              <NavLink to='/eye'>
                                <div className='overflow-hidden relative '>
                                    <img  src={item.img} loading='lazy' className='hover:scale-110 duration-[2000ms] ease-in-out' />
                                </div>
                              </NavLink>
                                <div className='absolute left-[25px] top-[20px] max-sm:left-1 max-sm:top-1 max-lg: z-1 shop-icon'>
                                    <div className=''>
                                        <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                            <button onClick={ ()=> WishData(item) } className='p-[12px]'>
                                                <img src={heart} alt="" loading='lazy' />
                                            </button>
                                        </div>
                                        <NavLink to='/eye'>
                                          <div className=' bg-white rounded-full flex justify-center icon-1 mb-3'>
                                              <button className='p-[12px]'>
                                                  <img src={eye} alt="" loading='lazy' />
                                              </button>
                                          </div>
                                        </NavLink>
                                        <div className=' flex justify-center bg-white rounded-full icon-1 mb-3'>
                                            <button  onClick={ ()=> CartData(item) } className='p-[12px]'>
                                                <img src={cart} alt="" loading='lazy' />
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
        </div>

      </div>
      <ToastContainer transition={Zoom} />
    </div>
  )
}

export default Shop