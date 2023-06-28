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

    let currentDate = new Date();
    let arrivalDate = new Date(currentDate);
    arrivalDate.setDate(currentDate.getDate() + 5);

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
            <div className='cart-prod-container'>
                <img className="cart-prod-img" src={cartItem.productImage} alt={cartItem.productName} />
                <div className='cart-prod-text-container'>
                    <div className="cart-item-options">Options: {cartItem.options}</div>
                        <div className="cart-item-quantity">
                            <label className='quantity-label'>Quantity
                                <select className='quantity-select' value={quantity} onChange={handleQuantityChange}>
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
                </div>
            <div className='cart-price-container'>
                <div className="cart-item-total-price">${totalItemPrice}.00</div>
                <div className="cart-prod-price">(${cartItem.productPrice}.00 each)</div>
                <div className="arrival-date">Arrives by: {arrivalDate.toLocaleDateString()}</div>
            </div>
            </div>
            <button className="remove-item-button" onClick={handleRemoveItem}><AiOutlineClose/> Remove Item</button>
        </div>
    )
}

export default CartIndexItem;
