import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import AuthOverlay from "../auth/AuthOverlay";
import { useGetUserQuery } from "../apis/loginAndSignUpApi";

const NavBar = () => {
  const [authType, setAuthType] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const userId = localStorage.getItem("userId");

  const { data: user } = useGetUserQuery(userId, {
    skip: !userId,
  });

  const handleAccountClick = () => {
    if (user) {
      setShowDropdown((prev) => !prev); // toggle dropdown
    } else {
      setAuthType("login");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleViewProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setShowDropdown(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* Top banner */}
      <div className="flex h-[30px] bg-black text-[14px] text-[#e7dbdb] items-center justify-center gap-3">
        <span>
          Sign up and get 20% off to your first order.
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAuthType("signup");
            }}
            className="cursor-pointer text-[#e7dbdb] ml-1"
          >
            SignUp Now
          </a>
        </span>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden w-full px-4 py-3 flex items-center justify-between">
        <h1 className="text-[28px] font-extrabold">MAKA.CO</h1>

        <div className="flex items-center gap-4 text-[26px] text-[#555]" ref={dropdownRef}>
          <span className="material-symbols-outlined">shopping_cart</span>

          <button onClick={handleAccountClick} className="p-2 relative">
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

            {/* Dropdown panel */}
            {showDropdown && user && (
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
            )}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex w-[90%] h-[50px] m-auto items-center justify-center gap-[40px] font-inter">
        <h1 className="text-[50px] font-extrabold">MAKA.CO</h1>

        <ul className="flex gap-[55px] list-none font-medium cursor-pointer">
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Shop</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">On Sale</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">New Arrival</li>
          <li className="hover:text-[#5c5a5a] transition-colors duration-300">Brands</li>
        </ul>

        <div className="flex items-center gap-[10px] w-[280px] px-[14px] py-[6px] bg-[#f9f9f9] border border-[#ddd] rounded-full">
          <span className="material-symbols-outlined text-[20px] text-[#777]">search</span>
          <input
            type="search"
            placeholder="Search for products"
            className="flex-1 bg-transparent outline-none text-[12px]"
          />
        </div>

        <div className="flex gap-[20px] text-[28px] items-center cursor-pointer text-[#555]" ref={dropdownRef}>
          <span className="material-symbols-outlined">shopping_cart</span>

          <button onClick={handleAccountClick} className="p-2 relative">
            {user?.image ? (
              <img
                src={user.image}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <span className="material-symbols-outlined text-[28px]">account_circle</span>
            )}

            {showDropdown && user && (
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
            )}
          </button>
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
