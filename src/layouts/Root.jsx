import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Root = () => {
    return (
        <div className="maven-pro min-h-screen flex flex-col">
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main className="flex-1 container mx-auto px-3 md:px-6 lg:px-8 py-3 md:py-6 lg:py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;