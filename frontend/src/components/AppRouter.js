import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} exact/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={<Element />} exact/>
            )}
        </Routes>
    );
});

export default AppRouter;