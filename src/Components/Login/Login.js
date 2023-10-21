import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { API } from '../../constant';
import { setToken } from '../../helpers';

function Login({isRegistered, switchMode}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)
    const { setUser } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    let navigate = useNavigate();

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };

    const onFinish = async (values) => {
        setIsLoading(true);
        try {
          const value = {
            identifier: values.email,
            password: values.password,
          };
          const response = await fetch(`${API}/auth/local`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
          });
          const data = await response.json();
          if (data?.error) {
            throw data?.error;
          } else {
            // set the token
            setToken(data.jwt);
    
            // set the user
            setUser(data.user);
    
            console.success(`Welcome back ${data.user.username}!`);
    
            navigate("/profile", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };

    // function handleSubmitSignIn(e){
    //     e.preventDefault();
    //     // console.log("Signing in...")
    //     fetch("http://localhost:1337/api/users", {
    //         method: "GET",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username, password }),
    //     }).then((res) => {
    //         if (res.ok) {
    //         res.json().then((user) => {
    //             localStorage.setItem("user", user.id);
    //             navigate("home")
    //             window.location.reload();
    //         });
    //         } else {
    //         res.json().then((errors) => {
    //             console.error(errors);
    //             alert("Invalid Credentials");
    //         });
    //         }
    //     });
    // }

    return(
        <div className="formContainer">
            <form className="loginForm" id="loginForm" onSubmit={onFinish}> 
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