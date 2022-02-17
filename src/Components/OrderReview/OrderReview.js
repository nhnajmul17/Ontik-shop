import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { Table } from 'react-bootstrap';

const OrderReview = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/addtocart/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/addtocart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    swal({
                        title: "Product Deleted!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
    }

    const handleDeleteCart = (email) => {
        console.log(email);
        fetch(`http://localhost:5000/ordercart/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    swal({
                        title: "Order Placed!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                    const remaining = orders.filter(order => order.email !== email)
                    setOrders(remaining)
                }
            })

    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    let totalQuantity = 0;
    let total = 0;
    for (const product of orders) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + parseInt(product.quantity)
    }

    const shipping = total > 200 ? 50 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    const onSubmit = (data) => {
        data.quantity = totalQuantity
        data.price = grandTotal
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Order Placed Successfully!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                    handleDeleteCart(user.email)
                    reset()

                }
            })


    }

    return (
        // <div className='p-5'>
        <div>
            <div className="col">
                <h4>Cart</h4>
                <div className='p-5'>
                    <Table responsive className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Item name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Sub Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td className="w-25 h-25">
                                        <img
                                            className="w-50 h-50"
                                            src={order.img}
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <p>{order.name}</p>
                                    </td>
                                    <td>
                                        <p>${order.price}</p>
                                    </td>
                                    <td>
                                        <p>{order.quantity}</p>
                                    </td>
                                    <td>
                                        <p>${order.price * order.quantity}</p>
                                    </td>
                                    <td>
                                        <p>
                                            <button
                                                onClick={() =>
                                                    handleDelete(order._id)
                                                }
                                                className="btn-black delete"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                    className="fa-icon text-danger"
                                                />
                                            </button>
                                        </p>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan="6">
                                        <p>Your cart is empty!</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>


            <div className='mt-3'>
                <h3>Fill up the Form to place Order</h3>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-6 col-sm-12 mt-5'>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className='w-50 rounded mt-3' placeholder='Name' defaultValue={user.displayName} {...register("name")} /> <br />

                                <input className='w-50 rounded mt-3' placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} /> <br />

                                {/* {errors.email && <span className='error'>This field is required</span>} */}

                                <input className='w-50 rounded mt-3' placeholder='Address'  {...register("Address", {
                                    required: true,
                                })} /> <br />
                                <input className='w-50 rounded mt-3' placeholder='Phone Number'  {...register("phone", {
                                    required: true,
                                })} />
                                <br />
                                <button type="submit" className="btn btn-warning mt-3">
                                    Place order
                                </button>
                            </form>
                        </div>
                        <div className='mt-5 col-lg-6 col-sm-12'>
                            <div>
                                <h3>Order Summary</h3>
                                <h5>Items Ordered: {totalQuantity}</h5>

                                <p>Total: {total.toFixed(2)}</p>
                                <p>Shipping: {shipping}</p>
                                <p>Tax: {tax.toFixed(2)}</p>
                                <hr />
                                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default OrderReview;