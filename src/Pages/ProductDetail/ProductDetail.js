import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { fetchItems } from '../../Redux/ShopSlice/ShopSlice';


const ProductDetail = () => {
    const { id } = useParams()
    const { user, isLoading } = useAuth()

    const {
        register,
        handleSubmit,
    } = useForm();

    //newcode
    const [count, setCount] = useState(1)
    const increase = () => {
        setCount(count + 1)
        focusInput()
    }
    const decrease = () => {
        (count > 1 && setCount(count - 1))
        focusInput()
    }

    const focusInput = () => {
        document.getElementById('inputquantity').focus()
    }


    const onSubmit = (data) => {
        data.img = product.img
        data.name = product.name
        data.price = product.price;
        data.email = user.email;
        fetch('http://localhost:5000/addtocart', {
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
                        title: "Product Added!",
                        text: "Thank You!",
                        icon: "success",
                        button: "Ok",
                    });
                }
            })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    const products = useSelector(state => state.shop.items)
    if (products.length > 0) {
    }

    const product = products.find(product => product._id === id)



    return (
        <div className='m-auto p-5'>
            {isLoading ? <p>Loading...</p> : <div className='row'>
                <div className='col-md-6 col-sm-12' >
                    <img style={{ width: '300px' }} src={product?.img} alt="" />
                </div>
                <div className=' pt-5  col-md-6 col-sm-12'>
                    <h4 className='fw-bold'>{product?.name}</h4>
                    <h3 className='text-warning'>${product?.price}</h3>
                    <p>Category: {product?.category}</p>
                    <p className='fw-bold'>Seller: {product?.color}</p>
                    <p>Available {product?.stock}  only Product in stock.</p>
                    <Rating initialRating={product?.rating} readonly emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"></Rating>
                    <br />
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div className='m-2'>
                            <Button className='btn btn-warning' onClick={() => decrease()}>-</Button>
                            <input
                                style={{ width: '50px' }}
                                className='text-center mx-2'
                                value={count}
                                id="inputquantity"
                                {...register("quantity", {
                                    required: true,
                                })}
                            />
                            <Button className='btn btn-warning' onClick={() => increase()}>+</Button>
                        </div>
                        <Button className='btn btn-warning' type="submit" >
                            Add to cart
                        </Button>
                    </form>

                    {/*  <Button onClick={() => hanldeAddtocart(product._id)} className='btn btn-warning mt-2'>Add To Cart</Button> */}
                </div>
            </div>}
        </div>
    );
};

export default ProductDetail;