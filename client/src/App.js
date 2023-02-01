import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    // <div>
    //     working
    // </div>
    );
};

export default App;