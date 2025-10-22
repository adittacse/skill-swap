import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                loader: () => fetch("/course.json"),
                element: <Home />
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
                path: "*",
                element: <p>404 Not Found</p>
            }
        ]
    }
]);

export default Router;