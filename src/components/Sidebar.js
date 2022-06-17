import React, { Component } from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle"> Menu </h3>
                        <u1 className="sidebarList">

                            <li className="sidebarListItem">
                                <Link to="/fileupload"><button> Upload your genetic data here </button></Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/analysis"><button> Get Analysis </button></Link>
                            </li>

                        </u1>
                    </div>
                </div>
            </div>
        );
    }
};

export default Sidebar;