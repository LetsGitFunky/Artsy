import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCartItem } from "../../../store/cart_item";
import "./AddToCartButton.css"

const AddToCartButton = ({ product, selectedSize }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    const [quantity, setQuantity] = useState(1)
    // const quantity = 1;

    const handleAddToCart = () => {
        dispatch(createCartItem({
            user_id: currentUser.id,
            product_id: product.id,
            quantity: quantity,
            options: selectedSize
        }))
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
