import "./Auth.css";
import { useState } from "react";
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import AuthBanner from "../../assets/Home Banner.png"
import Star from "../../assets/Star.png"

export default function Auth() {
    const [selectedForm, setSelectedForm] = useState("register")

    function swapForms() {
        if (selectedForm == "register") {
            setSelectedForm("login")
        } else {
            setSelectedForm("register")
        }
    }

    return (
        <>
            <div className="auth-wrapper test">
                <div className="auth-image-col test">
                    <img src={AuthBanner} />
                </div>
                {/*form will go here */}
                {selectedForm == "register" ? <RegisterForm toggleForm={swapForms} /> : <LoginForm toggleForm={swapForms} />}
            </div>
        </>

    )
}

function RegisterForm({ toggleForm }) {
    return (
        <form className="auth-form">
            Register
            <div className="form-auction">
                <p>Already have an account</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Log in</button>
            </div>
        </form>
    )
}

function LoginForm({ toggleForm }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        alert("form submitted")
    }

    return (
        <form  onSubmit={handleSubmit} className="auth-form">
            <div className="Star-row">
                <img className="auth-star" src={Star} />
            </div>
            <SectionDivider text="Login" />
            <label className="form-input">
                <p>Email: </p>
                <input type="email"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label className="form-input">
                <p>Password: </p>
                <input type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit " className="auth-btn">Login</button>
            <div className="form-auction">
                <p>Dont have an account</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Sign Up</button>
            </div>

            
        </form>
    )
}