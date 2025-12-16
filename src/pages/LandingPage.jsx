import NavBar from "../components/NavBar";
import contentPic from "../assets/contentPic.jpg";
import browseOne from "../assets/browseOne.png";
import browseTwo from "../assets/browseTwo.png";
import browseThree from "../assets/browseThree.png";
import BrowseFour from "../assets/BrowseFour.png";
import { FaApplePay, FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { useGetJustFourProductsQuery } from "../apis/productApi";
import RoundStarRating from "../components/ratings/roundRating";
import { useGetProductsRangeQuery } from "../apis/productApi";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import {Link} from "react-router";  

const LandingPage = () => {
  const { data, isLoading, error } = useGetJustFourProductsQuery();
  const { data: dataRange, isError, isLoading: loadingRange } = useGetProductsRangeQuery({ skip: 6, limit: 10 });

console.log(data);

if (isLoading || loadingRange) return <p>Loading...</p>;
if (error || isError) return <p>Error while loading</p>;

  return (
    <>
      <NavBar />
      <section className="bg-[#F2F0F1]">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center">
          <div className="max-w-[520px] lg:ml-auto">
            <h1 className="text-6xl font-black leading-[1.05] py-8">
              FIND ITEMS <br />
              THAT MATCHES <br />
              YOUR NEED
            </h1>

            <p className="mt-6 text-gray-600">
              Browse through our diverse range of meticulously natural products,
              designed to bring out your individuality and cater to your daily
              need.
            </p>

            <button className="mt-8 bg-black text-white px-5 py-3 rounded-full w-[150px] h-12 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 ease-in">
              Shop Now
            </button>

            <div className="flex gap-12 mt-12">
              <div>
                <h2 className="text-2xl font-bold">200+</h2>
                <p className="text-sm text-gray-500">International Brands</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">2,000+</h2>
                <p className="text-sm text-gray-500">High-Quality Products</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">30,000+</h2>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              src={contentPic}
              alt="fashion models"
              className="max-w-[550px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-black h-[80px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div
            className="
              flex gap-10
              overflow-x-auto lg:overflow-visible
              whitespace-nowrap
              justify-start lg:justify-center
              text-white text-sm sm:text-base lg:text-xl font-medium
              scrollbar-hide
            "
          >
            <span>ESSENCE</span>
            <span>CANISTER</span>
            <span>CHANEL</span>
            <span>GUCCI</span>
            <span>CALVIN KLEIN</span>
            <span>RALPH LAUREN</span>
            <span>ARMANI</span>
            <span>VERSACE</span>
          </div>
        </div>
      </section>



      {/* new arrival */}
      <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-black">NEW ARRIVALS</h1>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-12">
            <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {data.products.map((product) => (
                <div
                  key={product.id}
                  className="w-60 p-4 hover:shadow-lg transition"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-60 w-full object-cover bg-[#F2F0F1] rounded-3xl"
                  />

                  <p className="mt-4 font-semibold text-sm">
                    {product.title}
                  </p>
                  <RoundStarRating rating={product.rating} size="text-md" />

                  <p className="mt-2 font-bold text-lg">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/products">
              <button className="w-[200px] h-[50px] border border-black rounded-3xl font-medium hover:bg-black hover:text-white transition">
                View All
              </button>
            </Link>
          </div>
        </section>
        <hr className="w-full h-px bg-black border-none mt-[30px]" />


      {/* top selling */}

        <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-black">TOP SELLING</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {dataRange.products.slice(6, 10).map((product) => (
              <div
                key={product.id}
                className="p-4 hover:shadow-lg transition w-60"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-60 w-full object-cover bg-[#F2F0F1] rounded-3xl shadow-md"
                />
                <p className="mt-4 font-semibold text-sm">{product.title}</p>
                <RoundStarRating rating={product.rating} size="text-md" />
                <p className="mt-2 font-bold text-lg">${product.price}</p>
              </div>
            ))}
        </div>
        </div>
        <div className="mt-14 flex justify-center">
            <Link to="/products">
              <button className="w-[200px] h-[50px] border border-black rounded-3xl font-medium hover:bg-black hover:text-white transition">
                View All
              </button>
            </Link>
          </div>
      </section>
      <hr className="w-full h-px bg-black border-none mt-[30px]" />


      {/* Browse Dress By Style */}
      <section className="py-12 md:py-16 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 items-center">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 uppercase">
            Browse by Dress Style
          </h2>

          <div className="bg-[#F0F0F0] rounded-3xlmd:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-center">

              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white w-[350px] h-[200px] md:h-[280px]">
                <img src={browseOne} alt="Casual" className="absolute inset-0 w-full h-full object-cover"/>
                <h3 className="absolute top-4 left-4 md:top-6 md:left-6 text-2xl md:text-3xl font-bold">
                  Casual
                </h3>
              </div>


              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white w-[350px] md:w-[550px] h-[200px] md:h-[280px] md:col-span-2">
                <img src={browseTwo} alt="Formal" className="absolute inset-0 w-full h-full object-cover"/>
                <h3 className="absolute top-4 left-4 md:top-6 md:left-6 text-2xl md:text-3xl font-bold">
                  Formal
                </h3>
              </div>


              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white w-[350px] md:w-[550px] h-[200px] md:h-[280px] md:col-span-2">
                <img src={browseThree} alt="Party" className="absolute inset-0 w-full h-full object-cover"/>
                <h3 className="absolute top-4 left-4 md:top-6 md:left-6 text-2xl md:text-3xl font-bold">
                  Party
                </h3>
              </div>


              <div className="relative right-[20px] overflow-hidden rounded-2xl md:rounded-3xl bg-white w-[350px] h-[200px] md:h-[280px]">
                <img src={BrowseFour} alt="Gym" className="absolute inset-0 left-3 w-full h-full object-cover"/>
                <h3 className="absolute top-4 left-4 md:top-6 md:left-6 text-2xl md:text-3xl font-bold">
                  Gym
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* reviews */}
      <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm border-none hover:shadow-lg transition">
            <div className="flex gap-1 text-yellow-400 mb-3">
              ★★★★★
            </div>
            <h4 className="font-semibold mb-2">Sarah M.
              <span className="text-green-500 text-xs bg-green-500">✔</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              I’m blown away by the quality and style of the clothes I received
              from Maka.co. From casual wear to elegant dresses, every piece
              I’ve bought has exceeded my expectations.
            </p>
          </div>

          
          <div className="border rounded-2xl p-6 shadow-sm border-none hover:shadow-lg transition">
            <div className="flex gap-1 text-yellow-400 mb-3">
              ★★★★★
            </div>
            <h4 className="font-semibold mb-2">Alex K.
              <span className="text-green-500 text-xs bg-green-500">✔</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable.
            </p>
          </div>

          
          <div className="border rounded-2xl p-6 shadow-sm border-none hover:shadow-lg transition">
            <div className="flex gap-1 text-yellow-400 mb-3">
              ★★★★★
            </div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              James L.
              <span className="text-green-500 text-xs bg-green-500">✔</span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              As someone who’s always on the lookout for unique fashion pieces,
              I’m thrilled to have stumbled upon Shop.co.
            </p>
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
    </div>





    </>
  );
};

export default LandingPage;
