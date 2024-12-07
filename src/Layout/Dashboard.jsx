import React from 'react';
import { FaAd, FaCalendarAlt, FaHome, FaMoneyBillAlt } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { LuCalendarClock } from 'react-icons/lu';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink';
import { IoMdMenu } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-[#d1a054]">
                <div className='mt-8 ml-8 mb-8'>
                    <Link to='/' className='text-black uppercase leading-5 '>
                        <span className='font-extrabold text-xl tracking-[.12em] uppercase '>Bistro Boss</span> <br /> <span className='font-normal text-xl tracking-[.2em]'>restaurant</span>
                    </Link>
                </div>
                <ul className="ml-8 flex flex-col gap-3">
                    <ActiveLink to='/dashboard/home'>
                        <FaHome />
                        User Home
                    </ActiveLink>
                    <ActiveLink to='/dashboard/reservation'>
                        <FaCalendarAlt />
                        Reservation
                    </ActiveLink>
                    <ActiveLink to='/dashboard/payment'>
                        <FaMoneyBillAlt />
                        Payment History
                    </ActiveLink>
                    <ActiveLink to='/dashboard/cart'>
                        <FaCartShopping />
                        My Cart
                    </ActiveLink>
                    <ActiveLink to='/dashboard/review'>
                        <FaAd />
                        Add Review
                    </ActiveLink>
                    <ActiveLink to='/dashboard/booking'>
                        <LuCalendarClock />
                        My Booking
                    </ActiveLink>
                </ul>
                <div className='w-[90%] mx-auto h-[2px] bg-white my-6'></div>
                <ul className="ml-8 flex flex-col gap-3">
                    <ActiveLink to='/'>
                        <FaHome />
                        Home
                    </ActiveLink>
                    <ActiveLink to='/menu'>
                        <IoMdMenu />
                        Menu
                    </ActiveLink>
                    <ActiveLink to='/order/salad'>
                        <GiShoppingBag />
                        Shop
                    </ActiveLink>
                    <ActiveLink to='/'>
                        <MdEmail />
                        Contact
                    </ActiveLink>
                </ul>
            </div>
            <div className='flex-1 bg-[#f6f6f6]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;