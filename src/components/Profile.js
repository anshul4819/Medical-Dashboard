import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    render(){
        return(
            <>
                {/* name,age, past disease, height, address,  */}
                <div className = "form-box">
                    <form>
                        
                        <div className = "field1">
                        <label> <h1>Customer Info</h1> </label>
                        <input placeholder="Name"/>        
                        <input placeholder="Phone 000-000-0000"/>
                        <input placeholder="E-mail"/>
                        <input placeholder="Age"/>
                        <input placeholder="Height (in cm)"/>
                        <input placeholder="Previous Disease (if any)"/>
                        <textarea placeholder="Present Address"/>                        
                        
                        </div>

                        <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
                    </form>
                </div>
            </>
        );        
        
    }
}
export default Profile;