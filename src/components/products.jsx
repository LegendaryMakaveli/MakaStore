import React from "react";
import { useGetAllProductsQuery } from "../apis/productApi";

const Products = () => {
    const { data, isLoading, isError, error } = useGetAllProductsQuery();
    console.log(data);
    if (isLoading) return <h2>Loading products...</h2>;
    if (isError) return <h2>{error?.error}</h2>;

    return (
        <div>
            {data.products.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} width="150"/>
                    <h2>{product.title}</h2>
                    <h4>{product.category}</h4>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
