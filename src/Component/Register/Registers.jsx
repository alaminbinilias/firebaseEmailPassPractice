import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';

const Registers = () => {

    const [error, seterror] = useState('');
    const [success, setsuccess] = useState(false);

    const [showPass,setshowPass]=useState(false);


    const HandleSubmit = (e) => {
        e.preventDefault();
        const C_email = e.target.email.value;
        const C_pass = e.target.password.value;
        //console.log(C_email,C_pass);
        seterror('');
        setsuccess(false);

        //Email Pattern Match 

        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!emailPattern.test(C_email)) {
            seterror("Please Enter Your Vaild Email");
            return;
        }

        //Email Pattern Match

        //password match

        const passLength = /^.{6,}$/;

        if (!passLength.test(C_pass)) {
            seterror("Password Must be 6 character or Longer");
            return;
        }

        const CASEPass = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (!CASEPass.test(C_pass)) {
            seterror('Password Must Contain Atleast one UpperCase Letter & one LoweCase Letter');
            return;
        }

        const SymbolPass =



            createUserWithEmailAndPassword(auth, C_email, C_pass).then(result => {
                console.log(result.user);
                setsuccess(true);
                e.target.reset();

            }).catch(err => {
                console.log(err.code);
                if (err.code === "auth/email-already-in-use") {
                    seterror("This Email already Used");
                    return;
                }
                else if (C_email === '') {
                    seterror("Please enter Your Email");
                    return;
                }

            })
    }

    const HandleEye=(e)=>{
        e.preventDefault();
        if(showPass===false){
            setshowPass(true);
        }
        else{
            setshowPass(false);
        }
    }



    return (
        <div>


            <div className='flex items-center justify-center mt-50'>
                <form onSubmit={HandleSubmit}>
                    <fieldset className="fieldset bg-base-200  border-base-100 rounded-box w-md border p-12">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-90" placeholder="Email" />

                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPass===true ? "text" : "password"} name='password' className="input w-90" placeholder="Password"/>
                            <button onClick={HandleEye} className='cursor-pointer absolute top-4 right-4'>{
                               showPass===true ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }</button>
                        </div>

                        <button className="btn btn-primary mt-4 w-90">Register</button>
                        {
                            success === true && <p className='text-[0.9rem] text-green-400'>Register Successfully</p>
                        }
                        <p className='text-[0.9rem] text-red-400'>{error}</p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Registers;