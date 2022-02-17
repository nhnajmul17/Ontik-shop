import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [registerdata, setRegisterData] = useState({})
    const { register } = useAuth()
    const navigate = useNavigate()


    const handleOnChange = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerdata }
        newData[field] = value
        setRegisterData(newData)
    }

    const handleRegister = e => {
        e.preventDefault()
        register(registerdata.email, registerdata.password, registerdata.name, navigate)

    }
    return (
        <div className='m-5'>
            <h1>Register Now </h1>

            <form onSubmit={handleRegister}>
                <label htmlFor="">Name</label><br />
                <input type="text" name="name"
                    onChange={handleOnChange} id="" placeholder='Your Name' /><br />
                <label htmlFor="">Email</label><br />
                <input type="email" name="email"
                    onChange={handleOnChange} id="" placeholder='Your Email' /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" name="password"
                    onChange={handleOnChange} id="" placeholder='Your Password' /><br /><br />
                <input type="submit" value="Register" />

            </form>
            <br />

            <br /><br />
            <p>   Already have an account? <Link to='/login'>Login Now </Link></p>

            {/* <p className='text-danger'>{error}</p> */}
        </div>
    );
};

export default Signup;