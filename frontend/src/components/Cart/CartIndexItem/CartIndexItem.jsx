import React from 'react';

const CartIndexItem = ({ cartItem }) => {
    return (
        <div className="cart-item">
            <div>ProductId: {cartItem.productId}</div>
            <div>Quantity: {cartItem.quantity}</div>
            <div>Options: {cartItem.options}</div>
        </div>
    )
}

export default CartIndexItem;
