import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../components/Sectiontitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/review`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    
    return (
        <section className='mb-20'>
            <Sectiontitle
                heading={"What Our Clients Say"}
                subheading={"TESTIMONIALS"}
            ></Sectiontitle>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 5000, // 3000 ms = 3 seconds
                        disableOnInteraction: false, // Allows autoplay to continue after interactions
                    }}
                    slidesPerView={'auto'}
                    loop={true}
                    className="mySwiper"
                >


                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='mx-14'>
                                <div className='w-2/12 mx-auto mb-5'>
                                    <Rating
                                        style={{ maxWidth: 180, color: '#cd9003'}}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='w-1/12 mx-auto mb-5 text-center'>
                                    <RiDoubleQuotesL className='text-8xl ' />
                                </div>
                                <div className='text-center'>

                                    <p className='text-sm text-gray-600'>{review.details}</p>
                                    <h1 className='text-xl font-medium text-[#CD9003] uppercase'>{review.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;