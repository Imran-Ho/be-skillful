import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthUser = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    
    const [user, setUser] = useState(null)

// google sign in function
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
// create new User
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

// sign in with email and password
    const loginWithEmailPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

// update profile
    const userProfileUpdate = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }

// log out function
    const logOut = () =>{
        return signOut(auth)
    }

// user state observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log('current user', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

// sending context from here
    const authInfo = {
        user, 
        googleSignIn,
        logOut,
        createNewUser,
        loginWithEmailPassword,
        userProfileUpdate
    }
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;