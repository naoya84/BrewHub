import "../assets/stylesheet/Header.scss"
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header() {
    const apiBaseUrl = import.meta.env.MODE == "development"
        ? "http://localhost:8080"
        : "https://brew-hub-58d4d2270f21.herokuapp.com";

    return (
        <nav>
            <p className="logo">BrewHub</p>
            <form className="logout-form" action={`${apiBaseUrl}/logout`} method="post">
                <button type="submit"><RiLogoutBoxLine /></button>
            </form>
        </nav>
    );
}