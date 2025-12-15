import NavBar from "../components/NavBar";
import contentPic from "../assets/contentPic.jpg";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <section className="bg-[#f7f4f3]">
        <div className="w-[90%] mx-auto px-8 pt-16 pb-20">
          <div className="flex items-center justify-between">
            
            <div className="max-w-[520px]">
              <h1 className="text-6xl font-black leading-[1.05]">
                FIND ITEMS <br />
                THAT MATCHES <br />
                YOUR NEED
              </h1>

              <p className="mt-6 text-gray-600">
                Browse through our diverse range of meticulously natural products,
                designed to bring out your individuality and cater to your daily need.
              </p>

              <button className="mt-8 bg-black text-white px-10 py-3 rounded-full w-[150px] h-12 hover:bg-gray-800 transition-colors duration-300">
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
                className="max-w-[520px]"
              />
            </div>

          </div>
        </div>
      </section>
      <section className="bg-black h-[80px] flex items-center">
        <div className="w-[90%] mx-auto px-8 py-6">
          <div className="flex items-center justify-evenly text-white text-xl font-medium gap-10">
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
      <section className="bg-red-500 h-[300px] items-center">
        <div className="w-[90%] mx-auto text-center bg-white py-6">
          <h1 className="text-3xl font-black">NEW ARRIVALS</h1>
        </div>
      </section>



    </>
  );
};

export default LandingPage;
