import LandingPage from "../pages/LandingPage";
import Login from "./login/Login";
import Signup from "./signUp/SignUp";

const AuthOverlay = ({ type, onClose, onSwitch }) => {
  return (
    <div className="fixed inset-0 z-[999] flex">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div
        className="
          relative ml-auto w-full sm:max-w-md h-full bg-white
          transform transition-transform duration-300
          translate-x-0
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <div className="p-6 h-full overflow-y-auto">
          {type === "login" && <Login onSwitch={onSwitch} />}
          {type === "signup" && <Signup onSwitch={onSwitch} onClose={onClose}/>}
          {type === "/" && <LandingPage onSwitch={onSwitch} />}
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;
