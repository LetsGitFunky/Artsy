import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // This imports the styles
import "./ProductShow.css"
import "../SessionFormPage/FormStyles.css"

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
        <div className="prod-show-container">


        <div className="img-carousel-container">
            <div className="thumbnails-container">
                {product.img_urls.map((url, index) => (
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
                    {product.img_urls.map((url, index) => (
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
            <p className="prod-cat">{product.category}</p>
            <p>Ratings go here</p>

            <select classname="select-size" value={selectedSize} onChange={handleSizeChange}>
                <option value="">Select size</option>
                {product.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                    ))}
            </select>

            <button className='formButton'>Add to Cart</button>
        </div>
    </div>
    );
}


// const handleThumbnailClick = (index) => {
//     setCurrentImgIndex(index);
// }

// const handlePrevClick = () => {
//     setCurrentImgIndex((currentImgIndex - 1 + product.img_urls.length) % product.img_urls.length);
// }

// const handleNextClick = () => {
//     setCurrentImgIndex((currentImgIndex + 1) % product.img_urls.length);
// }

{/* <div className="prod-img-container">
<div className="thumbnails-container">
    {product.img_urls.map((url, index) => (
        <img
            className={`thumbnail ${index === currentImgIndex ? "selected" : ""}`}
            key={index}
            src={url}
            alt={`${product.name} ${index}`}
            onClick={() => setCurrentImgIndex(index)}
        />
    ))}
</div>

    <button onClick={handlePrevClick}>Prev</button>

    <img
    className="prod-main-img"
    // src={product.img_urls ? product.img_urls[currentImgIndex] : "https://shorturl.at/wJKQY"}
    src={product.img_urls[currentImgIndex]}
    alt={product.name}
    />

    <button onClick={handleNextClick}>Next</button>
</div> */}
export default ProductShow;
