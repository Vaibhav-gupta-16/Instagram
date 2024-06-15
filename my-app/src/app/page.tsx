"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    useEffect(() => {
        validform();
    }, [email, pass])

    const validform: any = () => {
        let errors = {};



        if (!email) {
            // errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            // errors.email = 'Email is invalid.';
        }

        if (!pass) {
            // errors.pass = 'Password is required.';
        } else if (pass.length < 6) {
            // errors.pass = 'Password must be at least 6 characters.';
        }

        setErrors(errors);
        setValid(Object.keys(errors).length === 0);
    };
    // Submit 
    const Submit = () => {
        if (valid) {
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };


    return (
        <>

            <div className="container">


                <div className="row1 d-flex m-3">
                    <div className="col-4 a"></div>
                    <div className="col-3 b"></div>
                    <div className="col-5 c  ">

                        <form className='py-2 px-2 '>

                            <h1 className='mt-5'>Instagram</h1><br />
                            <div>
                                <input placeholder='phone number,username or email' onChange={(e) => console.log(e)} type="text" />
                            </div>
                            <br />
                            <div>
                                <input placeholder='Password' onChange={(e) => { setEmail }} type="password" />
                            </div>
                            <br />
                            <Link href={'./login'}>
                                <div>
                                    <button className=' px-36 ' onClick={Submit}>Log in</button>
                                </div>
                            </Link>

                            <div className='d'></div>
                            <span>OR</span>

                            <div>Log in with Facebook</div>

                            <div className='my-4'>
                                <Link href={'./Fpass'}>Forgot password?</Link>
                            </div>
                        </form>

                        <div className='e'>
                            Don't have an account?<Link href={'./signup'}> <span>Sign up</span> </Link>
                        </div>

                        <div className="f">Get the app</div>

                        <div className='g'>
                            <div className="g1 "></div>
                            <div className="g2"></div>
                        </div>

                    </div>

                </div >


                <div className="row r2 ">
                    <div className="col-12">
                        <ul className='d-flex mt-4 justify-evenly align-middle'>
                            <li>Meta</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Help</li>
                            <li>API</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Locations</li>
                            <li>Instagram Lite</li>
                            <li>Threads</li>
                            <li>Contact Uploading & Non-Users</li>
                            <li>Meta Verified</li>
                        </ul>
                    </div>
                </div>

                <div className="row r3">
                    <div className="col-12 d-flex justify-center">
                        <p className='mx-3'>English︿ </p><p> ©2024 Instagram from Meta</p>
                    </div>
                </div>

            </div >

        </>
    )
}
