import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";

const Header = () => {
    const navigate = useNavigate()

    const [menuCollapse, setMenuCollpase] = useState(false)
    const [token, setToken] = useState('')

    // handle logout
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('existingUser')
        navigate('/login')
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
    }, [])
    return (
        <>
            <nav>
                <div className="container-fluid p-3" >
                    <div className="d-flex align-items-center justify-content-between w-100 px-4">
                        <div className=" d-flex justify-content-between w-100">
                            {location.pathname != '/adminmenu' ? <Link to={'/'}> <img src="https://www.deepnetsoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdns-blue-white.edf98572.png&w=3840&q=75" alt="no img" style={{ width: '150px', userSelect: 'none' }} /></Link>
                                :
                                <Link to={''}> <img src="https://www.deepnetsoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdns-blue-white.edf98572.png&w=3840&q=75" alt="no img" style={{ width: '150px', userSelect: 'none' }} /></Link>}

                            <div className='d-lg-none'>
                                <FaBars onClick={() => setMenuCollpase(!menuCollapse)} className='fs-4' />
                            </div>
                        </div>
                        <div className="w-100 d-none d-lg-flex align-items-center justify-content-center">
                            {location.pathname != '/adminmenu' && <ul className='list-unstyled text-white d-flex justify-content-end w-100 align-items-center'>
                                <Link to={'/'} className='text-decoration-none text-white'><li className='me-4'>HOME</li></Link>
                                <Link to={'/'} className='text-decoration-none text-white'><li className='me-4'>MENU</li></Link>
                                <Link to={''} className='text-decoration-none text-white'><li className='me-4'>MAKE A RESERVATION</li></Link>
                                <Link to={''} className='text-decoration-none text-white'><li className='me-4'>CONTACT US</li></Link>
                            </ul>}
                            {token ?
                                <div className={location.pathname =='/adminmenu' ?'w-100 d-flex justify-content-end':""}>
                                    <button onClick={handleLogout} className='btn text-danger fs-5' style={{ marginTop: '-15px' }}><FaPowerOff /></button>
                                </div>
                                :
                                <div className={location.pathname =='/adminmenu' ?'w-100 d-flex justify-content-end':""}>
                                    <Link to={'/login'}><button className='btn text-success fs-5' style={{ marginTop: '-15px' }}><FaPowerOff /></button></Link>
                                </div>
                            }
                        </div>
                    </div>

                    {menuCollapse && <div className="w-100 d-lg-none">
                        {location.pathname != '/adminmenu' && <ul className='list-unstyled text-white justify-content-end w-100 ps-4 pt-3'>
                            <Link to={'/'} className='text-decoration-none text-white'><li className='me-4'>HOME</li></Link>
                            <Link to={'/'} className='text-decoration-none text-white'><li className='me-4'>MENU</li></Link>
                            <Link to={''} className='text-decoration-none text-white'><li className='me-4'>MAKE A RESERVATION</li></Link>
                            <Link to={''} className='text-decoration-none text-white'><li className='me-4'>CONTACT US</li></Link>
                            {token ? <li><button onClick={handleLogout} className='btn text-danger fs-5'><FaPowerOff /></button></li>
                                :
                                <Link to={'/login'}> <li><button className='btn text-success fs-5'><FaPowerOff /></button></li></Link>}
                        </ul>}
                    </div>}
                </div>
            </nav>

        </>
    )
}

export default Header