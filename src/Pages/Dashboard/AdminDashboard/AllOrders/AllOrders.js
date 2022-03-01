import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { fetchAllOrders } from '../../../../Redux/ShopSlice/ShopSlice';
import { useSelector } from 'react-redux';


const AllOrders = () => {
    /* const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://safe-sands-77688.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []) */

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [dispatch])

    const orders = useSelector(state => state.shop.allOrders)



    const handleUpdate = (id) => {
        fetch(`https://safe-sands-77688.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(orders),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Order Status Updated!",
                        icon: "success",
                        button: "Ok",
                    });
                }
            });
    }

    return (
        <div className='p-5'>
            <h2>Manage All Orders</h2>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr className='text-warning'>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Product Price</th>
                        <th>Ordered Date</th>
                        <th>Status</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                            <td>{order.createdAt}</td>
                            <td>

                                {order.status === "Pending" ? (
                                    <button
                                        onClick={() =>
                                            handleUpdate(order._id)
                                        }
                                        className="btn btn-danger"
                                    >
                                        Make Delivery
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-success"
                                        disabled
                                    >
                                        Delivered
                                    </button>
                                )}

                            </td>
                        </tr>)

                    }


                </tbody>
            </Table>
        </div>
    );
};

export default AllOrders;