import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/product.js";
import ProductIndexItem from "../ProductIndexItem/ProductIndexItem.js";

const ProductIndex = () => {
    // const products = useSelector((state) => Object.values(state.products));
    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map((product) => (
                <ProductIndexItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductIndex;
