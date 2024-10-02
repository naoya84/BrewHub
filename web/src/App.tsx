import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";
import Home from "./Pages/Home";
import ResistBeerPage from "./Pages/ResistBeerPage";
import CraftBeerPage from "./Pages/CraftBeerPage.tsx";
import CraftBeerDetailPage from "./Pages/CraftBeerDetailPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import UserProvider from "./Component/UserProvider.tsx";
import UnAuthorized from "./Component/UnAuthorized.tsx";
import Authorized from "./Component/Authorized.tsx";
import {DefaultAuthRepository} from "./Repositories/AuthRepository.ts";
import "./App.scss"
import Hoge from "./tests/Hoge.tsx";

function App() {
    const authRepository = new DefaultAuthRepository()
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Header />
                    <Sidebar />
                    <Outlet />
                </>
            ),
            children: [
                {
                    path: '/',
                    element: (
                        <>
                            <Authorized>
                                <Home/>
                            </Authorized>
                            <UnAuthorized>
                                <LoginPage/>
                            </UnAuthorized>
                        </>
                    )
                },
                {
                    path: '/resist',
                    element: (
                        <Authorized>
                            <ResistBeerPage/>
                        </Authorized>
                    )
                },
                {
                    path: '/craftbeers',
                    element: (
                        <Authorized>
                            <CraftBeerPage/>
                        </Authorized>
                    )
                },
                {
                    path: '/craftbeers/:id',
                    element: (
                        <Authorized>
                            <CraftBeerDetailPage/>
                        </Authorized>
                    )
                },
                {
                    path: '/hoge',
                    element: <Hoge />
                }
            ]
        }
    ]);

    return (
        <UserProvider authRepository={authRepository}>
            <RouterProvider router={router} />
        </UserProvider>
    );
}

export default App