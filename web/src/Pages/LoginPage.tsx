export default function LoginPage() {
    const googleSignIn = () => {
        window.location.href = '/oauth2/authorization/google'
    }

    return(
        <>
            <h2>ようこそ BrewHubへ</h2>
            <button onClick={googleSignIn}>Googleでサインイン</button>
        </>
    )
}