import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = ({ product }) => {
    return (
        <div>
            <h2>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            {/* Add more product details or buttons as needed */}
        </div>
    );
};

export default ProductIndexItem;
