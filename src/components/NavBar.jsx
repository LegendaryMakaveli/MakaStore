const NavBar = () => {
  return (
    <>
      <div className="h-[30px] bg-black text-[14px] text-[#e7dbdb] flex items-center justify-center gap-3">
        <span>
          Sign up and get 20% off to your first order.
          <a href="#" className="cursor-pointer text-[#e7dbdb]">
            SignUp Now
          </a>
        </span>
      </div>

      <div className="w-[90%] h-[50px] m-auto flex items-center justify-center gap-[40px] font-inter">
        <h1 className="text-[50px] font-extrabold">MAKA.CO</h1>
        <ul className="flex gap-[55px] list-none font-medium cursor-pointer">
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Shop</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">On Sale</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">New Arrival</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Brands</li>
        </ul>

        <div className="flex items-center gap-[10px] w-[280px] px-[14px] py-[6px] bg-[#f9f9f9] border border-[#ddd] rounded-full transition-all duration-200 focus-within:bg-white focus-within:border-[#111] focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <span className="material-symbols-outlined text-[20px] text-[#777]">
            search
          </span>
          <input
            type="search"
            placeholder="Search for products"
            className="flex-1 bg-transparent outline-none text-[12px] placeholder-[#aaa] w-[300px] h-[35px]"
          />
        </div>

        <div className="flex gap-[20px] text-[28px] cursor-pointer text-[#555]">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;