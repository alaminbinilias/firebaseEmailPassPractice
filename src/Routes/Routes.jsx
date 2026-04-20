import React, { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Component/Root/Root';
import Home from '../Component/Home/Home';
import Registers from '../Component/Register/Registers';
import Login from '../Component/Login/Login';

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'register',
                Component:Registers
            },
            {
                path:'login',
                Component:Login
            }
        ]
    }
])

export default router;