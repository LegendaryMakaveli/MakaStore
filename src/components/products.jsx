import React from "react";
import { useGetAllProductsQuery } from "../apis/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import styles from "./product.module.css";
import {Link} from "react-router"
import NavBar from "./NavBar";

const Products = () => {
    const { data, isLoading, isError, error } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    console.log(data);
    if (isLoading) return <h2>Loading products...</h2>;
    if (isError) return <h2>{error?.error}</h2>;

    const handleAddToCart = (product) => {
    console.log("Full product object:", product);
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

    return (
        <>
        <NavBar />
        <Link to="/dashboard">
                    <button className="ml-10 mt-5 border w-[130px] h-[40px] bg-green-900 rounded-full text-white">Back To Profile</button>
        </Link>
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
            </div>
             <div className={styles.productContainer}>
                {data.products.map((product) => (
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <button className={styles.imageButton}>
                                <img
                                    className={styles.productImage}
                                    src={product.thumbnail}
                                    alt="product image" width="150"
                                 />
                            </button>
                        </Link>
                        <h2>{product.title}</h2>
                        <h4>{product.category}</h4>
                        <p>${product.price}</p>
                        <button className={styles.button} onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;


