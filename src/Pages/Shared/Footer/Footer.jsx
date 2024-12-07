import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="">
            <div className="">
                <div className="lg:flex justify-center">
                    <div className="w-full lg:w-1/2 bg-[#1f2937] text-center flex justify-center lg:justify-end lg:pr-20 py-10">
                        <div className=''>
                            <p className="text-white text-2xl font-medium">
                                CONTACT US
                            </p>
                            <p className="mt-2 text-white text-sm">
                                123 ABS Street, Uni 21, Bangladesh
                            </p>
                            <p className="mt-2 text-white text-sm">
                                +88 123456789
                            </p>
                            <p className="mt-2 text-white text-sm">
                                Mon - Fri: 08:00 - 22:00
                            </p>
                            <p className="mt-2 text-white text-sm">
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>

                    <div className="lg:mt-0 pb-5 lg:pb-0 lg:flex-1 bg-[#111827]">
                        <div className="text-center flex justify-center lg:justify-start lg:pl-20 py-10">
                            <div>
                                <h3 className="text-white uppercase text-2xl font-medium">Follow US</h3>
                                <span className="block mt-2 text-sm text-white">
                                    Join us on social media
                                </span>
                                <div className="flex mt-6 justify-center text-2xl items-center ">
                                    <Link to='#'
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit">
                                        <FaFacebookF />
                                    </Link>

                                    <Link to='#'
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook">
                                        <FaInstagram />
                                    </Link>

                                    <Link to='#'
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Github">
                                        <FaTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515]'>
                    <p className="text-center text-white py-4"> © {new Date().getFullYear()} Bistro-Boss-Restaurant by Nahid Pramanik - All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;