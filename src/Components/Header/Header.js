import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // const addedcart = useSelector((state) => state.shop.addToCart)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/addtocart/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    const { user, logout } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' href="/">Ontik-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            {/* <Nav.Link as={Link} to="/orderreview">Order Review</Nav.Link> */}
                            {user.email && <Nav.Link as={Link} to="/userorders">User Orders</Nav.Link>}

                        </Nav>
                        <Nav>
                            {user?.email && <p className='text-white mt-2 me-5'>
                                Name: {user.displayName}
                            </p>}

                            {user?.email ? <Nav.Link onClick={logout} className='text-secondary'>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                            {/* <Nav.Link as={Link} to="/signup">Signup</Nav.Link> */}
                            <Link className=' text-decoration-none' to='/orderreview'><p className=' text-decoration-none text-secondary fw-b ms-4 pt-2'> <FontAwesomeIcon icon={faShoppingCart} />{' '}{orders?.length}</p></Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;