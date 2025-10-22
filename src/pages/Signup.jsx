import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess("");
        setError("");

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                updateUser(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser(result.user);
                        setSuccess("Signed up successfully!");
                        navigate("/", {replace: true});
                    })
                    .catch(error => {
                        setError(error.message);
                    });
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Signup Here!</h1>
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            {/*name*/}
                            <label className="label">name</label>
                            <input name="name" type="text" className="input" placeholder="Your Name"/>
                            {/*photo url*/}
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Photo URL"/>
                            {/*email*/}
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email"/>
                            {/*password*/}
                            <label className="label">Password</label>
                            <div className="relative">
                                <label className="label">Password</label>
                                <input name="password" type={showPassword ? "text" : "password"} className="input" placeholder="Password" required />
                                <button onClick={handleTogglePasswordShow} className="btn btn-xs top-6 right-5 absolute">
                                    { showPassword ? <FaEyeSlash />: <FaEye /> }
                                </button>
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="font-medium">Already have an account? Please <Link to="/login" className="text-blue-500 underline">Login</Link></p>
                    {
                        success && <p className="text-green-500 font-medium text-center">{success}</p>
                    }
                    {
                        error && <p className="text-red-500 font-medium text-center">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Signup;