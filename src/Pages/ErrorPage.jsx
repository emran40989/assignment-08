import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return <>
    <Navbar />
    <h1>404, Page Not Found</h1>
    <div>{error.message}</div>
    <Footer />
    </>
};

export default ErrorPage;