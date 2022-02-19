import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux/ShopSlice/ShopSlice';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const items = useSelector((state) => state.shop.items.slice(0, 6))

    return (
        <div className='p-5'>
            <Row xs={1} md={3} className="g-4">

                {
                    items.map(item => <SingleProduct key={item._id} item={item}></SingleProduct>)
                }
            </Row>


        </div>
    );
};

export default Products;