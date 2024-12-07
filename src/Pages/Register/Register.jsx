import React, { useContext } from 'react';
import authentication1 from '../../assets/others/authentication2.png'
import authentication from '../../assets/others/authentication.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const result = await createUser(data.email, data.password);
            await updateUserProfile(data.name, data.photoURL);
            // optimistic ui update
            setUser({ ...result?.user, photoURL: data.photoURL, displayName: data.name });
            const userInfo = {
                name: data.name,
                email: data.email
            }
            const saveUser = await axiosPublic.post('/users', userInfo);
            console.log(saveUser);
            navigate('/');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfull",
                showConfirmButton: false,
                timer: 1500
              });
            reset();
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen"
            style={{
                backgroundImage: `url('${authentication}')`,
            }}
        >
            <div className="hero-content flex-col md:flex-row-reverse shadow-2xl my-12 px-28 py-5"
                style={{
                    backgroundImage: `url('${authentication}')`,
                }}
            >
                <div className="text-center lg:text-left">
                    <img src={authentication1} alt="" />
                </div>
                <div className="card w-full max-w-sm shrink-0 ">
                    <h3 className='font-bold text-3xl text-center'>Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Enter your photoURL" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                })} placeholder="Enter your password" className="input input-bordered mb-3" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be geter then 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less then 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be have one uppercase, one lowercase, one number and one special characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className={`py-2.5 cursor-pointer rounded-sm bg-[#d1a054] text-white text-lg font-medium`} type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="flex items-center justify-center py-4 text-center text-[#d1a054]">
                        <span className="text-sm ">Already registered? </span>
                        <Link to='/login' className="mx-2 text-sm font-bold ">Go to log in</Link>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;