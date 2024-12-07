import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink 
            to={to}
            className={({isActive}) => isActive ? 'flex items-center font-medium text-xl gap-2 text-white' : 'flex items-center font-medium text-xl gap-2 text-black'}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;