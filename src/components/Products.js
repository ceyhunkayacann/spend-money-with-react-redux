import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCount } from '../redux/productsSlice'
import './products.css'

function Products({ item, id }) {
    const [count, setCount] = useState(0)

    const budget = useSelector((state) => state.products.budget)
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(updateCount({ id: item.id, count: count }))
    }, [count])

    const buy = () => {
        setCount(Number(count) + 1)
    }
    const sell = () => {
        setCount(Number(count) - 1)
    }

    const handleChange = (value) => {
        const maxCount = Math.floor(budget / item.productPrice) + count;

        if (value && value > 0) {
            if (value > maxCount && budget >= 0) {
                setCount(maxCount);
            } else {
                setCount(value);
            }
        } else {
            setCount(0);
        }
    };

    return (
        <div className='products'>
            <div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <h3>{item.productName}</h3>
                    <h3>${item.productPrice}</h3>
                </div>
                <div>
                    <button disabled={item.count < 1}
                        onClick={sell}
                    >SELL</button>
                    <input
                        value={count}
                        onChange={(e) => handleChange(parseInt(e.target.value))}
                    />

                    <button
                        disabled={item.productPrice > budget}
                        onClick={buy}
                    >BUY</button>
                </div>
            </div>
        </div>
    )
}

export default Products