import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const[menuCollapse,setMenuCollpase]=useState(false)

    return (
        <>
            <nav>
                <div className="container-fluid p-3" >
                    <div className="d-flex align-items-center justify-content-between w-100 px-4">
                        <div className=" d-flex justify-content-between w-100">
                            <Link  to={'/'}> <img src="https://www.deepnetsoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdns-blue-white.edf98572.png&w=3840&q=75" alt="no img" style={{ width: '150px', userSelect: 'none' }} /></Link>

                            <div className='d-lg-none'>
                                <FaBars onClick={()=>setMenuCollpase(!menuCollapse)} className='fs-4'/>
                            </div>
                        </div>
                        <div className="w-100 d-none d-lg-flex">
                           {location.pathname !='/adminmenu' && <ul className='list-unstyled text-white d-flex justify-content-end w-100'>
                                <li className='me-4'>HOME</li>
                                <Link to={'/'} className='text-decoration-none text-white'><li className='me-4'>MENU</li></Link>
                                <li className='me-4'>MAKE A RESERVATION</li>
                                <li className='me-4'>CONTACT US</li>
                            </ul>}
                        </div>
                    </div>

                    {menuCollapse &&<div className="w-100 d-lg-none">
                            {location.pathname !='/adminmenu' &&<ul className='list-unstyled text-white justify-content-end w-100 ps-4 pt-3'>
                                <li className='mb-2'>HOME</li>
                                <Link to={'/'} className='text-decoration-none text-white'><li className='mb-2'>MENU</li></Link>
                                <li className='mb-2'>MAKE A RESERVATION</li>
                                <li className='mb-2'>CONTACT US</li>
                            </ul>}
                        </div>}
                </div>
            </nav>

        </>
    )
}

export default Header