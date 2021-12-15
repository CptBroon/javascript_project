import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


const LoginPage = ({Login, error}) => {

    const [details, setDetails] = useState({name:"", password:""});
    const navigate = useNavigate()

    async function submitHandler(e) {
        e.preventDefault();
        Login(details);
        if (details.name == "Almas" && details.password == "admin123") {
            navigate("/home")
        }
    }



    return (
        <>
        <form className="login-form" onSubmit={submitHandler}>
            <h3>Please Log In</h3>
            {(error !="") ? (<div className="error">{error}</div>) : ""}
            <ul className="login-list">
                <li><label htmlFor="name">Your Username</label>
                <input className="login-input" type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} required autofocus></input></li>
                <li><label htmlFor="password">Your Password</label>
                <input className="login-input" type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} required></input></li>
                <li><input type="submit" value="Log In" id="login-bttn"/></li>
            </ul>
        </form>
        </>
    )
}


export default LoginPage;