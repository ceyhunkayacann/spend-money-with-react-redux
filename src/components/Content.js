import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import Products from './Products'
import './products.css'

function Content() {
    const products = useSelector((state) => state.products.items)
    console.log(products);

    return (
        <>
            <div className='container'>
                {
                    products.map((product) => (
                        <Products key={product.id} id={product.id} item={product} />
                    ))
                }
            </div>
            <Cart />

        </>
    )
}

export default Content