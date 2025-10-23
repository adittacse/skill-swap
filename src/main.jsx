import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Router from "./Routes/Router.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <Toaster position="top-center" />
            <RouterProvider router={Router} />
        </AuthProvider>
    </StrictMode>,
)
