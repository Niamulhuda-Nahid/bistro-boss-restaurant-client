import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;

    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px] h-[104px]' src={image} alt="" />
            <div>
                <h1 className='text-xl mb-3'>{name} ------------------</h1>
                <p className='text-base text-gray-500'>{recipe}</p>
            </div>
            <p className='text-[#d99904] text-xl'>${price}</p>
        </div>
    );
};

export default MenuItem;