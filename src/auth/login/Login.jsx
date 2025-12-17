import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../apis/loginAndSignUpApi";
import { Link } from "react-router";

const Login = ({ onSwitch, onClose }) => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login(formData).unwrap();
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.id);

      onClose?.();  
      navigate("/landingpage");
    } catch (err) {
      setError("Invalid username or password");
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        <form
          onSubmit={submitHandle}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            className="w-[400px] p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-[400px] p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-[400px] bg-black text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => onSwitch("signup")}
            className="text-black font-medium underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
