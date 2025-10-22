import { useContext } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router";

const UpdateProfile = () => {
    const { user, updateUser, setLoading } = useContext(AuthContext);

    const handleUpdateProfile = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                toast.success("Profile updated");
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    if (!user) {
        return <div className="min-h-[40vh] flex items-center justify-center">Please login first.</div>;
    }

    return (
        <div className="max-w-lg mx-auto my-10 p-6 border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdateProfile} className="space-y-3">
                {/* name */}
                <label className="label">Name</label>
                <input name="name" defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full" required />
                {/* photo url */}
                <label className="label">Photo URL</label>
                <input name="photo" defaultValue={user?.photoURL} type="url" placeholder="Photo URL" className="input input-bordered w-full" required />
                <button className="btn btn-primary w-full">Save</button>
            </form>
            <Link to="/my-profile" className="btn btn-neutral w-full mt-5">Back to My Profile</Link>

            <Toaster />
        </div>
    );
};

export default UpdateProfile;