import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from 'react'
// import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    };

    const register = e => {
        e.preventDefault();
        // auth
        //     .createUserWithEmailAndPassword(email,password);
        //     .then((auth) => {
        //         console.log(auth);
        //     })
        //     .catch(error => alert(error.message))

    };

    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    alt="login"
                    src="https://www.shutterstock.com/image-vector/amazon-vector-logo-editorial-icon-260nw-2308224611.jpg"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton" onClick={signIn} type="submit">Sign In</button>
                </form>

                <p>
                    *This is all the legal terms and conditions that no one ever really reads.*
                </p>

                <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    );
};
export default Login;