import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from "../../Context/AuthContext";
import { API } from "../../constant";
import { setToken } from "../../helpers";

function Register({isRegistered, switchMode}){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)
    const [confPasswordShown, setConfPasswordShown] = useState(false)
    const { setUser } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    let navigate = useNavigate();

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };
    
    function toggleConfPasswordVisiblity(){
        setConfPasswordShown(confPasswordShown ? false : true);
    };

    // function handleSignupSubmit(e){
    //     e.preventDefault()
    //     // console.log("Creating account...")
    //     if (password === password_confirmation){
    //         fetch("http://localhost:1337/api/users", {
    //             method: "POST",
    //             headers: { 'Content-Type': "application/json" },
    //             body: JSON.stringify({username, email, password, password_confirmation})
    //         })
    //             .then(resp => resp.json())
    //             .then(user => {
    //             // console.log('Success:', user)
    //             localStorage.setItem("user", user.id);
    //             localStorage.setItem("bearerToken", )
    //             navigate("home")
    //             window.location.reload();
    //             })
    //             .catch(error => console.log('Error:', error))
    //     }
    //     else {
    //         alert('passwords must match')
    //     }
    // 
    // }
    const onFinish = async (e, values) => {
      e.preventDefault();
        setIsLoading(true);
        try {
          const response = await fetch(`${API}/auth/local/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await response.json();
          if (data?.error) {
            throw data?.error;
          } else {
            // set the token
            setToken(data.jwt);
    
            // set the user
            setUser(data.user);
    
            console.success(`Welcome to the Playground ${data.user.username}!`);
    
            navigate("/", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };

    return(
        <div className='formContainer'>
            <form className='LogoutForm' onSubmit={e => onFinish(e)}>
                <div className='nonPwInput'>
                    <input 
                        placeholder="Username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <input
                    placeholder="Password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <i onClick={togglePasswordVisiblity}>view</i>
                <input
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    type={confPasswordShown ? "text" : "password"}
                    value={password_confirmation}
                    onChange={e => setPassword_Confirmation(e.target.value)}
                    required
                />
                <i onClick={toggleConfPasswordVisiblity}>view</i>
                <div className="auth__form-container_fields-content_button">
                    <button type="submit">Sign Up</button>
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

export default Register;