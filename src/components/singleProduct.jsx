import { useParams, Link } from "react-router";
import { useGetSingleProductQuery } from "../apis/productApi";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavBar from "./NavBar";
import CartIcon from "./cartIcon"

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);


  if (isLoading) return <h1 className="p-10">Loading...</h1>;
  if (error) return <h1 className="p-10">Failed to load product</h1>;
  if (!product) return <h1 className="p-10">Product not found</h1>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity
      })
    );
  };

  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-500 mb-6">
          Home &gt; Shop &gt; {product.category}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {product.images?.slice(0, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-30 h-30 object-cover rounded-3xl bg-[#F0F0F0]  cursor-pointer"
                />
              ))}
            </div>

            <div className="bg-gray-100 rounded-xl flex items-center justify-center w-full">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-[420px] object-contain"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold mb-3">
              {product.title.toUpperCase()}
            </h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {"★★★★★".slice(0, Math.round(product.rating))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating}/5
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="line-through text-gray-400">
                ${Math.round(product.price * 1.4)}
              </span>
              <span className="text-red-500 text-sm font-medium">
                -40%
              </span>
            </div>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <p className="font-medium mb-2">Select Colors</p>
              <div className="flex gap-3">
                <span className="w-6 h-6 bg-black rounded-full cursor-pointer" />
                <span className="w-6 h-6 bg-green-700 rounded-full cursor-pointer" />
                <span className="w-6 h-6 bg-blue-900 rounded-full cursor-pointer" />
              </div>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-2">Choose Size</p>
              <div className="flex gap-3">
                {["Small", "Medium", "Large", "X-Large"].map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full border ${
                      size === "Large"
                        ? "bg-black text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-full px-4 py-2 gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="text-xl"
              >
                −
              </button>

              <span className="min-w-[20px] text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(q => q + 1)}
                className="text-xl"
              >
                +
              </button>
            </div>


              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-900 transition"
              >
                Add to Cart
              </button>
            </div>
            <div className="text-end mr-15">
              <CartIcon />
            </div>

            <div className="mt-6">
              <Link
                to="/"
                className="text-sm underline text-gray-600"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
