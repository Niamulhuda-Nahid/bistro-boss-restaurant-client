import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} showArrows={false}>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img1} />
                </div>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img2} />
                </div>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img3} />
                </div>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img4} />
                </div>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img5} />
                </div>
                <div className='h-[530px]'>
                    <img className="w-full h-full object-cover" src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;