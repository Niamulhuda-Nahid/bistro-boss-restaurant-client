import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import image from '../../../assets/home/chef-service.jpg'
import PopularMenu from '../PopularMenu/PopularMenu';
import PopularItems from '../PopularItems/PopularItems';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-center p-28 my-14 bg-fixed">
                <div className='py-20 px-24 text-center text-black bg-white'>
                    <h1 className="text-black text-2xl font-semibold tracking-[.1em] uppercase mb-4">Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            <PopularMenu></PopularMenu>
            <div className='bg-[#151515] mb-20 text-center'>
                <h1 className='text-4xl font-semibold text-white py-20'>Call Us: +88 0192345678910</h1>
            </div>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;