import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthUser)
    const location = useLocation()

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;