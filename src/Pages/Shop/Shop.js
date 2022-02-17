import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SingleProduct from '../../Components/Products/SingleProduct/SingleProduct';
import { addToCart, fetchItems, setproducts } from '../../Redux/ShopSlice/ShopSlice';
import { getStoredCart } from '../../Utiles/Fakedb';


const Shop = () => {
    const AllItems = useSelector(state => state.shop.items)
    const products = useSelector(state => state.shop.searchItem)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    useEffect(() => {
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
                    dispatch(addToCart(storedCart))
                }
            })
    }, [dispatch])

    const [search, setsearch] = useState('')
    const searchName = e => {
        setsearch(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = search
        const matchProducts = AllItems.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        dispatch(setproducts(matchProducts))


    }



    return (
        <div className='p-5'>

            <div className='mb-5'>

                <form onSubmit={handleSearch}>
                    <input className='w-50  me-2'
                        type="text"
                        onBlur={searchName}
                        placeholder='Search your Product' />
                    <Button className='btn btn-warning rounded-pill' type='submit'>Search</Button>

                </form>

            </div>

            {(products.length === 0) ? <p>No Result Found</p>
                :

                <Row sm={1} md={3} className='g-4'>
                    {
                        products.map(product => <SingleProduct item={product} key={product._id}></SingleProduct>)
                    }

                </Row>

            }



        </div>
    );
};

export default Shop;