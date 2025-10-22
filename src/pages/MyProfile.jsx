import { useContext } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Link } from "react-router";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div className="min-h-[40vh] flex items-center justify-center">Please login to see profile.</div>;
    }

    return (
        <div>
            <div className="max-w-lg mx-auto my-10 p-6 border rounded-xl text-center">
                <img src={user?.photoURL} className="w-24 h-24 rounded-full mx-auto" />
                <h2 className="text-2xl font-bold mt-3">{user?.displayName}</h2>
                <p className="opacity-80">{user?.email}</p>
                <Link className="btn btn-primary mt-4" to="/my-profile/update">Update Profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;