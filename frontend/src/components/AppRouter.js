import React from 'react';
import {Routes, Route, Redirect, Router} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";

const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth === true && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} exact/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;