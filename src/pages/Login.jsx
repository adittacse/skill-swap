import { useContext, useState } from 'react';
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Link } from "react-router";

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { userSignIn, setUser } = useContext(AuthContext);

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