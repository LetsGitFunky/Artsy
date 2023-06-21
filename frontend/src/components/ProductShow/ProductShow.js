import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';

function ProductShow() {
    const dispatch = useDispatch();
    const { productId } = useParams(); // Get the productId from the URL parameters
    const product = useSelector(state => state.products[productId]);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    // Render a loading screen if the product hasn't been fetched yet
    if (!product) {
        return (
        <div>Loading...</div>
        );
    }

    return (
        <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        {/* Render more product details as needed */}
        </div>
    );
}

export default ProductShow;
