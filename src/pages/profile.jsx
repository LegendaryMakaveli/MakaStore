import { useGetUserQuery } from "../apis/loginAndSignUpApi";
import { Link } from "react-router";

const Profile = () => {
  const userId = localStorage.getItem("userId") || 1;
  const { data: user, isLoading, error } = useGetUserQuery(userId);

  if (isLoading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error || !user)
    return <p className="text-center mt-10 text-red-500">Failed to load profile</p>;

  return (
    <>
     <Link to="/dashboard">
            <button className="ml-10 mt-5 border w-[130px] h-[40px] bg-green-900 rounded-full text-white">Back To Profile</button>
     </Link>
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="flex items-center gap-6">
            <img
            src={user.image}
            alt={user.firstName}
            className="w-28 h-28 rounded-full"
            />
            <div>
            <h1 className="text-2xl font-semibold">
                {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
            </div>
        </div>

        <Section title="Personal Information">
            <Info label="First Name" value={user.firstName} />
            <Info label="Last Name" value={user.lastName} />
            <Info label="Age" value={user.age} />
            <Info label="Gender" value={user.gender} />
            <Info label="Birth Date" value={user.birthDate} />
            <Info label="Blood Group" value={user.bloodGroup} />
            <Info label="Eye Color" value={user.eyeColor} />
            <Info label="Height" value={`${user.height} cm`} />
            <Info label="Weight" value={`${user.weight} kg`} />
        </Section>

        <Section title="Contact Information">
            <Info label="Email" value={user.email} />
            <Info label="Phone" value={user.phone} />
            <Info label="IP Address" value={user.ip} />
            <Info label="MAC Address" value={user.macAddress} />
        </Section>

        <Section title="Address">
            <Info label="Street" value={user.address.address} />
            <Info label="City" value={user.address.city} />
            <Info label="State" value={user.address.state} />
            <Info label="Postal Code" value={user.address.postalCode} />
            <Info label="Country" value={user.address.country} />
        </Section>


        <Section title="Company">
            <Info label="Company Name" value={user.company.name} />
            <Info label="Department" value={user.company.department} />
            <Info label="Role" value={user.company.title} />
        </Section>


        <Section title="Bank Information">
            <Info label="Card Type" value={user.bank.cardType} />
            <Info label="Card Number" value={user.bank.cardNumber} />
            <Info label="IBAN" value={user.bank.iban} />
            <Info label="Currency" value={user.bank.currency} />
            <Info label="Card Expiry" value={user.bank.cardExpire} />
        </Section>


        <Section title="System Information">
            <Info label="University" value={user.university} />
            <Info label="User Agent" value={user.userAgent} />
            <Info label="EIN" value={user.ein} />
            <Info label="SSN" value={user.ssn} />
        </Section>
        </div>
    </>
  );
};

export default Profile;


const Section = ({ title, children }) => (
  <section>
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid md:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow">
      {children}
    </div>
  </section>
);

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-400">{label}</p>
    <p className="font-medium text-sm">{value || "—"}</p>
  </div>
);
