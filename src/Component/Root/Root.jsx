import React from 'react';
import NavberSection from '../Navber/NavberSection';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='h-screen flex flex-col'>
            <NavberSection></NavberSection>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root