import React from 'react';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const SocialLogin = () => {
    return (
        <div className='text-center'>
            <span className='text-sm font-medium text-[#444444]'>Or sign in with</span>
            <div className='flex justify-center items-center gap-14 my-5 text-[#444444]'>
                <button className='border-[#444444] p-3 rounded-full border-2'>
                    <FaFacebookF />
                </button>
                <button className='border-[#444444] p-3 rounded-full border-2'>
                    <FaGoogle />
                </button>
                <button className='border-[#444444] p-3 rounded-full border-2'>
                    <IoLogoGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;