import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';


const ResetPass = () => {
    const [resetdata, setresetData] = useState('')
    const [message, setMessage] = useState("");

    const { resetPassword } = useFirebase()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newdata = { ...resetdata }
        newdata[field] = value
        setresetData(newdata)
    }
    const handleReset = (e) => {
        e.preventDefault();
        resetPassword(resetdata.email)
        setMessage("Email Sent for Reset Password")
    }
    return (
        <div className=''>
            <div><h2>Reset Password</h2></div>
            {message && <p className="text-info">{message}</p>}
            <div data-aos="flip-down" data-aos-easing="linear"
                data-aos-duration="1500" className="p-5 m-5">
                <form onSubmit={handleReset}>
                    <label>Enter your Email</label><br />
                    <input className='rounded-pill my-3' onBlur={handleOnChange} name='email' type="text" /><br />
                    <input className=' rounded-pill btn btn-warning' type="submit" value="Reset" />
                </form>
                <br />

            </div>

        </div>
    );
};

export default ResetPass;