import Link from 'next/link'
import React from 'react'
import './login.css'
export default function page() {
    return (
        <>

            <div className="container-fluid cf">
                <div className="row">
                    <div className="col-2 a">
                        <h1>Instagram</h1>

                        <ul>
                            <li>Home</li>
                            <li>Search</li>
                            <li>Explore</li>
                            <li>Reels</li>
                            <li>Messages</li>
                            <li>Notifications</li>
                            <li>Create</li>
                            <li>Profile</li>
                        </ul>
                        <div>
                            <ul className='bf'>
                                <li>Threads</li>
                                <li>More</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
