import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css'
/* import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { addToDb, getStoredCart } from '../../../Utiles/Fakedb';
import { addToCart } from '../../../Redux/ShopSlice/ShopSlice'; */
import Rating from 'react-rating';
const SingleProduct = (props) => {
    const { name, price, img, _id, rating } = props.item
    // const dispatch = useDispatch()
    /* const hanldeAddtocart = (id) => {
        addToDb(key)
        // dispatch(addToCart(props.item))
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart)

        fetch('http://localhost:5000/products/bykeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            //set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity
                            storedCart.push(addedProduct)
                        }
                    }
                    // setCart(storedCart)
                    dispatch(addToCart(storedCart))
                }
            })
        swal({
            title: "Product Added!",
            text: "Thank You!",
            icon: "success",
            button: "Ok",
        });

    } */



    return (
        <div >
            <div className='product' >
                <div className='product-img'>
                    <img className='w-50 ' src={img} alt="" />
                </div>

                <Link className=' text-decoration-none' to={`/detail/${_id}`} ><p className='fw-bold text-info product-detail'>View Detail</p> </Link>

                <h6>{name}</h6>
                <p className='text-secondary'>${price}</p>
                <Rating initialRating={rating} readonly emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"></Rating>
                <br />
                <Link to={`/detail/${_id}`}> <Button className='btn btn-warning add-to-cart'>Buy Now</Button>
                </Link>
            </div>

        </div>
    );
};

export default SingleProduct;