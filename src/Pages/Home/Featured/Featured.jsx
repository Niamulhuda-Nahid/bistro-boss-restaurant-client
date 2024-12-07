import React from 'react';
import Sectiontitle from '../../../components/Sectiontitle';
import featuredImage from '../../../assets/home/featured.jpg';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url(${featuredImage})` }} className="bg-cover bg-fixed bg-center p-28 my-14  relative">
            <div className='bg-[#242b30] absolute inset-0 bg-opacity-65'></div>
            <div className='z-20'>
                <div className='text-center w-2/12 mx-auto mb-8'>
                    <p className='text-xs text-[#d99904] mb-3'>--- FROM OUR MENU ---</p>
                    <h1 className='border-y-2 py-3 text-xl font-semibold text-white'>Check it out</h1>
                </div>
                <div className='flex gap-12 px-[100px] justify-center items-center'>
                    <div className='grow  w-2/4 h-[250px] flex justify-end z-20'>
                        <img className='w-[400px] h-full' src={featuredImage} alt="" />
                    </div>
                    <div className='w-2/4 z-20'>
                        <p className='text-white'>{moment().format("MMMM D, YYYY")}</p>
                        <h1 className='text-white'>WHERE CAN I GET SOME?</h1>
                        <p className='text-white'>Efficiently extend performance based relationships after functionalized human capital. Interactively enable reliable synergy and unique supply chains. Compellingly implement pandemic users with user friendly "outside the box" thinking.</p>
                        <div className='mt-4'>
                            <Link className="relative inline-flex items-center justify-start py-3 px-4 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded  group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                                <span className="relative w-full transition-colors duration-200 ease-in-out group-hover:text-[#1f2937] uppercase">Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;