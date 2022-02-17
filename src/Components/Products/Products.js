import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchItems, fetchProducts } from '../../Redux/ShopSlice/ShopSlice';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])


    const items = useSelector((state) => state.shop.items.slice(0, 6))
    // const items = useSelector((state) => state.shop.products.slice(0, 6))

    // const [cart, setCart] = useState()

    /*  useEffect(() => {
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
     }, [dispatch]) */


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