import {useNavigate} from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()

    return (
        <div style={{backgroundColor: 'rosybrown'}}>
            <ul>
                <li>
                    <p onClick={() => {
                        navigate('/')
                    }}>Homeへ
                    </p>
                </li>
                <li>
                    <p onClick={() => {
                        navigate('/resist')
                    }}>登録ページへ
                    </p>
                </li>
            </ul>
        </div>
    );
}