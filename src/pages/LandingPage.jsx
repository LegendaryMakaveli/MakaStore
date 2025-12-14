import NavBar from "../components/NavBar";
import contentPic from "../assets/contentPic.jpg";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-around">
        <div className="content">
            <h1>FIND ITEMS <br /> THAT MATCHES <br /> YOUR NEED</h1>
            <p>Browse through our diverse range of meticulously generated need, tailored <br />
             to bring out your individual and cater to you everyday need.</p>
             <button>Shop Now</button>
             <div className="content two">
                <h2>200+</h2>
                <p>International items</p>
                <h2>2,000+</h2>
                <p>High-quality Products</p>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
             </div>
        </div>
        <img src={contentPic} alt="content pic" className="w-[450px] h-[500px] mt-10" />
      </div>
    </>
  );
};

export default LandingPage;
