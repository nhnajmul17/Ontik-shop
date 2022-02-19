import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';



const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth()
    const location = useLocation()

    if (!admin || loading) { return <Spinner animation="border" variant="warning" /> }
    if (user.email && admin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />


};

export default AdminRoute;