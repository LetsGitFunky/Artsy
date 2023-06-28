import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchCartItems } from '../../../store/cart_item';
import CartIndexItem from '../CartIndexItem/CartIndexItem';
import "./CartIndex.css"

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems));
    const products = useSelector(state => state.products);
    const productId = useParams()

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    return (
        <div className="cart-index">
            <h2 className='cart-index-header'>Your Cart</h2>
            {cartItems.map(cartItem =>
                <CartIndexItem key={`cart-${cartItem.id}`} cartItem={cartItem} />
            )}
        </div>
    );
}

export default CartIndex;
