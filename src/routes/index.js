import { lazy } from "react";


import { Navigate } from "react-router-dom";


import { MainLayout } from "../layout";



const HOME_PAGE = lazy(() => import("../pages/home"));
const SERVICE_PAGE = lazy(() => import("../pages/service"));
const NOT_FOUND_PAGE = lazy(() => import("../pages/not-found"));



export const APP_ROUTES = [
    { path: "/", element: <Navigate to={'/home'} /> },

    // {
    //     path: "login",
    //     element: (
    //         <LOGIN_PAGE />
    //     ),
    // },

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: (
                    <HOME_PAGE />
                ),
            },

            {
                path: "service",
                element: (
                    <SERVICE_PAGE />
                ),
            },
        ],
    },
    {
        path: "*",
        element: <NOT_FOUND_PAGE />,
    },
];
