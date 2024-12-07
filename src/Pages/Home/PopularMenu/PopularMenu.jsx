import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../components/Sectiontitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === "popular");
                setMenu(popularMenu);
            })
    }, [])

    return (
        <section className='mb-16'>
            <Sectiontitle
                heading={"FROM OUR MENU"}
                subheading={"Check it out"}
            ></Sectiontitle>
            <div className='grid md:grid-cols-2 gap-7'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='w-2/12 mx-auto mt-8 text-center'>
                <Link className="relative inline-flex items-center justify-start py-3 px-7 overflow-hidden font-semibold text-[#1f2937] transition-all duration-150 ease-in-out rounded bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1f2937] group-hover:h-full"></span>
                    <span className="relative w-full transition-colors duration-200 ease-in-out group-hover:text-white uppercase">View Full  Menu</span>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;