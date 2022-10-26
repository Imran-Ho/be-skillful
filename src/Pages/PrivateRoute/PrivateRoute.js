import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthUser)
    const location = useLocation()

    if(loading){
        return <Spinner animation="grow"></Spinner>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;