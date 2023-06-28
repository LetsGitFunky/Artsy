import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem, deleteCartItem } from '../../../store/cart_item';
import {AiOutlineClose} from "react-icons/ai"
import "./CartIndexItem.css"


const CartIndexItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(cartItem.quantity)

    const totalItemPrice = cartItem.productPrice * quantity;

    useEffect(() => {
        setQuantity(cartItem.quantity);
    }, [cartItem.quantity]);

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
            {/* <div className="cart-item-productId">ProductId: {cartItem.productId}</div> */}
            <div className="cart-prod-name">{cartItem.productName}</div>
            <img className="cart-prod-img" src={cartItem.productImage} alt={cartItem.productName} />
            <div className="cart-prod-price">${cartItem.productPrice}.00</div>
            <div className="cart-item-options">Options: {cartItem.options}</div>
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
            <div className="cart-item-total-price">Total: ${totalItemPrice}.00</div>
            <button className="remove-item-button" onClick={handleRemoveItem}><AiOutlineClose/> Remove Item</button>
        </div>
    )
}

export default CartIndexItem;
