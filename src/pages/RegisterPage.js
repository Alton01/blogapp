import { useContext, useState } from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";


export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState (false);
    const {setUserInfo} = useContext(UserContext);

async function register(ev) {
    ev.preventDefault();
     const response =  await fetch('https://blogaapp-api.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
    });
    if(response.status === 200){
        response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
        })
    } else{
        alert('Registration failed. Username already exists')
    };  
}


if (redirect) {
    return <Navigate to={'/'} />;
}

    return (
        <form className="register" onSubmit={register}>
            <h1>REGISTER</h1>
            <input type="text" placeholder="username" 
            value={username} 
            onChange={ev => setUsername(ev.target.value)} />

            <input type="password" placeholder="password"
            value={password} 
            onChange={ev => setPassword(ev.target.value)} />
            {username && password && ( <button>Register</button> )}
        </form>
    );
}