
import {Link } from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";


export default function Header () {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect (() => {
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
  }, []);


function logout() {
  fetch('http://localhost:4000/logout', {
    credentials: 'include',
    method: 'POST',
  });
  setUserInfo(null);
  window.location.reload();
}


const username = userInfo?.username;

    return (
        <header>
    <Link to="/" className="logo" >BLOGAPP</Link>
    <nav>
      {username && (
        <>
    
          <Link to="/create">New post</Link>
          <Link to="/" onClick={logout} >Logout</Link>
        </>
      )}

      {!username && (
        <>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </>
      )}  
    </nav>
  </header>
    );
}