import { a } from "vitest/dist/chunks/suite.CcK46U-P.js";
import "../assets/stylesheet/Header.scss"
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header() {
    const apiBaseUrl = import.meta.env.MODE == "development"
        ? "http://localhost:8080"
        : "https://brewhub-nblq.onrender.com";

        console.log(apiBaseUrl)

    return (
        <nav>
            <p className="logo">BrewHub</p>
            <form className="logout-form" action={`${apiBaseUrl}/logout`} method="post">
                <button type="submit"><RiLogoutBoxLine /></button>
            </form>
        </nav>
    );
}