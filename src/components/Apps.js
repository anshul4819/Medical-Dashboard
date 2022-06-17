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
                <div className='abc'>
                    <Sidebar/>
                    <div className='def'></div>
                </div>
            </div>
        );
    }    
}

export default Apps;