import {ReactElement} from "react";
import {useUser} from "../UserContext.ts";
import LoginPage from "../Pages/LoginPage.tsx";

export default function Authorized(props: { children: ReactElement }) {
    const user = useUser()
    return (
        user ? props.children : <LoginPage />
    )
}