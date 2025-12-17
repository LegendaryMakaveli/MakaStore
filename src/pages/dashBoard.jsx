import { useGetUserQuery } from "../apis/loginAndSignUpApi";
import { Link } from "react-router";
import NavBar from "../components/NavBar";

const DashBoard = () => {
  const userId = localStorage.getItem("userId")
  const { data: user, isLoading, error } = useGetUserQuery(userId);

  if (isLoading) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  if (error || !user) {
    return <p className="text-center mt-10 text-red-500">Failed to load user</p>;
  }

  return (

    <>
    <NavBar />
    <Link to="/landingpage">
        <button className="ml-10 mt-5 border w-[100px] h-[30px] bg-green-900 rounded-full text-white">Home</button>
    </Link>
        <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl text-center font-semibold mb-6">{user.firstName.toUpperCase()}   WELCOME TO YOUR DASHBOARD</h1>

        <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-1 bg-white p-6 rounded-xl shadow">
            <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full mx-auto"
            />

            <h2 className="text-center mt-4 font-semibold">
                {user.firstName} {user.lastName}
            </h2>

            <p className="text-center text-sm text-gray-500">
                @{user.username}
            </p>

            <p className="text-center text-xs text-gray-400 mt-2">
                {user.company?.title}
            </p>
            </div>

            
            <div className="col-span-3 grid md:grid-cols-3 gap-4">
            <Stat label="Email" value={user.email} />
            <Stat label="Phone" value={user.phone} />
            <Stat label="Company" value={user.company?.name} />
            <Stat label="Department" value={user.company?.department} />
            <Stat label="City" value={user.address?.city} />
            <Stat label="Country" value={user.address?.country} />
            </div>
        </div>
        </div>


        <section className="justify-evenly">
            <div className="text-center space-y-4 mt-10 gap-10">
                <Link to="/products">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">View Available Products</button>
                </Link>
            </div>
        </section>
    </>
  );
};

export default DashBoard;
const Stat = ({ label, value }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-sm">
      <p className="text-gray-400">{label}</p>
      <p className="font-medium truncate">{value || "—"}</p>
    </div>
  );
};
