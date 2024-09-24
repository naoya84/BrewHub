import {useNavigate} from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()

    return (
        <div style={{backgroundColor: 'rosybrown'}}>
            <ul>
                <li>
                    <p onClick={() => {
                        navigate('/')
                    }}>Home
                    </p>
                </li>
                <li>
                    <p onClick={() => {
                        navigate('/resist')
                    }}>ビールを登録
                    </p>
                </li>
                <li>
                    <p onClick={() => {
                        navigate('/craftbeers')
                    }}>ビール図鑑を見る
                    </p>
                </li>
            </ul>
        </div>
    );
}