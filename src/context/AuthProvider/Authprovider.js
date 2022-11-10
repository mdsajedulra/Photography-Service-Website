import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../../firebase/firebase.config"

const auth = getAuth(app)

export const authContext = createContext();
const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()


    // register using email password
    const registerUsingEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login using email password
    const loginUsingEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // register using google
    const loginUsingGooglePopUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // manage user
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => unSubscribe;
    }, [])



    const authInfo = {
        loginUsingEmailPassword,
        registerUsingEmailPassword,
        loginUsingGooglePopUp,
        user,
        logOut,
        loading
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;