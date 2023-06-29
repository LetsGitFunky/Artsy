import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/product';
import ProductIndexItem from '../ProductIndexItem/ProductIndexItem';
import './CategoryIndex.css';

const CategoryIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.products));
    const { category } = useParams();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    return (
        <>
            <div className="splash-backdrop">Discover {category}</div>
            <div className="product-index-container">
                {filteredProducts.map(product =>
                    <ProductIndexItem key={`product-${product.id}`} product={product} />
                )}
            </div>
        </>
    );
}

export default CategoryIndex;
