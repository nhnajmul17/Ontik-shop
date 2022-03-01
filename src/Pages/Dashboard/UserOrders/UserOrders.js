import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { fetchUserOrders } from '../../../Redux/ShopSlice/ShopSlice';

const UserOrders = () => {
    const { user } = useAuth()
    /* const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`https://safe-sands-77688.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
 */
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserOrders(user.email))
    }, [dispatch, user.email])

    const orders = useSelector(state => state.shop.userOrders)


    return (
        <div className='p-5'>
            <h3>You Have {orders.length} Orders</h3>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(pd =>
                        <tr key={pd._id}>
                            <td>{pd.name}</td>
                            <td>{pd.quantity}</td>
                            <td>${pd.price}</td>
                            <td>{pd.createdAt}</td>
                            <td>
                                {pd.status === "Pending" ? (
                                    (<Button className='btn btn-danger disabled'>Pending</Button>)
                                ) : (
                                    <Button
                                        className="btn btn-success"
                                        disabled
                                    >
                                        Delivered
                                    </Button>
                                )}

                            </td>

                        </tr>)

                    }

                </tbody>
            </Table>

        </div>
    );
};

export default UserOrders;