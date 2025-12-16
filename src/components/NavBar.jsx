import { useState } from "react";
import AuthOverlay from "../auth/AuthOverlay";


const NavBar = () => {
  const [authType, setAuthType] = useState(null);
  return (
    <>

      <div className="flex h-[30px] bg-black text-[14px] text-[#e7dbdb] items-center justify-center gap-3">
        <span>
          Sign up and get 20% off to your first order.
          <a href="#" onClick={(e) => {
              e.preventDefault();
              setAuthType("signup");
            }}
            className="cursor-pointer text-[#e7dbdb] ml-1">

            SignUp Now
          </a>

        </span>
      </div>


      <div className="md:hidden w-full px-4 py-3 flex items-center justify-between">

        <h1 className="text-[28px] font-extrabold">MAKA.CO</h1>


        <div className="flex items-center gap-4 text-[26px] text-[#555]">
          <span className="material-symbols-outlined">shopping_cart</span>
          <button
            onClick={() => setAuthType("login")}
            className="text-[26px] text-[#555] p-2"
          >
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </button>

        </div>
      </div>


      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#f9f9f9] border border-[#ddd] rounded-full">
          <span className="material-symbols-outlined text-[20px] text-[#777]">
            search
          </span>
          <input
            type="search"
            placeholder="Search for products"
            className="flex-1 bg-transparent outline-none text-[13px]"
          />
        </div>
      </div>


      <div className="hidden md:flex w-[90%] h-[50px] m-auto items-center justify-center gap-[40px] font-inter">
        <h1 className="text-[50px] font-extrabold">MAKA.CO</h1>

        <ul className="flex gap-[55px] list-none font-medium cursor-pointer">
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Shop</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">On Sale</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">New Arrival</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Brands</li>
        </ul>

        <div className="flex items-center gap-[10px] w-[280px] px-[14px] py-[6px] bg-[#f9f9f9] border border-[#ddd] rounded-full">
          <span className="material-symbols-outlined text-[20px] text-[#777]">
            search
          </span>
          <input
            type="search"
            placeholder="Search for products"
            className="flex-1 bg-transparent outline-none text-[12px]"
          />
        </div>

        <div className="flex gap-[20px] text-[28px] cursor-pointer text-[#555]">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span onClick={() => setAuthType("login")}
            className="material-symbols-outlined cursor-pointer">
            account_circle
          </span>

        </div>
      </div>

      {authType && (
          <AuthOverlay
            type={authType}
            onClose={() => setAuthType(null)}
            onSwitch={setAuthType}
          />
      )}

    </>
  );
};

export default NavBar;
