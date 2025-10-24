import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">

                <div className="mx-auto mb-6 size-28 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 flex items-center justify-center">
                    <span className="text-4xl font-black text-primary">404</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-2">Page not found</h1>
                <p className="opacity-70 mb-6">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="flex gap-3 justify-center flex-wrap">
                    <button onClick={() => navigate(-1)} className="btn">
                        Go Back
                    </button>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>

                {/* helpful tip */}
                <p className="text-xs opacity-60 mt-6">
                    Tip: Check the URL or use the navbar to navigate.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;