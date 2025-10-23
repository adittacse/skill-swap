import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Signup = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUser, setUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess("");
        setError("");

        const lengthPattern = /^.{6,}$/;
        const upperCasePattern = /^(?=.*[A-Z]).+$/;
        const lowerCasePattern = /^(?=.*[a-z]).+$/;

        if (!lengthPattern.test(password)) {
            setError("Password must be at least 6 characters");
            return;
        } else if (!upperCasePattern.test(password)) {
            setError("Password must have at least one uppercase character");
            return;
        } else if (!lowerCasePattern.test(password)) {
            setError("Password must have at least one lowercase character");
            return;
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                updateUser(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser(result.user);
                        toast.success("Signed up successfully!");
                        setSuccess("Signed up successfully!");
                        navigate(location?.state || "/", { replace: true });
                    })
                    .catch(error => {
                        setError(error.message);
                        toast.error(error.message);
                    });
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                result.user.reload();
                // setUser(result.user);
                toast.success("Signed up successfully!");
                setSuccess("Signed up successfully!");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
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

                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

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