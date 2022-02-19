import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div >
            <div className='p-5 m-5' >
                <Link className=' fw-bold text-secondary me-3' to='/admin/allorders'> All Orders</Link>
                <Link className=' fw-bold text-secondary me-3 ' to='/admin/addproduct'> Add Product</Link>
                <Link className=' fw-bold text-secondary' to='/admin/manageAllProducts'> Manage All Products</Link>
                <h1 className='justify-content-center align-items-center'>Welcome To Admin Dashboard</h1>


            </div>
            <Outlet></Outlet>
        </div >
    );
};

export default AdminDashboard;