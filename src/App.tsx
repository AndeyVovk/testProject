import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SecondComponent} from "./components/components/review-module";
import FirstPage from "./components/components/main-page/main-page";
import {Root} from "./components/components/root.component";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "second",
                element: <SecondComponent/>
            },
            {
                path: "main",
                element: <FirstPage/>,
            },
        ]
    },

]);

function App() {

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}


export default App;
