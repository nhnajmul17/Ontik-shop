import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [logindata, setLoginData] = useState('')
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
            <h1>Please Login</h1>
            <form onClick={handleLogin}>
                <label>Email</label><br />
                <input onBlur={handleOnChange} name='email' type="text" /><br />
                <label>Password</label><br />
                <input onBlur={handleOnChange} name='password' type='password' /><br />
                <br />
                <input type="submit" value="Login" />
            </form>
            <br />

            <p>   Don't Have An Account?  <Link to='/signup'>Register Now </Link></p>
        </div>
    );
};

export default Login;