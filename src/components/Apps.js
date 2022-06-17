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
                    <div className='def'>dsjfos</div>
                </div>
            </div>
        );
    }    
}

export default Apps;