import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../../../store/cart_item';
import CartIndexItem from '../CartIndexItem/CartIndexItem';
import {BsGithub, BsLinkedin} from "react-icons/bs"
import "./CartIndex.css"

const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems));
    // console.log(cartItems)

    let totalPrice = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    return (
        <>
            <div className="cart-index">
                <h2 className='cart-index-header'>Your Cart</h2>
                {cartItems.map(cartItem =>
                    <CartIndexItem key={`cart-${cartItem.id}`} cartItem={cartItem} />
                )}
                <div className="cart-total-price">Total Price: ${totalPrice}.00</div>
            </div>
            <div className="cart-links-container">
                <li className="cart-links"><a href='https://github.com/LetsGitFunky/'><BsGithub size={30}/></a></li>
                {/* <li><a href='https://twitter.com/yourusername'>Twitter</a></li> */}
                <li className="cart-links"><a href='https://www.linkedin.com/in/nickjhein/'><BsLinkedin size={30}/></a></li>
            </div>

        </>
    );
}

export default CartIndex;
