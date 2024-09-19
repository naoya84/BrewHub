import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";
import Home from "./Pages/Home";
import ResistBeerPage from "./Pages/ResistBeerPage";
import "./App.scss"
import Hoge from "./tests/Hoge.tsx";


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Header />
                    <Sidebar/>
                    <Outlet/>
                </>
            ),
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/resist',
                    element: <ResistBeerPage />
                },
                {
                    path: '/hoge',
                    element: <Hoge />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App