import React, { Component } from 'react';
import {Container, Navbar, NavLink} from 'react-bootstrap';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

function LoginPage () {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    
    let handleLogin = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://localhost:9443/upload/metadata", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              pwd: pwd,
            }),
          });
          if (res.status === 200) {
            navigate('/apps');
          } else {
            setMessage("Some error occured");
          }
          
        } catch(err) {
            console.log(err);
        }
        navigate('/apps');
    };
    const [user,setUser]=useState({});
    function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject=jwt_decode(response.credential);
      console.log(userObject);
      localStorage.setItem('username',userObject.name);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      // post(e)=>
      //   name: userObject.name
      //   email: userObject.email
      navigate('/apps');
    }
    useEffect(() => {
      /*global google*/
      google.accounts.id.initialize({
        client_id: "987058352864-gomgclesvtprf6uq5hdtvr9f82p5eskj.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme : "outline", size: "large", textAlign: "center"}
      );
      google.accounts.id.prompt();
    }, []);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
                <div id="signInDiv"></div>
            <br/>
            <div style={{textAlign:"center"}}>
                <form className="input" onSubmit={handleLogin}>
                    <label> <h1>Login</h1> </label>
                    <br/>
                    <input 
                        type="text" 
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br/>
                    <input 
                        type="password" 
                        value={pwd}
                        placeholder="Password"
                        onChange={(e)=>setPwd(e.target.value)}
                    />
                    <br/>
                    <button type = "submit"> Login </button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
            
        </>
    );
}
export default LoginPage;