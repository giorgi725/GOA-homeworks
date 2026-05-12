// pages/Product.jsx

import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    return (
        <div>
        <h1>Product Page</h1>
        {/* ეკრანზე გამოაქვს URL-დან მიღებული id */}
        <h2>Product ID: {id}</h2>
        {/*
            dynamic routin.
            მნიშვნელოვანია იმიტომ,
            რომ ერთი კომპონენტი სხვადასხვა მონაცემისთვის გამოვიყენოთ
        */}
        </div>
    );
}

export default Product;