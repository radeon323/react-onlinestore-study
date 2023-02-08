import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import RotateSpinner from "./assets/spinner";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(() => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="position-absolute top-50 start-50">
                <RotateSpinner/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;