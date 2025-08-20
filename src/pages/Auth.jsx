import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginApi, registerApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

const Auth = ({ register }) => {
    const navigate = useNavigate()

    const [passwordEye, setPAsswordEye] = useState(false)
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    // console.log(userDetails);

    // User Registration
    const handleRegister = async () => {
        const { username, email, password } = userDetails

        if (!username || !email || !password) {
            toast.error('please fill the form completely')
        }
        else {
            const result = await registerApi({ username, email, password })
            console.log(result);

            if (result.status == 200) {
                toast.success('Registered Succesfully')
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate('/login')
            }
            else if (result.status == 402) {
                toast.info(result.response.data)
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    // User Login
    const handleLogin = async () => {
        const { email, password } = userDetails

        if (!email || !password) {
            toast.error('Please fill the form completely')
        }
        else {
            const result = await loginApi({ email, password })
            console.log(result);

            if (result.status == 200) {
                toast.success('login successfully')
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })

                sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser))
                sessionStorage.setItem('token', result.data.token)

            }
            else if (result.status == 409) {
                toast.error(result.response.data)
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
            else if (result.status == 403) {
                toast.error(result.response.data)
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/271681.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '100%' }}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center mt-5 ">
                        <h3 className='text-white'>DNS</h3>
                        <form className='form-control  d-flex flex-column justify-content-center align-items-center px-4' style={{ backgroundColor: 'rgba(0, 0, 47, 1)', border: 'transparent', marginTop: '10px' }}>
                            <div className='d-flex flex-column align-items-center mb-3 mt-3'>
                                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" alt="no img" style={{ width: '150px' }} />

                                {!register ? <h4 className='mt-2 text-white'>Login</h4>
                                    :
                                    <h4 className='mt-2 text-white'>Register</h4>}
                            </div>

                            {register && <div className='w-100 mb-4'>
                                <input type="text" name='username' placeholder='username' className='form-control' value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                            </div>
                            }
                            <div className='w-100 mb-4'>
                                <input type="text" name='email' placeholder='Email' className='form-control' value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                            </div>

                            <div className='w-100 mb-3'>
                                <div className='d-flex align-items-center'>
                                    <input type={!passwordEye ? "password" : "text"} placeholder='Password' name='password' className='form-control' value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                                    {passwordEye ? <FaRegEye onClick={() => setPAsswordEye(!passwordEye)} style={{ marginLeft: '-30px', cursor: 'pointer' }} /> :
                                        <FaRegEyeSlash onClick={() => setPAsswordEye(!passwordEye)} style={{ marginLeft: '-30px', cursor: 'pointer' }} />}
                                </div>

                                <p className='text-warning mt-1 fw-bold' style={{ fontSize: '13px' }}>*Never Share your password with others</p>
                            </div>

                            {!register ? <div className='w-100'>
                                <button type='button' onClick={handleLogin} className='btn btn-success w-100'>Login</button>

                                <p className='text-white mt-2 text-center' style={{ fontSize: '15px' }}>Are you a New User ? <Link to={'/register'}>Register</Link></p>
                            </div>
                                :
                                <div className='w-100'>
                                    <button className='btn btn-success w-100' type='button' onClick={handleRegister}>Register</button>

                                    <p className='text-white mt-2 text-center' style={{ fontSize: '15px' }}>Are you Already a User ? <Link to={'/login'}>Login</Link></p>
                                </div>}
                        </form>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default Auth