import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../../../store/cart_item';
import CartIndexItem from '../CartIndexItem/CartIndexItem';

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems));

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    return (
        <div className="cart-index">
            <h2>Your Cart</h2>
            {cartItems.map(cartItem =>
                <CartIndexItem key={`cart-${cartItem.id}`} cartItem={cartItem} />
            )}
        </div>
    );
}

export default CartIndex;
