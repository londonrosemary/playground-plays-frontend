import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login({isRegistered, switchMode}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    let navigate = useNavigate();
    

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };

    function handleSubmitSignIn(e){
        e.preventDefault();
        // console.log("Signing in...")
        fetch("http://localhost:1337/api/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
            res.json().then((user) => {
                localStorage.setItem("user", user.id);
                navigate("home")
                window.location.reload();
            });
            } else {
            res.json().then((errors) => {
                console.error(errors);
                alert("Invalid Credentials");
            });
            }
        });
    }

    return(
        <div className="formContainer">
            <form className="loginForm" id="loginForm" onSubmit={handleSubmitSignIn}> 
            <div className='nonPwInput'>   
                <input
                    className="username"
                    placeholder="Username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </div>
                    <input
                        className="password"
                        placeholder="Password"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <i id="view" onClick={togglePasswordVisiblity}>view</i>
                <div className="auth__form-container_fields-content_button">
                    <button id="signInButton"type="submit">Sign In</button>
                </div>
            </form>
            <p>
                {isRegistered
                    ? "have an account? "
                    : "need an account? "}
                <em onClick={switchMode}>{isRegistered ? "sign in" : "sign up"}</em>
            </p>
        </div>
    )
}

export default Login;