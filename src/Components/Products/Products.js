import React, { useEffect } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux/ShopSlice/ShopSlice';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let content;
    const items = useSelector((state) => state.shop.items.slice(0, 6))
    const { isLoading } = useSelector(state => state.shop)
    if (isLoading) {
        content = <Button variant="info" className='align-middle' disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }
    if (items.length) {
        content = items.map(item => <SingleProduct key={item._id} item={item}></SingleProduct>)
    }
    return (
        <div className='p-5'>
            <Row xs={1} md={3} className="g-4">

                {
                    content
                }
            </Row>


        </div>
    );
};

export default Products;