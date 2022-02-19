import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css'
import Rating from 'react-rating';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SingleProduct = (props) => {
    const { name, price, img, _id, rating } = props.item

    return (
        <div >
            <div className='product' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" >
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