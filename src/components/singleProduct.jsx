import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../apis/productApi";
import styles from "./singleProduct.module.css";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {Link} from "react-router"
import React from "react";

const SingleProduct=()=> {
  const { id } = useParams();
  const { data: product, isLoading, error} = useGetSingleProductQuery(id);
  const dispatch = useDispatch();
  console.log("PRODUCT RESPONSE:", product);

  if(isLoading)return <h1>Loading....</h1>
  if(error)return <h1>Fail to load</h1>
  if(!product)return <h1>Product not found</h1>

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
      alert("item added succesfully")
    };


  return (
    <>
        <div className={styles.container}>
            <img className={styles.containerImage} src={product.thumbnail} alt={product.title} width="250" />
            <h1 className={styles.containerTitle}>{product.title}</h1>
            <h2 className={styles.containerCategory}>Category: {product.category}</h2>
            <p className={styles.containerRating}>Rating: {product?.rating?.rate}</p>
            <p className={styles.containerReview}>Reviews: {product?.rating?.count}</p>
            <h1 className={styles.h1}>PRODUCT DESCRIPTION</h1>
            <p className={styles.containerDescription}>{product.description}</p>
            <h1 className={styles.h1}>PRICE</h1>
            <h3>${product.price}</h3>

            <button
              className={styles.button}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
            <p>
              <Link to="/products" className={styles.backButton}>
                Back to Products
              </Link>
          </p>
        </div>
    </>
  );
}
export default SingleProduct;
