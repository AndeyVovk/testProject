import HeaderComponent from "./general-header/header.component";
import {Outlet, Route, Routes} from "react-router-dom";
import FirstPage from "./main-page/main-page";
import React from "react";

export function Root() {
    return (
        <div className="App">
            <HeaderComponent/>
            <Routes>
                <Route
                    path="/"
                    element={[
                        <FirstPage/> ]}
                />
            </Routes>
            <Outlet/>
        </div>
    );
}
