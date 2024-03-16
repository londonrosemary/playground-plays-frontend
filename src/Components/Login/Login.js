import {React, useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Login({isRegistered, switchMode}){
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    let navigate = useNavigate();

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };
    
    function handleSubmitSignIn(e){
        e.preventDefault();
        axios
        .post('http://localhost:1337/api/auth/local', {
          identifier: identifier,
          password: password,
        })
        .then(response => {
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem("user", response.data.user)
          localStorage.setItem("authToken", response.data.jwt)
          navigate("/")
          window.location.reload()
        })
        .catch(error => {
          console.log('An error occurred:', error.response);
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
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
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
                    ? "Have an account? "
                    : "Need an account? "}
                <em onClick={switchMode}>{isRegistered ? "Sign In" : "Register"}</em>
            </p>
        </div>
    )
}

export default Login;