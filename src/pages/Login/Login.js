import React, { useState } from "react";
import Label from "./components/Label/Label";
import Title from "./components/Title/Title";
import './Login.css'
import '../Login/components/Title/Title.css'
import { useNavigate } from "react-router-dom";

const Login = (props) =>{
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        const{name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        });
        console.log(form)
    };

    const loginSesion = () => {
        if (form.email === validEmail && form.password === validPass) {
            alert("Welcome :D !")
            // props.history.push('../Home/Home.jsx')
            navigate('../Alkemy-MenuApp/Home')
        } else{
            alert("The email or the password is wrong")
        }
    };

    const validPass= "react";
    const validEmail = "challenge@alkemy.org";

    return (
        <div className="login-container">
            <div className="login-content">
                <Title text="Welcome to the MenuApp!"/>
                <Label className="label-login" text="Email" />
                <input
                    id= 'email'
                    name= 'email'
                    type= 'text'
                    placeholder= 'Email address'
                    className= 'input-login'
                    onChange={handleChange}
                />
                <Label className="label-login" text="Password" />
                <input
                    id= 'password'
                    name= "password"
                    type= 'password'
                    placeholder= 'Password'
                    className= 'input-login'
                    onChange={handleChange}
                />
            </div>
            <button className="submit-button" onClick={loginSesion}>
                Sign In
            </button>
        </div>
    )
};

export default Login;