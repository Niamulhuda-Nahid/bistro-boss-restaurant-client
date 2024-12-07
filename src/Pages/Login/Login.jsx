import React, { useContext, useEffect, useState } from 'react';
import authentication1 from '../../assets/others/authentication2.png'
import authentication from '../../assets/others/authentication.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [disable, setDisable] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        try{
            const result = await signIn(email, password);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfull",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });
        } catch(err) {
            console.log(err?.message)
        }
    }

    // const handleLogin
    return (
        <div className="hero bg-base-200 min-h-screen"
            style={{
                backgroundImage: `url('${authentication}')`,
            }}
        >
            <div className="hero-content flex-col md:flex-row shadow-2xl my-12 px-28 py-5"
                style={{
                    backgroundImage: `url('${authentication}')`,
                }}
            >
                <div className="text-center lg:text-left">
                    <img src={authentication1} alt="" />
                </div>
                <div className="card w-full max-w-sm shrink-0 ">
                    <h3 className='font-bold text-3xl text-center'>Login</h3>
                    <form onSubmit={handleSignIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered mb-3" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className={`py-2.5 rounded-sm bg-[#d1a054] text-white text-lg font-medium ${disable ? 'cursor-not-allowed bg-[#d19f5486]' : 'cursor-pointer'}`} type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className="flex items-center justify-center py-4 text-center text-[#d1a054]">
                        <span className="text-sm ">New here? </span>
                        <Link to='/register' className="mx-2 text-sm font-bold ">Create a New Account</Link>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;