import { useContext } from 'react';
import AuthContext from "../contexts/AuthContext/AuthContext.jsx";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading.jsx";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;