import React from 'react'
import pin from '../assets/SVG/pin.svg'
import web from '../assets/SVG/web.svg'
import jcb from '../assets/SVG/jcb.svg'
import discover from '../assets/SVG/discover.svg'
import visa from '../assets/SVG/visa.svg'
import maestro from '../assets/SVG/maestro.svg'
import american from '../assets/SVG/american.svg'

const Footer_1 = () => {
  return (
    <div>
      <section className=' pt-[25px] pb-[22px]'>
        <div className='max-md:flex max-md:justify-center max-md:items-center'>
            <div className='flex justify-between mx-4 max-lg:mx-0 items-center max-md:block'>
                <div className='flex gap-2 items-center justify-center pb-3 w-[200px] max-lg:w-auto'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M15 10.3698C15.1234 11.2021 14.9812 12.052 14.5937 12.7988C14.2062 13.5456 13.5931 14.1512 12.8416 14.5295C12.0901 14.9077 11.2384 15.0394 10.4077 14.9057C9.57708 14.7721 8.80971 14.3799 8.21479 13.785C7.61987 13.1901 7.22768 12.4227 7.09402 11.592C6.96035 10.7614 7.09202 9.90971 7.47028 9.15819C7.84854 8.40667 8.45414 7.79355 9.20094 7.40605C9.94773 7.01856 10.7977 6.8764 11.63 6.99981C12.4789 7.1257 13.2648 7.52128 13.8716 8.12812C14.4785 8.73496 14.8741 9.52089 15 10.3698Z" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16.5 5.5H16.51" stroke="#989898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect width="20" height="20" rx="1" fill="#989898"></rect>
                            <path d="M17.35 3H14.8C13.6728 3 12.5918 3.44777 11.7948 4.2448C10.9978 5.04183 10.55 6.12283 10.55 7.25V9.8H8V13.2H10.55V20H13.95V13.2H16.5L17.35 9.8H13.95V7.25C13.95 7.02457 14.0396 6.80837 14.199 6.64896C14.3584 6.48955 14.5746 6.4 14.8 6.4H17.35V3Z" fill="white"></path>
                        </svg>
                    </div>
                    <div>
                        <img src={pin} alt="" />
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                            <rect width="23" height="15" rx="4" fill="#989898"></rect>
                            <path d="M16 7.5L10 10.5311V4.46891L16 7.5Z" fill="#FEFCFB"></path>
                        </svg>
                    </div>
                </div>
                <div className='text-[15px] items-center tracking-widest flex justify-center pb-3'>
                    <p className='text-muted font-[500]'> Designed by: <span className='font-[500] text-black'>Yash</span></p>
                </div>
                <div className='flex  items-center gap-3 justify-center w-[300px] max-md:w-[250px]'>
                    <div className='w-[45px]'>
                        <img src={visa} alt="PaymentLogo" />
                    </div>
                    <div className='w-[45px]'>
                        <img src={web} alt="PaymentLogo" />
                    </div>
                    <div className='w-[45px]'>
                        <img src={maestro} alt="MPaymentLogo" />
                    </div>
                    <div className='w-[45px]'>
                        <img src={jcb} alt="PaymentLogo" />
                    </div>
                    <div className='w-[45px]'>
                        <img src={discover} alt="PaymentLogo" />
                    </div>
                    <div className='w-[45px]'>
                        <img src={american} alt="PaymentLogo" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer_1
