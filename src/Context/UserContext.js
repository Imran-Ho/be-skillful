import React, { createContext } from 'react';

export const AuthUser = createContext();

const UserContext = ({children}) => {
    
    const user = {displayName: 'imran'}

    const authInfo = {user}
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;