import NavBar from "../components/NavBar";
import contentPic from "../assets/contentPic.jpg";
import { useGetJustFourProductsQuery } from "../apis/productApi";
import RoundStarRating from "../components/ratings/roundRating";

const LandingPage = () => {
  const { data, isLoading, error } = useGetJustFourProductsQuery();
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error while loading</p>;

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

            <button className="mt-8 bg-black text-white px-10 py-3 rounded-full w-[150px] h-12 hover:bg-gray-800 transition-colors duration-300 hover:scale-105 ease-in">
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
            <button className="w-[200px] h-[50px] border border-black rounded-3xl font-medium hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>
        </section>

    </>
  );
};

export default LandingPage;
