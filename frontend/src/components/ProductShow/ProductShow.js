import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./ProductShow.css"
import "../SessionFormPage/FormStyles.css"
import ReviewIndex from '../Reviews/ReviewIndex/ReviewIndex';

function ProductShow() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state => state.products[productId]);

    const [selectedSize, setSelectedSize] = useState("");
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    if (!product) {
        return (
        <div>Loading...</div>
        );
    }

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    }

    return (
        <>

        <div className="prod-show-container">

        <div className="img-carousel-container">
            <div className="thumbnails-container">
                {product.images.map((url, index) => (
                    <img
                    className={`thumbnail ${index === currentImgIndex ? "selected" : ""}`}
                    key={index}
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
                        <div key={index}>
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
            <p className="prod-price">${product.price}</p>
            <p className="prod-name">{product.name}</p>
            <p className="prod-desc">{product.description}</p>
            {/* <p className="prod-cat">{product.category}</p> */}
            <p className='prod-rating'>(Ratings will go here)</p>

            <label className='prod-size-label'>Size
                <div className="select-wrapper">
                    <select className="select-size" value={selectedSize} onChange={handleSizeChange}>
                        <option value="">Select a size</option>
                        {product.sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
            </label>

            <button className='formButton'>Add to Cart</button>
        </div>

    </div>
        <div className='prod-review-index'>
            <ReviewIndex productId={productId} />
        </div>
                        </>
    );
}
export default ProductShow;
