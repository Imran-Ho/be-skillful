import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthUser = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    
    const [user, setUser] = useState(null)

// google sign in function
    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
// log out function
    const logOut = () =>{
        return signOut(auth)
    }
// user state observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user, 
        googleSignIn,
        logOut
    }
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;