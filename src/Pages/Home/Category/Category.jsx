import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import Sectiontitle from '../../../components/Sectiontitle';

const Category = () => {
    return (
        <section className='my-20 '>
            <Sectiontitle 
                heading={"ORDER ONLINE"}
                subheading={"From 11:00am to 10:00pm"}
            ></Sectiontitle>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="h-[400px] relative">
                            <img className="w-full h-full" src={slide1} alt="" />
                            <p className='text-white text-2xl tracking-wider font-semibold absolute bottom-10 left-1/2 -translate-x-1/2'>Salads</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] relative">
                            <img className="w-full" src={slide2} alt="" />
                            <p className='text-white text-2xl tracking-wider font-semibold absolute bottom-10 left-1/2 -translate-x-1/2'>Soups</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] relative">
                            <img className="w-full" src={slide3} alt="" />
                            <p className='text-white text-2xl tracking-wider font-semibold absolute bottom-10 left-1/2 -translate-x-1/2'>pizzas</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] relative">
                            <img className="w-full " src={slide4} alt="" />
                            <p className='text-white text-2xl tracking-wider font-semibold absolute bottom-10 left-1/2 -translate-x-1/2'>desserts</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] relative">
                            <img className="w-full" src={slide5} alt="" />
                            <p className='text-white text-2xl tracking-wider font-semibold absolute bottom-10 left-1/2 -translate-x-1/2'>Salads</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
    );
};

export default Category;