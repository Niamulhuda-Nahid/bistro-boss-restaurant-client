import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={image}
            bgImageAlt="the cover"
            strength={-200}
        >
            <div className="bg-cover bg-center p-28  bg-fixed">
                <div className='py-20 px-24 text-center  bg-[#322d2d] bg-opacity-50'>
                    <h1 className="text-white text-4xl font-bold tracking-[.05em] uppercase mb-4">{title}</h1>
                    <p className='text-white text-sm'>{description}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;