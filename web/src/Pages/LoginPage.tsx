import "../assets/stylesheet/Login.scss"

export default function LoginPage() {
    const googleSignIn = () => {
        window.location.href = '/oauth2/authorization/google'
    }

    return(
        <>
            <div className="login-container">
                <p className="login-title">BrewHub</p>
                <button className="login-button" onClick={googleSignIn}>ログイン</button>
            </div>
        </>
    )
}