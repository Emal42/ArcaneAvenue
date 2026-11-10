import "./Auth.css";
import { useState } from "react";
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import AuthBanner from "../../assets/Home Banner.png"
import Star from "../../assets/Star.png"
import axios from "axios";

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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")
    const [errorMSG, setErrorMSG] = useState("")
    const [accountType, setAccountType] = useState("buyer");
    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMSG("");

        if (password !== confirmPass) {
            setErrorMSG("Your passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/auth/register",
                {
                    email,
                    password,
                    account_type: accountType
                }
            );

            alert("Account created successfully!");

        } catch (error) {
            setErrorMSG(error.response?.data?.detail || "Could not connect to server");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="auth-form">

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
            <label className="form-input">
                <p>Password: </p>
                <input type="password"
                    required
                    value={confirmPass}
                    onChange={(e) => setconfirmPass(e.target.value)} />
            </label>

            <div className="account-type-selector">
                <label className="account-radio">
                    Buyer
                    <input
                        type="radio"
                        name="type"
                        value="buyer"
                        checked={accountType === "buyer"}
                        onChange={(e) => setAccountType(e.target.value)}
                    />
                </label>

                <label className="account-radio">
                    Seller
                    <input
                        type="radio"
                        name="type"
                        value="seller"
                        checked={accountType === "seller"}
                        onChange={(e) => setAccountType(e.target.value)}
                    />
                </label>
            </div>


            <button type="submit " className="auth-btn">Sign UP</button>
            {errorMSG ? <p className="Form-err">{errorMSG}</p> : null}
            <div className="form-auction">
                <p>Alredy have an account</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Log in</button>
            </div>
        </form>
    )
}

function LoginForm({ toggleForm }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMSG, setErrorMSG] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMSG("");

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/auth/login",
                {
                    email,
                    password
                }
            );

            alert("Welcome back, " + response.data.email);

        } catch (error) {
            setErrorMSG(error.response?.data?.detail || "Login failed");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form">
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
            {errorMSG && <p className="Form-err">{errorMSG}</p>}
            <div className="form-auction">
                <p>Dont have an account</p>
                <button type="button" onClick={toggleForm} className="form-toggle-btn">Sign Up</button>
            </div>


        </form>
    )
}