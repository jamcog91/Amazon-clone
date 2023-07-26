import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://www.shutterstock.com/image-vector/amazon-vector-logo-editorial-icon-260nw-2308224611.jpg"
                     />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="text" />

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>
                    *This is all the legal terms and conditions that no one ever really reads.*
                </p>

                <button className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    );
};
export default Login;