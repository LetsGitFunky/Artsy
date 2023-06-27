import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ReviewIndex from '../Reviews/ReviewIndex/ReviewIndex';
import ReviewForm from '../Reviews/ReviewForm/ReviewForm';
import AddToCartButton from '../Cart/AddToCartButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Reviews/ReviewForm/ReviewForm.css'
import "../SessionFormPage/FormStyles.css"
import "./ProductShow.css"


function ProductShow() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state => state.products[productId]);

    const [selectedSize, setSelectedSize] = useState("");
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [reviewsUpdated, setReviewsUpdated] = useState(false);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId, reviewsUpdated]);

    if (!product) {
        return (
        <div>Loading...</div>
        );
    }

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    }

    const handleReviewSubmit = () => {
        // debugger
        setReviewsUpdated(!reviewsUpdated);
    };

    return (
        <div className='prod-home-wrapper'>

            <div className="prod-show-wrapper">

                <div className="img-carousel-container">
                    <div className="thumbnails-container">
                        {product.images.map((url, index) => (
                            <img
                            className={`thumbnail ${index === currentImgIndex ? "selected" : ""}`}
                            key={`thumb-${index}`}
                            src={url}
                            alt={`${product.name} ${index}`}
                            onClick={() => setCurrentImgIndex(index)}
                            />
                            ))}
                    </div>

                    <div className="prod-img-container">
                        <Carousel
                            selectedItem={currentImgIndex}
                            onChange={setCurrentImgIndex}
                            showThumbs={false}
                            autoPlay={false}
                            infiniteLoop={true}
                            showIndicators={false}
                            >
                            {product.images.map((url, index) => (
                                <div key={`prod-img-${index}`}>
                                    <img
                                    className="carousel-main-img"
                                    src={url}
                                    alt={`${product.name} ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div className="prod-info-container">
                    <p className="prod-price">${product.price}.00</p>
                    <p className="prod-name">{product.name}</p>
                    <p className="prod-desc">{product.description}</p>

                    <label className='prod-size-label'>Size <span className='size-star'>*</span>
                        <div className="select-wrapper">
                            <select className="select-size" value={selectedSize} onChange={handleSizeChange}>
                                <option value="">Select a size</option>
                                {product.sizes.map((size, i) => (
                                    <option key={`prod-item-${i}`} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    </label>

                    {/* <button className='prod-cart-button'>Add to Cart</button> */}
                    <div className='prod-cart-button'>
                        <AddToCartButton product={product} selectedSize={selectedSize} />
                    </div>

                    <div className='review-form-button-container'>
                        <ReviewForm productId={productId} onReviewSubmit={handleReviewSubmit} formType={"create"}/>
                    </div>
                </div>

            </div>
                <div className='review-index-wrapper'>
                    <ReviewIndex productId={productId}/>
                </div>
        </div>
    );
}
export default ProductShow;
