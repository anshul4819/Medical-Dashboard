import React, { Component } from 'react';
import {Container, Navbar, NavLink} from 'react-bootstrap';
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

function OTP () {
    const [otp,setOTP] = useState("");
    const [message,setMessage]=useState("");
    const navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://localhost:9443/upload/metadata", {
            method: "POST",
            body: JSON.stringify({
              otp:otp
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
    };
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <br/>
            <div style={{textAlign:"center"}}>
                Please enter the 6 digit OTP sent to your email eddress 
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={otp}
                        placeholder="Enter OTP"
                        onChange={(e)=>setOTP(e.target.value)}
                    /><br/>
                    <button> Verify </button>
                </form>
                <br/>
                Resend OTP

                {/* {{Message}} */}
            </div>
            
        </>
    );
}
export default OTP;