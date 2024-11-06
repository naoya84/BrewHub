import "../assets/stylesheet/Header.scss"
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header() {
    // const apiBaseUrl = process.env.REACT_APP_API_BASE_URL as string;
    const apiBaseUrl = import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
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