import React, {useContext, useEffect, useRef, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import NavBar from "./components/NavBar";
import RotateSpinner from "./assets/spinner";
import ModalScr from "./utils/ModalScr";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [loadingScreenshot, setLoadingScreenshot] = useState(false)
    const screenshotRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            check().then(() => {
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(() => setLoading(false));
        }, 400);
    }, []);

    const screenshotGenerationProcess = (isLoadingScreenshot) => {
        setLoadingScreenshot(isLoadingScreenshot);
    }

    if (loading) {
        return (
            <div className="position-absolute top-50 start-50">
                <RotateSpinner/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <ModalScr
                loadingScreenshot={loadingScreenshot}
                setLoadingScreenshot={setLoadingScreenshot}
            />
            <div ref={screenshotRef}>
                <NavBar screenshotRef={screenshotRef} screenshotGenerationProcess={screenshotGenerationProcess} />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
});

export default App;