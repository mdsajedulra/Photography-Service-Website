import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../../firebase/firebase.config"

const auth = getAuth(app)

export const authContext = createContext();
const Authprovider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()


    // register using email password
    const registerUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login using email password
    const loginUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // register using google
    const loginUsingGooglePopUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // sign out
    const logOut = () => {
        return signOut(auth)
    }
    // manage user
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe;
    }, [])



    const authInfo = {
        loginUsingEmailPassword,
        registerUsingEmailPassword,
        loginUsingGooglePopUp,
        user,
        logOut
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