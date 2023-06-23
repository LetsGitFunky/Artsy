import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/product.js";
import ProductIndexItem from "../ProductIndexItem/ProductIndexItem.js";
import './ProductIndex.css';

const ProductIndex = () => {
    const products = useSelector((state) => Object.values(state.products));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="product-index-container">
            {products.map((product) => (
                <ProductIndexItem key={`item-${product.id}`} product={product} reviews={product.reviews}/>
            ))}
        </div>
    );
};

export default ProductIndex;
