import React from 'react';
import { useLocation } from 'react-router-dom';

const Sectiontitle = ({heading, subheading}) => {
    const location = useLocation();
    const addCustomized = location.pathname.includes('dashboard/cart');

    return (
        <div className={`text-center mx-auto my-8 ${addCustomized ? 'w-3/12' :  'w-2/12'}`}>
            <p className='text-xs text-[#d99904] mb-3'>--- {subheading} ---</p>
            <h1 className='border-y-2 py-3 text-xl font-semibold'>{heading}</h1>
        </div>
    );
};

export default Sectiontitle;