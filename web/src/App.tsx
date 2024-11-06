import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./Pages/Header";
import Tabbar from "./Pages/Tabbar.tsx";
import Home from "./Pages/Home";
import ResistBeerPage from "./Pages/ResistBeerPage";
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
                    <Authorized>
                        <Header />
                    </Authorized>
                    
                    <Outlet />
                    
                    <Authorized>
                        <Tabbar />
                    </Authorized>
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