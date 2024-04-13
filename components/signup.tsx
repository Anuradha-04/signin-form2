import React from 'react';

const Signup = () => {
    return (
        <div>
            <div>
                <div className='bg-blue-700 h-screen w-full p-6'>
                    <div className="rounded-lg mx-auto mt-[4%] max-w-[500px] min-h-[500px] bg-white">
                        <div className='flex justify-center pt-[3%]'>

                            <div>
                                <div className='mx-[5%] mt-[15%] font-bold text-[35px]' >
                                    Signup Form
                                </div>
                                <input className='mt-[8%] hover:bg-blue-100 border border-black p-4 shadow shadow-blue-500 hover-blue rounded ' type="Email Address" placeholder='Email Address' />
                                <div>

                                    <input className='mt-[8%] hover:bg-blue-100 border border-black p-4 shadow shadow-blue-500 hover-blue rounded ' type="Password" placeholder='Password' />
                                    <div>
                                        <input className='mt-[8%] hover:bg-blue-100 border border-black p-4 shadow shadow-blue-500 hover-blue rounded ' type=" Confirm Password" placeholder='Confirm Password' />

                                    </div>
                                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-sm-bold p-3 mt-6 px-[37%] mx-[4px] border border-black'>
                                        Signup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup