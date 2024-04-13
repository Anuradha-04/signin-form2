"use client";

import React from 'react';
interface ISigninProps {
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signin: React.FC<ISigninProps> = ({ setShowSignup }) => {

    const handleSignup = () => {
        setShowSignup(true)
    }

    return (
        <div>
            <div className=' bg-blue-700 h-screen w-full p-6'>
                <div className="rounded-lg mx-auto mt-[4%] max-w-[500px] min-h-[500px] bg-white">
                    <div className='flex justify-center pt-[3%]'>

                        <div>
                            <div className='mx-[5%] mt-[15%] font-bold text-[35px]' >
                                Signin Form
                            </div>
                            <input className='mt-[10%] hover:bg-blue-100 border border-black p-4 shadow shadow-blue-500 hover-blue rounded ' type="Email Address" placeholder='Email Address' />
                            <div>
                                <input className='mt-[8%] hover:bg-blue-100 border border-black p-4 shadow shadow-blue-500 hover-blue rounded ' type="Password" placeholder='Password' />
                                <div className='mt-3 mx-1 p-1 text-blue-600 underline cursor-pointer' >
                                    Forgot password?
                                </div>
                                <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-sm-bold p-3 mt-3 px-[40%] mx-[4px] border border-black'>
                                    Login
                                </button>
                                <div className='mt-3 p-2 mx-3'>
                                    Not a member? <span className='underline cursor-pointer text-blue-600' onClick={handleSignup}>Signup now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin