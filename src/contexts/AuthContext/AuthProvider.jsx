import AuthContext from "./AuthContext.jsx";

const AuthProvider = ({ children }) => {
    const authData = {
        //
    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;