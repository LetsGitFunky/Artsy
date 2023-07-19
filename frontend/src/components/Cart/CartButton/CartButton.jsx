import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { TiShoppingCart } from 'react-icons/ti'
import CartIndex from '../CartIndex/CartIndex';
import SignInForm from '../../SessionFormPage/SignInForm';
import "./CartButton.css"
import { fetchCartItems } from '../../../store/cart_item';


const CartButton = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(state => state.session.user);

    const cartItemCount = useSelector(state =>
        Object.values(state.cartItems).reduce((count, item) => count + item.quantity, 0)
    );

    useEffect(() => {
        if (user) {
            dispatch(fetchCartItems());
        }
    }, [user, dispatch]);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className='cart-button'>
                <TiShoppingCart size={24} />
                {user && cartItemCount > 0 && (
                    <span className='cart-count'>{cartItemCount}</span>
                )}
            </button>
            {isModalOpen && (
                <Modal onClose={handleClose}>
                    {user ? <CartIndex /> : <SignInForm/>}
                </Modal>
            )}
        </div>
    )
}

export default CartButton;
