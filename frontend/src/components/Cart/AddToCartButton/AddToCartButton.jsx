import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCartItem, updateCartItem } from "../../../store/cart_item";
import "./AddToCartButton.css"

const AddToCartButton = ({ product, selectedSize }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const cartItems = useSelector(state => state.cartItems);

    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {

        const existingCartItem = Object.values(cartItems).find(
            item => item.productId === product.id && item.options === selectedSize
        );

        if (existingCartItem) {
            dispatch(updateCartItem({
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1
            }));
        } else {
            dispatch(createCartItem({
                user_id: currentUser.id,
                product_id: product.id,
                quantity: quantity,
                options: selectedSize
            }))
        }
    }

    return (
        <>
            <button className="add-to-cart-button" onClick={handleAddToCart}
            disabled={!selectedSize || !currentUser}>
                Add To Cart
            </button>
        </>
    )
}

export default AddToCartButton
