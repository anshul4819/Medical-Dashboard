import React from 'react';
import Navigationbar from './Navbar';
import Sidebar from './Sidebar';

function Uploaded(){
    return(
        <>
            <Navigationbar/>
            <div style={{display:"flex"}}>
                <Sidebar/>
                <div style={{paddingLeft:"300px",flex:"4"}}>
                    <br/><br/>
                    <h2> Your file has been uploaded. </h2>
                </div>
            </div>
        </>
    );
}

export default Uploaded;