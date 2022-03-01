import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signupImg from '../../Images/signup.png'

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
            <h2>Register Now </h2>
            <div className="row">

                <div data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1500" className="col-md-6 col-sm-12 p-5">
                    <form onSubmit={handleRegister}>
                        <label htmlFor="">Name</label><br />
                        <input className='rounded-pill' type="text" name="name"
                            onChange={handleOnChange} id="" placeholder='Your Name' /><br />
                        <label htmlFor="">Email</label><br />
                        <input className='rounded-pill' type="email" name="email"
                            onChange={handleOnChange} id="" placeholder='Your Email' /><br />
                        <label htmlFor="">Password</label><br />
                        <input className='rounded-pill' type="password" name="password"
                            onChange={handleOnChange} id="" placeholder='Your Password' /><br /><br />
                        <input className=' rounded-pill btn btn-warning' type="submit" value="Register" />

                    </form>
                    <br />

                    <br /><br />
                    <p>   Already have an account? <Link to='/login'>Login Now </Link></p>

                </div>
                <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1500" className="col-md-6 col-sm-12">
                    <img className='img-fluid' src={signupImg} alt="login-img" />

                </div>
            </div>



            {/* <p className='text-danger'>{error}</p> */}
        </div>
    );
};

export default Signup;