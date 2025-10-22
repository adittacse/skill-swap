import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Link } from "react-router";

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { userSignIn, setUser, googleSignIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess("");
        setError("");

        userSignIn(email, password)
            .then(result => {
                setUser(result.user);
                setSuccess("Signed in successfully!");
            })
            .catch(error => {
                setError(error);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                setSuccess("Signed in successfully!");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login Now!</h1>
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            {/*email*/}
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email"/>
                            {/*password*/}
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password"/>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>

                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className="font-medium">New to our website? Please <Link to="/signup" className="text-blue-500 underline">Signup</Link></p>
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

export default Login;