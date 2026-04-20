import React, { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Component/Root/Root';
import Home from '../Component/Home/Home';
import Registers from '../Component/Register/Registers';

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
            }
        ]
    }
])

export default router;