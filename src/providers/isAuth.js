import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataAuth, setDataAuth] = useState({});
    const navigate = useNavigate();

   
    useEffect(() => {
        const token = localStorage.getItem('cms_data');
        if (token) {
            setIsAuthenticated(true);
            setDataAuth(JSON.parse(token))
            navigate('/email/current');

        } else {
            setIsAuthenticated(false);
            navigate('/');
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, dataAuth, setDataAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
