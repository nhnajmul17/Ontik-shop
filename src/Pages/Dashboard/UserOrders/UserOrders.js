import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const UserOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div className='p-5'>
            <h3>You Have {orders.length} Orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(pd =>
                        <tr key={pd._id}>
                            <td>{pd.name}</td>
                            <td>{pd.quantity}</td>
                            <td>${pd.price}</td>
                            <td>{pd.createdAt}</td>
                        </tr>)

                    }

                </tbody>
            </Table>

        </div>
    );
};

export default UserOrders;