import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { TiShoppingCart } from 'react-icons/ti'
import CartIndex from '../CartIndex/CartIndex';
import SignInForm from '../../SessionFormPage/SignInForm';
import "./CartButton.css"


const CartButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(state => state.session.user);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className='cart-button'>
                <TiShoppingCart size={21} />
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
