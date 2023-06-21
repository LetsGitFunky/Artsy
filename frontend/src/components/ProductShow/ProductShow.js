import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import "./ProductShow.css"
import "../SessionFormPage/FormStyles.css"

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
        <div className="prod-show-container">
        <div className="prod-img-container">
            <img className="prod-main-img"
                src={product.img_urls ? product.img_urls[0]
                : "https://shorturl.at/wJKQY"}
                alt={product.name} />
            {/* Here you can add more images in the future, you may even want to map over img_urls and render each as a small thumbnail */}
        </div>
        <div className="prod-info-container">
            <p className="prod-price">${product.price}</p>
            <p className="prod-name">{product.name}</p>
            <p className="prod-desc">{product.description}</p>
            <p className="prod-cat">{product.category}</p>
            <p>Ratings go here</p>
            
            <button className='formButton'>Add to Cart</button>
            {/* Render more product details as needed */}
        </div>
    </div>
    );
}

export default ProductShow;
