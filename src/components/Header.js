import React from 'react'
import { useSelector } from 'react-redux'


function Header() {
    const budget = useSelector((state) => state.products.budget)
    return (
        <div>
            
            <h1>Spend Money with React-Redux</h1>
            <h1>${budget}</h1>
        </div>
    )
}

export default Header