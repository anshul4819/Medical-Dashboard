import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <br/>
                
                <u1 className="sidebarList">
                    <li><Link to="/fileupload"><button style={{backgroundColor:"black"}}> Upload your genetic data here </button></Link></li>
                    <li><Link to="/analysis"><button style={{backgroundColor:"black", paddingTop:"10px"}}> Get Analysis </button></Link></li>
                </u1>
            </div>
        );
    }
};

export default Sidebar;