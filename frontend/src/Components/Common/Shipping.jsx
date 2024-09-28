import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Shipping = (props) => {

    const { title, subtitle, logo } = props;

    return (

        <div className='col-md-6 col-xl-3'>
            <div className='flex items-center justify-center max-md:block '>
                <div className='max-md:flex max-md:justify-center max-md:items-center cursor-pointer max-md:mb-3'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img decoding="async" src={logo} title="" alt="Shipping_Logo" loading="lazy" className='max-md:w-[60px] w-[35px] hover:-translate-x-3 duration-300 ease-out' />
                    </AnimationOnScroll>
                </div>
                <div className='pl-[30px] pr-[15px] max-md:p-0'>
                    <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-[20px] font-[Jost] mb-[8px] font-[500]'>{title}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className='max-md:flex max-md:justify-center max-md:items-center'>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <p className='text-muted text-[16px] tracking-wider'>{subtitle}</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping
