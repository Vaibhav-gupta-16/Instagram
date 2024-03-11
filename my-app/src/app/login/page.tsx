import Link from 'next/link'
import React from 'react'
import './login.css'
import '@fortawesome/fontawesome-svg-core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCompass, faHome, faPersonDotsFromLine, faSearch, faSquarePlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import { faFacebookMessenger, faRedRiver } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons/faClapperboard'
export default function page() {
    return (
        <>

            <div className="container-fluid cf">
                <div className="row">
                    <div className="col-2 a">
                        <h1>Instagram</h1>

                        <ul>
                            <li><FontAwesomeIcon className='mr-3' icon={faHome} size='1x' />  Home</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faSearch} size='1x' /> Search</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faCompass} size='1x' /> Explore</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faClapperboard} size='1x' /> Reels</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faFacebookMessenger} size='1x' /> Messages</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faHeart} size='1x' /> Notifications</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faSquarePlus} size='1x' /> Create</li>
                            <li><span id='p'></span> Profile</li>
                        </ul>
                        <div>
                            <ul className='bf'>
                                <li> @ Threads</li>
                                <li> <FontAwesomeIcon className='mr-3' icon={faBars} size='1x' />  More</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 b">
                        <div className="container-fluid cf2">
                            <div className="row r2 flex carousel slide">
                                <div className="carousel-inner">
                                    <div className='d1 carousel-item active'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                    <div className='d1 carousel-item'></div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className="row r3"></div>
                        </div>
                    </div>

                    <div className="col-4 c">

                    </div>

                </div>
            </div>

        </>
    )
}
