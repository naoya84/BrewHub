import "../assets/stylesheet/Header.scss"
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header() {
    return (
        <nav>
            <p className="logo">BrewHub</p>
            <form className="logout-form" action="http://localhost:8080/logout" method="post">
                <button type="submit"><RiLogoutBoxLine /></button>
            </form>
        </nav>
    );
}