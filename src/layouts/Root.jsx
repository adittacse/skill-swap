import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="maven-pro">
            <Outlet />
        </div>
    );
};

export default Root;