import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Loading from "../components/Loading.jsx";
import SkillDetails from "../pages/SkillDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import AllSkills from "../pages/AllSkills.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                loader: () => fetch("/course.json"),
                element: <Home />,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "all-skills",
                loader: () => fetch("/course.json"),
                element: <AllSkills />,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "skill/:id",
                loader: () => fetch("/course.json"),
                element: <SkillDetails />,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "my-profile",
                loader: () => fetch("/course.json"),
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "my-profile/update",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
]);

export default Router;