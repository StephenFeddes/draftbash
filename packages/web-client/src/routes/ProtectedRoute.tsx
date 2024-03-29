/* eslint-disable react/function-component-definition */
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../modules/shared';
import { PageLayout } from '../modules/shared';

interface ProtectedRouteProps {
    path: string;
    element: React.ReactNode;
    layout: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element, layout }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={layout}>
                    <Route path={path} element={element} />
                </Route>
            </Routes>
        );
    }
    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
