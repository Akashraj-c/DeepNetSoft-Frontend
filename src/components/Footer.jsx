import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="container py-4 px-5">
                <div className="row ">

                    <div className="col-md-4 mt-3" >
                        <div className=' d-flex  flex-column align-items-center  rounded py-3 ' style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>
                            <h5 style={{ color: 'rgba(235, 173, 4, 1)' }}>CONNECT WITH US</h5>
                            <div className="d-flex mt-2">
                                <FaPhoneAlt className='me-3' style={{ color: 'rgba(235, 173, 4, 1)' }} />
                                <h6 className='text-secondary'>+91 1234896754</h6>
                            </div>
                            <div className="d-flex">
                                <IoIosMail className='me-3' style={{ color: 'rgba(235, 173, 4, 1)' }} />
                                <h6 className='text-secondary'>info@deepnetsoft.com</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3">
                        <div className='d-flex flex-column align-items-center  rounded py-3 ' style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>
                            <img src="" alt="no" />
                            <div>
                                <h5><span style={{ color: 'rgba(235, 173, 4, 1)' }}>DEEP</span> <span>NET</span> <span className='text-secondary'>SOFT</span></h5>
                                <ul className='list-unstyled d-flex'>
                                    <li className='text-decoration-none me-3'><FaInstagram /></li>
                                    <li className='text-decoration-none me-3'><FaFacebook /></li>
                                    <li className='text-decoration-none me-3'><FaTwitter /></li>
                                    <li className='text-decoration-none me-3'><FaYoutube /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3">
                        <div className='d-flex flex-column align-items-center  rounded pt-3 pb-4' style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>

                            <h5 style={{ color: 'rgba(235, 173, 4, 1)' }}>FIND US</h5>
                            <div className="d-flex  align-items-center mt-2">
                                <FaLocationDot className='me-3' style={{ color: 'rgba(235, 173, 4, 1)' }} />
                                <h6 className='text-secondary'>First Floor, Geo infopark, <br /> Infopark EXY,Kakkanad</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-md-row flex-column justify-content-between px-5 align-items-center' style={{ backgroundColor: 'rgba(47, 47, 46, 1)' }}>
                <p>© 2025 Deepnetsoft Solutions. All rights reserved</p>
                <div className='d-flex'>
                    <p className='me-4'>Terms & condition</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    )
}

export default Footer