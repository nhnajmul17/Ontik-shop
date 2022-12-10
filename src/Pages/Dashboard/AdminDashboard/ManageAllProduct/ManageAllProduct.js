import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';
import { fetchProducts } from '../../../../Redux/ShopSlice/ShopSlice';

const ManageAllProduct = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const products = useSelector(state => state.shop.items)


    const handleDelete = id => {
        fetch(`https://ontik-shop.onrender.com/products/${id}`, {
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
                    const remaining = products.filter(order => order._id !== id)
                    products(remaining)
                }
            })
    }

    const handleUpdate = () => {
        swal({
            title: "Authorized People Can Only Update",
            icon: "info",
            button: "Ok",
        });

    }

    return (
        <div>
            <h3>Manage Product</h3>
            {/* {
                products.map(product => <p>{product.name}</p>)
            } */}

            <Table responsive bordered hover size="sm">
                <thead>
                    <tr className='text-warning'>
                        <th>#</th>
                        <th>Product</th>
                        <th>Product Price</th>
                        <th>Product InStock</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr>
                            <td>{index + 1}</td>

                            <td className="w-25 h-25"><img
                                className="w-50 h-50"
                                src={product.img}
                                alt=""
                            /></td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td> <button
                                onClick={() =>
                                    handleDelete(product._id)
                                }
                                className="btn btn-danger"
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />  Delete
                            </button>


                            </td>
                            <td> <button
                                onClick={() =>
                                    handleUpdate()
                                }
                                className="btn btn-info"
                            >
                                <FontAwesomeIcon icon={faPenAlt} /> Update
                            </button>


                            </td>
                        </tr>)

                    }


                </tbody>
            </Table>

        </div>
    );
};

export default ManageAllProduct;