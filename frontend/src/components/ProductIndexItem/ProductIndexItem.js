import React from "react";
import { Link } from "react-router-dom";
import './ProductIndexItem.css';

const ProductIndexItem = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="pii-container">
                <img className="pii-img"
                    src={product.img_urls ? product.img_urls[0]
                    : "https://publicdelivery.org/wp-content/uploads/2018/10/Fernando-Botero-Mona-Lisa-1978-183-x-166-cm.jpg"}
                    alt={product.name} />
                <h2 className="pii-name">{product.name}</h2>
                <p className="pii-desc">{product.description}</p>
                <p className="pii-price">${product.price}</p>
                {/* <p>{product.category}</p> */}
                {/* Add more product details or buttons as needed */}
            </div>
        </Link>
    );
};

export default ProductIndexItem;
