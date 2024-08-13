import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const authCookie = Cookies.get('auth');
    
    if (!authCookie) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
