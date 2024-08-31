import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    );
};

export default Product;
