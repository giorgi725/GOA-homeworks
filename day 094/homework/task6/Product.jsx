import React from "react";

const Product = React.memo(function Product({ name, price, category }) {
    console.log("Product rendered:", name);

    return (
        <div>
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        </div>
    );
});

export default Product;