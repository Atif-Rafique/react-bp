import React from 'react'


import { Outlet } from "react-router-dom";


import { HomeLayout } from './home-layout';



export const MainLayout = () => {
    return (
        <React.Fragment>
            <HomeLayout Outlet={<Outlet />} />
        </React.Fragment>
    )
}