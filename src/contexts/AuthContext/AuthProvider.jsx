import AuthContext from "./AuthContext.jsx";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init.js";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (data) => {
        setLoading(true);
        return updateProfile(auth.currentUser, data);
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        loading,
        createUser,
        updateUser,
        userSignOut,
    }

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;