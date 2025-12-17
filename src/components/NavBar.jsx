import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router";
import { useSelector } from "react-redux";
import AuthOverlay from "../auth/AuthOverlay";
import { useGetUserQuery } from "../apis/loginAndSignUpApi";

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Link to="/cart" className="relative">
      <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

const AccountDropdown = ({ user, showDropdown, handleViewProfile, handleLogout }) => {
  if (!showDropdown || !user) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
      <div className="p-4 flex flex-col gap-2">
        <p className="font-medium">{user.firstName} {user.lastName}</p>
        <button
          onClick={handleViewProfile}
          className="text-left text-blue-600 hover:underline"
        >
          View Profile
        </button>
        <button
          onClick={handleLogout}
          className="text-left text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const AccountIcon = ({ user, showDropdown, handleAccountClick, handleViewProfile, handleLogout }) => (
  <div className="relative">
    <button
      onClick={handleAccountClick}
      className="p-2 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {user?.image ? (
        <img
          src={user.image}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <span className="material-symbols-outlined text-[26px] text-[#555]">
          account_circle
        </span>
      )}
    </button>
    <AccountDropdown
      user={user}
      showDropdown={showDropdown}
      handleViewProfile={handleViewProfile}
      handleLogout={handleLogout}
    />
  </div>
);

const NavBar = () => {
  const [authType, setAuthType] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const userId = localStorage.getItem("userId");
  const { data: user } = useGetUserQuery(userId, { skip: !userId });

  const handleAccountClick = () => {
    if (user) {
      setShowDropdown((prev) => !prev);
    } else {
      setAuthType("login");
    }
  };

  const handleViewProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setShowDropdown(false);
    window.location.href = "/";
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="flex h-[30px] bg-black text-[14px] text-[#e7dbdb] items-center justify-center gap-3">
        <span>
          Sign up and get 20% off to your first order.
          <button
            onClick={() => setAuthType("signup")}
            className="cursor-pointer text-[#e7dbdb] ml-1 underline"
          >
            SignUp Now
          </button>
        </span>
      </div>

      {/* Mobile Nav */}
      <div
        className="md:hidden px-2 py-3 flex items-center justify-between gap-2 relative"
        ref={dropdownRef}
      >
        <h1 className="text-[28px] font-extrabold">MAKA.CO</h1>

        <div className="flex items-center gap-4 text-[26px] text-[#555]">
          <CartIcon />
          <AccountIcon
            user={user}
            showDropdown={showDropdown}
            handleAccountClick={handleAccountClick}
            handleViewProfile={handleViewProfile}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Desktop Nav */}
      <div
        className="hidden md:flex w-[90%] h-[60px] m-auto items-center justify-between gap-6 font-inter relative"
        ref={dropdownRef}
      >
        <h1 className="text-[50px] font-extrabold">MAKA.CO</h1>

        <ul className="flex gap-14 list-none font-medium cursor-pointer">
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Shop</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">On Sale</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">New Arrival</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Brands</li>
        </ul>

        <div className="flex items-center gap-2 w-full max-w-[280px] px-3 py-1 bg-[#f9f9f9] border border-[#ddd] rounded-full mx-2">
          <span className="material-symbols-outlined text-[20px] text-[#777]">search</span>
          <input
            type="search"
            placeholder="Search for products"
            className="flex-1 bg-transparent outline-none text-[12px]"
          />
        </div>

        <div className="flex items-center gap-6 text-[28px] cursor-pointer text-[#555]">
          <CartIcon />
          <AccountIcon
            user={user}
            showDropdown={showDropdown}
            handleAccountClick={handleAccountClick}
            handleViewProfile={handleViewProfile}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Auth Overlay */}
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
