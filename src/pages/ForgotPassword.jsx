import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { useLocation } from "react-router";
import { toast, Toaster } from "react-hot-toast";

const ForgotPassword = () => {
    const [success, setSuccess] = useState("");
    const { userPasswordReset } = useContext(AuthContext);
    const location = useLocation();
    const emailValue = location.state.email;

    const handleResetPassword = async e => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email) {
            return toast.error("Enter your email");
        }

        userPasswordReset(email)
            .then(() => {
                setSuccess("Reset email sent to your email. Check in Spam also.");
                window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <form onSubmit={handleResetPassword} className="space-y-3">
                <input name="email" type="email" defaultValue={emailValue} placeholder="Your Email" className="input input-bordered w-full" required />
                <button className="btn btn-primary w-full">Send Reset Link</button>
            </form>

            {
                success && <p className="text-green-800 font-medium text-center mt-5">{success}</p>
            }

            <Toaster />
        </div>
    );
};

export default ForgotPassword;