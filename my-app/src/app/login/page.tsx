import Link from 'next/link'
import React from 'react'
import './login.css'
import '@fortawesome/fontawesome-svg-core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faComment, faCompass, faEllipsis, faHome, faPaperPlane, faPersonDotsFromLine, faSearch, faSquarePlus, faVideo } from '@fortawesome/free-solid-svg-icons'
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
                            <div className="row r2  ">
                                <div className="story">
                                    <div className='d1 '>1</div>
                                    <div className='d1 '>2</div>
                                    <div className='d1 '>3</div>
                                    <div className='d1 '>4</div>
                                    <div className='d1 '>5</div>
                                    <div className='d1 '>6</div>
                                    <div className='d1 '>7</div>
                                    <div className='d1 '>8</div>
                                    <div className='d1 '>9</div>
                                    <div className='d1 '>10</div>
                                    <div className='d1 '>11</div>
                                    <div className='d1 '>12</div>
                                    <div className='d1 '>13</div>
                                    <div className='d1 '>14</div>
                                    <div className='d1 '>15</div>
                                    <div className='d1 '>16</div>
                                    <div className='d1 '>17</div>

                                </div>


                            </div>

                            <div className="row r3">

                                <div className='h1'>
                                    <div className='dp'></div>
                                    <p className='p1'> Account name</p>
                                    <FontAwesomeIcon className='f1' icon={faEllipsis} size='1x' />

                                    <div className='pp1'>
                                    </div>

                                    <ul className='flex fonti'>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faHeart} size='1x' /></li>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faComment} size='1x' /></li>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faPaperPlane} size='1x' /></li>

                                    </ul>
                                </div>


                                <div className='h2'>
                                    <div className='dp'></div>
                                    <p className='p1'> Account name</p>
                                    <FontAwesomeIcon className='f1' icon={faEllipsis} size='1x' />

                                    <div className='pp1'>
                                    </div>

                                    <ul className='flex fonti'>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faHeart} size='1x' /></li>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faComment} size='1x' /></li>
                                        <li><FontAwesomeIcon className='m-1 pi' icon={faPaperPlane} size='1x' /></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 c">

                        <div className='suggest'>
                            <div className="yourphoto"></div>
                            <div className='nm'>
                                16vaibhav_
                                <br /><p>Vaibhav Gupta</p>
                            </div>
                            <div className="switch">switch</div>
                        </div>

                        <div className='suggest1'>
                            <div className="yourphoto"></div>
                            <div className='nm'>
                                16vaibhav_
                                <br /><p>Vaibhav Gupta</p>
                            </div>
                            <div className="switch">switch</div>
                        </div>

                        <div className='suggest2'>
                            <div className="yourphoto"></div>
                            <div className='nm'>
                                16vaibhav_
                                <br /><p>Vaibhav Gupta</p>
                            </div>
                            <div className="switch">switch</div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}
