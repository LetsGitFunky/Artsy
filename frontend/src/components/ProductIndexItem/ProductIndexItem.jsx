import React from "react";
import { Link } from "react-router-dom";
import './ProductIndexItem.css';
import { AiOutlinePlus } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
// import { calculateAverageRating } from "../Reviews/Ratings/AverageStarRating.js";
// import StarRating from "../Reviews/Ratings/StarRating.js";

const ProductIndexItem = ({ product }) => {



    return (
        <Link className="pii-link" to={`/products/${product.id}`}>
            <div className="pii-container">
                <img className="pii-img"
                    src={product.images ? product.images[0]
                    : "https://publicdelivery.org/wp-content/uploads/2018/10/Fernando-Botero-Mona-Lisa-1978-183-x-166-cm.jpg"}
                    alt={product.name} />
                <div className="pii-text-container">
                    <h2 className="pii-text pii-name">{product.name}</h2>
                    {/* <p className="pii-text pii-rating">(ratings will go here)</p> */}
                    <p className="pii-text pii-price">${product.price}</p>
                    <p className="pii-text pii-shipping">Free shipping</p>
                    <p className="pii-text pii-verified"><MdVerified size={12} style={{ marginRight: '2px', color: "#6400F5" }}/>Verified seller</p>
                    <p className="pii-text pii-delivery">Ships 5-7 business days</p>
                    <button className="pii-cart-button"><AiOutlinePlus size={16} style={{ marginRight: '2px' }}/>Add to cart</button>
                </div>
            </div>
        </Link>
    );
};

export default ProductIndexItem;
