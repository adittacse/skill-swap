import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { toast } from "react-hot-toast";
import { Link } from "react-router";

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await updateUser(name, photo);
            toast.success("Profile updated");
        }
        catch(err){
            toast.error(err.message);
        }
    };

    if (!user) {
        return <div className="min-h-[40vh] flex items-center justify-center">Please login first.</div>;
    }

    return (
        <div className="max-w-lg mx-auto my-10 p-6 border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={onSubmit} className="space-y-3">
                <label className="label">Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full" required />
                <label className="label">Photo URL</label>
                <input value={photo} onChange={e=>setPhoto(e.target.value)} type="url" placeholder="Photo URL" className="input input-bordered w-full" required />
                <button className="btn btn-primary w-full">Save</button>
            </form>
            <Link to="/my-profile" className="btn btn-neutral w-full mt-5">Back to My Profile</Link>
        </div>
    );
};

export default UpdateProfile;