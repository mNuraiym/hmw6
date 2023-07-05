import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setBusket} from "../../redux/basketSlice";
import styles from './product.module.css'


const ProductItem = ({i}) => {
    const dispatch = useDispatch()
    const [buttonClicked, setButtonClicked] = useState(false)

    const addProducts = () => {
        if (!buttonClicked) {
            dispatch(setBusket(i));
            setButtonClicked(true);
        } else {
            alert("Вы уже добавили этот товар в корзину")
        }
    }

    return (
        <li>
            <div className={styles.container}>
                <div style={{overflow: 'hidden'}}>
                    <img className='img' src={i.picture}/>
                </div>
                <div className={styles.comment}>
                    <h2>{i.name}</h2>
                    <h3>Price: {i.price}</h3>
                    <button  className={styles.button} variant='contained' onClick={addProducts}>Busket</button>
                </div>
            </div>
        </li>
    )
}
export default ProductItem;
