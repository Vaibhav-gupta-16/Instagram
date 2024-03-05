import Link from 'next/link'
import React from 'react'
import './login.css'
import '@fortawesome/fontawesome-svg-core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHome, faPersonDotsFromLine, faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import { faFacebookMessenger, faRedRiver } from '@fortawesome/free-brands-svg-icons'
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
                            <li><FontAwesomeIcon className='mr-3' icon={faRedRiver} size='1x' /> Reels</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faFacebookMessenger} size='1x' /> Messages</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faPersonDotsFromLine} size='1x' /> Notifications</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faHome} size='1x' /> Create</li>
                            <li><FontAwesomeIcon className='mr-3' icon={faHome} size='1x' /> Profile</li>
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
