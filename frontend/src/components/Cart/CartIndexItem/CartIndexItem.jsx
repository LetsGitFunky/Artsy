import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem, deleteCartItem } from '../../../store/cart_item';
import "./CartIndexItem.css"

const CartIndexItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(cartItem.quantity)

    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity)

        dispatch(updateCartItem({ ...cartItem, quantity: newQuantity }));
    }

    const handleRemoveItem = () => {
        dispatch(deleteCartItem(cartItem.id));
    }


    return (
        <div className="cart-item">
            <div className="cart-item-productId">ProductId: {cartItem.productId}</div>
            <div className="cart-item-quantity">
                <label className='quantity-label'>Quantity
                    <select value={quantity} onChange={handleQuantityChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </label>
            </div>
            <div className="cart-item-options">Options: {cartItem.options}</div>
            <button onClick={handleRemoveItem}>Remove Item</button>
        </div>
    )
}

export default CartIndexItem;
