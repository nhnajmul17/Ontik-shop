import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import loginImg from '../../Images/login.png'

const Login = () => {
    const [logindata, setLoginData] = useState('');

    const { login } = useFirebase()

    const location = useLocation();
    const navigate = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newdata = { ...logindata }
        newdata[field] = value
        setLoginData(newdata)
    }

    const handleLogin = e => {
        e.preventDefault();
        login(logindata.email, logindata.password, location, navigate)

    }
    return (
        <div className='m-5'>
            <h2>Login To Ontik</h2>

            <div className="row">
                <div data-aos="flip-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="col-md-6 col-sm-12">
                    <img className='img-fluid' src={loginImg} alt="login-img" />

                </div>
                <div data-aos="flip-down" data-aos-easing="linear"
                    data-aos-duration="1500" className="col-md-6 col-sm-12 p-5">
                    <form onSubmit={handleLogin}>
                        <label>Email</label><br />
                        <input className='rounded-pill' onBlur={handleOnChange} name='email' type="text" /><br />
                        <label>Password</label><br />
                        <input className='rounded-pill' onBlur={handleOnChange} name='password' type='password' /><br />
                        <br />
                        <input className=' rounded-pill btn btn-warning' type="submit" value="Login" />
                    </form>
                    <br />

                    <p>   Don't Have An Account?  <Link to='/signup'>Register Now </Link></p>
                    <p>   Forgot your Password?  <Link to='/resetpass'>Reset Now </Link></p>

                </div>
            </div>

        </div>
    );
};

export default Login;