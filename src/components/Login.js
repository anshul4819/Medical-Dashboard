import React, { Component } from 'react';
import './Login.css';
import { useState } from "react";
import { useEffect } from 'react';
import {Container, Navbar, NavLink} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";


function Login () {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pwd,setPwd] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  
  let handleSubmit = async (e) => {
      e.preventDefault();
      localStorage.setItem("abc",name);
      try {
        let res = await fetch("https://localhost:9443/upload/metadata", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            pwd: pwd,
          }),
        });
        if (res.status === 200) {
          setName("");
          setEmail("");
          setPwd("");
          setMessage("User created successfully");
          console.log("Everything ok");
        } else {
          setMessage("Some error occured");
        }
        
      } catch(err) {
          console.log(err);
      }
      navigate('/OTP');
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

    // function handleSignOut(event) {
    //   setUser({});
    //   document.getElementById("signInDiv").hidden = false;
    // }

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
    
    
    // render(){

        return (
            <>
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
                  </Container>
                </Navbar>
                <br/>
                <div id="signInDiv"></div>
                
                <div style={{textAlign:"center"}}>
                  <form className="input" onSubmit={handleSubmit}>
                      <label> <h1>Sign Up</h1> </label>
                      <br/>
                      <input
                          type="text" 
                          value={name}
                          placeholder="Name"
                          onChange={(e)=>setName(e.target.value)}
                      /><br/>
                      <input 
                          type="text" 
                          value={email}
                          placeholder="Email"
                          onChange={(e)=>setEmail(e.target.value)}
                      /><br/>
                      <input 
                          type="password" 
                          value={pwd}
                          placeholder="Password"
                          onChange={(e)=>setPwd(e.target.value)}
                      /><br/>
                      <input 
                          type="password" 
                          placeholder="Repeat Password"
                      /><br/>
                      <button type = "submit"> Sign Up</button>
                      <div className="message">{message ? <p>{message}</p> : null}</div>
                  </form>
                  Already have an account?
                  <br/>
                  <Link to="/loginpage"> <button> Login </button> </Link>
                </div>
            </>
        );
    // }
    
}

export default Login;