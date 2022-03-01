import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const [orders, setOrders] = useState([])
    const { user, logout, admin } = useAuth()

    useEffect(() => {
        fetch(`https://safe-sands-77688.herokuapp.com/addtocart/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, orders])
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand data-aos="fade-right" data-aos-duration="2000" className='fw-bold' href="/">Ontik-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav data-aos="fade-left" data-aos-duration="2000" >
                            {user?.email && <p className='text-white mt-2 me-5'>
                                Name: {user.displayName}
                            </p>}

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            {user.email && <Nav.Link as={Link} to="/userorders">User Orders</Nav.Link>}
                            {admin && <Nav.Link as={Link} to="/admin">Admin DashBoard</Nav.Link>}


                            {user?.email ? <Nav.Link onClick={logout} className='text-secondary'>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                            <Link className=' text-decoration-none' to='/orderreview'><p className=' text-decoration-none text-secondary fw-b ms-4 pt-2'> <FontAwesomeIcon icon={faShoppingCart} />{' '}{orders?.length}</p></Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;