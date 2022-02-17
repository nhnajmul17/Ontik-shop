/* import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Cart from '../../Components/Cart/Cart';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../Utiles/Fakedb';
import './Order.css'

const Order = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Order Placed Successfully!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                    clearTheCart();
                    reset();
                    window.location.reload()

                }
            })

    };

    return (
        <div className='mt-3'>
            <h3>Fill up the Form to place Order</h3>

            <div className="row">
                <div className='col-lg-6 col-sm-12 p-5'>
                    <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />

                        <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />

                        {errors.email && <span className='error'>This field is required</span>}

                        <input placeholder='Address'  {...register("Address")} />
                        <input placeholder='Phone Number'  {...register("phone")} />
                        <input type="Submit" />
                    </form>
                </div>
                <div className='mt-5 col-lg-6 col-sm-12'>
                    <Cart></Cart>

                </div>
            </div>

        </div>
    );
};

export default Order; */