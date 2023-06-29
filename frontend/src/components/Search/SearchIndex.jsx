import React from "react";
import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductIndexItem/ProductIndexItem";

const SearchIndex = () => {
    const products = useSelector((state) => Object.values(state.products));

    return (
        <>
            <div className="splash-backdrop">Search results...</div>
            <div className="product-index-container">
                {products.map((product, i) => (
                    <ProductIndexItem key={`product-index-${i}`} product={product} reviews={product.reviews}/>
                ))}
            </div>
        </>
    );
};

export default SearchIndex;
