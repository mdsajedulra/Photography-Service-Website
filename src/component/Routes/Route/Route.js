import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../../Main/Main';
import AllServices from '../../AllServices/AllServices';
import Home from '../../Home/Home';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/allservices',
                    element: <AllServices></AllServices>
                },
                {
                    path: '/servicedetails/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({ params }) => fetch(`http://localhost:5000/servicedetails/${params.id}`)
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;