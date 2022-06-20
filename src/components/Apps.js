import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Navigationbar from './Navbar';
import Sidebar from './Sidebar';


class Apps extends Component {
  
    render(){
        return (
            <div>
                <Navigationbar />
                <div style={{display:"flex"}}>
                    <Sidebar/>
                    <div style={{flex:"4", paddingLeft:"210px"}}>
                        <br/><br/>
                        <h4> Welcome to geneone.AI </h4>
                        <br/>
                        <h4> Please proceed further by uploading your genetic data </h4>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Apps;