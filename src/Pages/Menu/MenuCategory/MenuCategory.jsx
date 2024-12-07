import React from 'react';
import Cover from '../Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg, description}) => {
    return (
        <div>
            {title && <Cover
                image={coverImg}
                title={title}
                description={description}
            ></Cover>}
              <div className='grid md:grid-cols-2 gap-7 mt-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='w-4/12 mx-auto mt-7 mb-16 text-center'>
                <Link to={`/order/${title}`} className="relative inline-flex items-center justify-start py-3 px-7 overflow-hidden font-semibold text-[#1f2937] transition-all duration-150 ease-in-out rounded bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1f2937] group-hover:h-full"></span>
                    <span className="relative w-full transition-colors duration-200 ease-in-out group-hover:text-white uppercase">ORDER YOUR FAVOURITE FOOD</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;