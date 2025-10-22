import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home.jsx";
import Signup from "../pages/Signup.jsx";

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
                path: "*",
                element: <p>404 Not Found</p>
            }
        ]
    }
]);

export default Router;