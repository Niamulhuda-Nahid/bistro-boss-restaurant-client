import React, { useContext, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { BsCartCheckFill } from "react-icons/bs";
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    return (
        <div className='fixed z-50 w-[95%]'>
            <nav className="relative bg-black bg-opacity-55 shadow ">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <Link className='text-white uppercase  leading-5'>
                                <span className='font-extrabold tracking-[.12em] uppercase'>Bistro Boss</span> <br /> <span className='font-normal tracking-[.2em]'>restaurant</span>
                            </Link>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <IoMdClose className="w-6 h-6" />
                                    ) : (
                                        <FiMenu className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                }`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <Link to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Home
                                </Link>
                                <Link to='/menu' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Our Menu
                                </Link>
                                <Link to='/order/salad' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Order
                                </Link>
                                <Link to='/secret' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Secret
                                </Link>
                                <Link to='/dashboard/cart' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <button className="flex items-center justify-center gap-1">
                                        <BsCartCheckFill className='text-XL' />
                                        <div className="badge badge-secondary">+{cart.length}</div>
                                    </button>
                                </Link>
                                {user ? <button onClick={() => logOut()} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Logout
                                </button> : <Link to='/login' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Login
                                </Link>}
                            </div>

                            <div className="flex items-center mt-4 lg:mt-0">
                                <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none" aria-label="show notifications">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                    </div>

                                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;