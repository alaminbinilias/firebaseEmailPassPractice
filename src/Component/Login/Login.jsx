import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [error, seterror] = useState('');
    const [success, setsuccess] = useState(false);
    const [email, setemail] = useState("");
    const [isverifiedemail, setisverifiedemail] = useState(false);

    const HandleLogin = (e) => {
        e.preventDefault();
        const L_email = e.target.email.value;
        const L_password = e.target.password.value;
        setemail(L_email);
        //console.log(L_email, L_password);
        seterror('');

        if (L_email === '' || L_password === '') {
            seterror("Please Enter Your Credentials");
            return;
        }
        signInWithEmailAndPassword(auth, L_email, L_password).
            then(result => {
                setisverifiedemail(result.user.emailVerified);
                //console.log(isverifiedEmail);

                if (isverifiedemail === true) {
                    alert("Login SuccessFully");
                    e.target.reset();
                }
                else {
                    seterror("Please Verified this email using Gmail");
                    return;
                }
            }).
            catch(err => {

                const errMsg = err.code;
                console.log(errMsg);
                if (errMsg === "auth/invalid-credential") {
                    seterror("Please use your valid credentials");
                    return;
                }
            });
    }


    const HandleshowPassBtn = (e) => {
        e.preventDefault();
        if (success === false) {
            setsuccess(true);
        }
        else {
            setsuccess(false);
        }
    }

    const HandleForgetPass = () => {
        sendPasswordResetEmail(auth,email).then(result=>{
            alert("Please check your Gmail");
            console.log(result);
        }).catch(err=>console.log(err));
    }


    return (
        <div className="hero bg-base-200 h-full">
            <div>
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-7 p-2">
                    <div className="card-body">
                        <form onSubmit={HandleLogin}>
                            <fieldset className="fieldset">
                                <label className="label text-[1rem]">Email</label>
                                <input type="email" name='email' className="input w-78" placeholder="Email" />
                                <label className="label text-[1rem]">Password</label>
                                <div className='relative'>
                                    <input type={success === true ? "text" : "password"} name='password' className="input" placeholder="Password" />
                                    <button onClick={HandleshowPassBtn} className=' cursor-pointer absolute p-0 top-4 right-4'>{success === false ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                </div>
                                <Link onClick={HandleForgetPass} className="link link-hover text-[1rem]">Forgot password?</Link>
                                <button className="btn bg-[#27ae60]">Login</button>
                            </fieldset>
                            <p className='mt-2 text-[1rem] text-red-600'>{error}</p>
                            <p className='text-lg'>Don't Have an account<Link to='/register' className='text-blue-400 ml-2 underline'>Register Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;