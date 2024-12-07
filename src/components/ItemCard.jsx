import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const ItemCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = async () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            try {
                const { data } = await axiosSecure.post(`/carts`, cartItem);
                // console.log(data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} has been saved in cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();

            } catch (err) {
                console.log(err)
            }
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="w-full max-w-xs overflow-hidden bg-[#f3f3f3] relative">
                <img
                    className="object-cover w-full h-56"
                    src={image}
                    alt="avatar"
                />
                <p className='absolute bg-[#111827] text-white font-medium text-base py-1 px-3 rounded-sm right-5 top-5'>${price}</p>
                <div className="py-5 text-center leading-[0px]">
                    <p className="text-xl font-semibold text-black mb-3" role="link">
                        {name}
                    </p>
                    <span className="text-sm text-gray-500">{recipe}</span>
                </div>
                <div className='mb-6 text-center'>
                    <Link className="relative inline-flex items-center justify-start py-3 px-7 overflow-hidden font-semibold text-[#bb8406] transition-all duration-150 ease-in-out rounded bg-[#e8e8e8] group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#bb8406] group-hover:bg-[#1f2937] group-hover:h-full"></span>
                        <span
                            onClick={handleAddToCart}
                            className="relative w-full transition-colors duration-200 ease-in-out group-hover:text-[#bb8406] uppercase">add to cart</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;