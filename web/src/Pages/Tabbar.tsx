import {useNavigate} from "react-router-dom";
import "../assets/stylesheet/Tabbar.scss"
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaRegStar } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export default function Tabbar() {
    const navigate = useNavigate()

    return (
        <div className="tabbar-container">
            <AiOutlineUnorderedList className="content" onClick={() => navigate('/')} />
            <FaRegStar className="content" onClick={() => navigate('/')} />
            <FaUserFriends className="content" onClick={() => navigate('/')} />
            <BsPersonCircle className="content" onClick={() => navigate('/')} />
        </div>
    );
}