import React from 'react'
import { useSelector } from "react-redux";
import ProductItem from '../ProducItem/ProductItem';

function BusketPage()
{
    const { busket } = useSelector(state => state.busketSlice)

    return (
        <div>
            <h2>Busket</h2>
            {
                busket.length > 0 && busket.map(i => <ProductItem key={i._id} i={i} />)
            }
        </div>
    )
}

export default BusketPage