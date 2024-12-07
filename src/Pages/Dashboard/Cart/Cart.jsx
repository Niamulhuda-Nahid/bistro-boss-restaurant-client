import React from 'react';
import Sectiontitle from '../../../components/Sectiontitle';
import useCart from '../../../hooks/useCart';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    const handleDeleteToCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/carts/${id}`)
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } catch (err) {
                    console.log(err.message)
                }
            }
        });
    }

    return (
        <div>
            <Sectiontitle heading={'WANNA ADD MORE?'} subheading={'My Cart'}></Sectiontitle>
            <div className='bg-[#ffffff] m-14 p-12'>
                <div className='flex justify-between mb-8'>
                    <h3 className='text-3xl font-bold'>Total orders: {cart.length}</h3>
                    <h4 className='text-3xl font-bold'>Total price: ${totalPrice}</h4>
                    <button className='px-3.5 py-1.5 bg-[#d1a054] text-lg font-semibold rounded text-white'>PAY</button>
                </div>
                <div>
                    <div className="overflow-x-auto rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#d1a054] text-white'>
                                <tr>
                                    <th> </th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) =>
                                        <tr key={item._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="w-20 rounded">
                                                        <img
                                                            src={item.image}
                                                            alt="Tailwind-CSS-Avatar-component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-[#737373]'>{item.name}</td>
                                            <td className='text-[#737373]'>{item.price}</td>
                                            <th>
                                                <button onClick={() => handleDeleteToCart(item._id)} className='bg-[#b91c1c] text-2xl p-2.5 text-white rounded'><RiDeleteBin6Line /></button>
                                            </th>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;