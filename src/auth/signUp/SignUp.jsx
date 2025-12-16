import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRegisterMutation } from "../../apis/loginAndSignUpApi";

const Signup = ({onSwitch}) => {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await register({
                username: formData.username,
                email: formData.email,
                password: formData.password
            }).unwrap();

            localStorage.setItem(
                "userInfo",
                JSON.stringify({
                    username: response.username,
                    email: response.email
                })
            );

            navigate("/products");
        } catch (err) {
            console.log(err);
            setError("Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={submitHandle}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Sign Up
                </h2>

                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 border rounded"
                />

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="w-full mb-3 p-2 border rounded"
                />

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>

                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <button
                        onClick={() => onSwitch("login")}
                        className="text-black font-medium underline"
                        >
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Signup;
