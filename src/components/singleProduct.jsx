import { useParams, Link } from "react-router";
import { useGetSingleProductQuery } from "../apis/productApi";
import { addToCart } from "../features/cart/cartSlice";
import RoundStarRating from "../components/ratings/roundRating";
import { useGetProductsRangeQuery } from "../apis/productApi";
import { FaApplePay, FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import NavBar from "./NavBar";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const { data: dataRange, isError, isLoading: loadingRange } = useGetProductsRangeQuery({ skip: 6, limit: 10 });
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details", "reviews", "faq");
  const mockReviews = [
  {
    name: "Samantha D.",
    rating: 5,
    comment: "Absolutely love this product!",
    date: "August 14, 2023"
  },
  {
    name: "Alex M.",
    rating: 4,
    comment: "Great quality and fit.",
    date: "August 15, 2023"
  },
  {
    name: "Makaveli I",
    rating: 5,
    comment: "Of course it's gats be amazing cuz i built it",
    date: "December 16, 2025"
  },
  {
    name: "Samantha D.",
    rating: 5,
    comment: "Absolutely love this product!",
    date: "August 14, 2023"
  },
  {
    name: "Alex M.",
    rating: 4,
    comment: "Great quality and fit.",
    date: "August 15, 2023"
  },
  {
    name: "Makaveli I",
    rating: 5,
    comment: "Of course it's gats be amazing cuz i built it",
    date: "December 16, 2025"
  },
  {
    name: "Samantha D.",
    rating: 5,
    comment: "Absolutely love this product!",
    date: "August 14, 2023"
  },
  {
    name: "Alex M.",
    rating: 4,
    comment: "Great quality and fit.",
    date: "August 15, 2023"
  },
  {
    name: "Makaveli I",
    rating: 5,
    comment: "Of course it's gats be amazing cuz i built it",
    date: "December 16, 2025"
  },
  {
    name: "Alex M.",
    rating: 4,
    comment: "Great quality and fit.",
    date: "August 15, 2023"
  },

];
if (isLoading || loadingRange) return <p>Loading...</p>;
if (error || isError) return <p>Error while loading</p>;

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
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 mb-6">
            Home &gt; Shop &gt; {product.category}
          </p>
              <Link to="/landingpage" className="text-sm text-gray-600">
                <button className="w-[120px] h-[30px] border rounded-full bg-[#F0F0F0] mb-6 font-extrabold">
                  Back to Home
                </button>
              </Link>
        </div>
        
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
            </div>
          </div>
        </div>
      </div>
 
      <div className="border-b flex mt-10 text-sm font-medium justify-evenly">
          <button
            onClick={() => setActiveTab("details")}
            className={`pb-3 ${
              activeTab === "details"
                ? "border-b-2 border-black text-black"
                : "text-gray-400 mr-4"
            }`}
          >
            Product Details
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Rating & Reviews
          </button>

          <button
            onClick={() => setActiveTab("faq")}
            className={`pb-3 ${
              activeTab === "faq"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            FAQs
          </button>
      </div>

      {activeTab === "details" && (
        <div className="mt-6 space-y-4 text-sm text-gray-700 text-center">
          <p>{product.description}</p>

          <div className="grid grid-cols-2 gap-4 text-md">
            <p><span className="font-medium">Brand:</span> {product.brand}</p>
            <p><span className="font-medium">Category:</span> {product.category}</p>
            <p><span className="font-medium">Price:</span> ${product.price}</p>
            <p><span className="font-medium">Stock:</span> {product.stock}</p>
            <p><span className="font-medium">Rating:</span> ⭐ {product.rating}</p>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {mockReviews.map((review, index) => (
              <div
                key={index}
                className="border-none  bg-gray-900 transition rounded-3xl p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <p className="font-medium text-white">{review.name}</p>
                  <span className="text-green-500 text-xs">✔</span>
                </div>

                <div className="text-yellow-400">
                  {"★".repeat(review.rating)}
                </div>

                <p className="text-sm text-gray-600">
                  {review.comment}
                </p>

                <p className="text-xs text-gray-400">
                  Posted on {review.date}
                </p>
            </div>
          ))}
          <div className="relative col-span-2 flex justify-center mt-4">
            <button className="w-[200px] border h-[50px] rounded-full items-center hover:bg-gray-900 transition hover:text-white">Load More Reviews </button>
          </div>
        </div>
      )}

      {activeTab === "faq" && (
        <div className="mt-6 space-y-4 text-sm text-center">
          <div>
            <p className="font-medium">Is this product original?</p>
            <p className="text-gray-600">
              Yes, all products are 100% original and sourced from verified sellers.
            </p>
          </div>

          <div>
            <p className="font-medium">What is the return policy?</p>
            <p className="text-gray-600">
              You can return within 7 days of delivery.
            </p>
          </div>

          <div>
            <p className="font-medium">Do you offer delivery?</p>
            <p className="text-gray-600">
              Yes, nationwide delivery is available.
            </p>
          </div>
        </div>
      )}

      <section className="py-16">
              <div className="max-w-7xl mx-auto px-6 text-center">
                  <h1 className="text-3xl font-black">YOU MIGHT ALSO LIKE</h1>
              </div>
      
              <div className="max-w-7xl mx-auto px-6 mt-12">
              <div className="
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                  {dataRange.products.slice(6, 10).map((product) => (
                    <div
                      key={product.id}
                      className="p-4 hover:shadow-lg transition w-60"
                    >
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-60 w-full object-cover bg-[#F2F0F1] rounded-3xl shadow-md"
                        />
                      </Link>
                      <p className="mt-4 font-semibold text-sm">{product.title}</p>
                      <RoundStarRating rating={product.rating} size="text-md" />
                      <p className="mt-2 font-bold text-lg">${product.price}</p>
                    </div>
                  ))}
              </div>
              </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
              <div className="bg-black rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold max-w-md">
                  STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h3>
      
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-4 py-3 rounded-full outline-none w-full sm:w-64 bg-white"
                  />
                  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
      </section>
      
      <footer className="bg-gray-100 mt-20">
              <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
      
                <div className="col-span-2 md:col-span-1">
                  <h4 className="text-xl font-bold mb-4">MAKA.CO</h4>
                  <p className="text-gray-600 text-sm mb-6">
                    We have clothes that suit your style and which you’re proud to wear.
                    From women to men.
                  </p>
      
                  <div className="flex gap-4 text-gray-700">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                    <FaPinterestP />
                  </div>
                </div>
      
                <div>
                  <h5 className="font-semibold mb-4">COMPANY</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                  </ul>
                </div>
      
                <div>
                  <h5 className="font-semibold mb-4">HELP</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
      
                <div>
                  <h5 className="font-semibold mb-4">FAQ</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                  </ul>
                </div>
      
                <div>
                  <h5 className="font-semibold mb-4">RESOURCES</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to - Blog</li>
                    <li>YouTube Playlist</li>
                  </ul>
                </div>
              </div>
      
              <div className="border-t ml-3 mr-3 py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
                <span>
                  Maka.co © 2000–2025, All Rights Reserved
                </span>
      
                <div className="flex items-center gap-4 text-2xl text-gray-600">
                  <FaCcVisa />
                  <FaCcMastercard />
                  <FaPaypal />
                  <FaApplePay />
                  <SiGooglepay />
                </div>
              </div>
      </footer>

    </>
  );
};

export default SingleProduct;
