import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthUser = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    
    const [user, setUser] = useState(null)

    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
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
    const authInfo = {user, googleSignIn}
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;