import {useNavigate} from "react-router-dom";
import {useUser} from "../UserContext.ts";

export default function Sidebar() {
    const navigate = useNavigate()
    const user = useUser()

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
                {user && (
                    <li>
                        <form action="http://localhost:8080/logout" method="post">
                            <button type="submit">ログアウト</button>
                        </form>
                    </li>
                )}
            </ul>
        </div>
    );
}