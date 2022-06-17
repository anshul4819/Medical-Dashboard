import React, {Component} from "react";
import Navigationbar from './Navbar';
import Sidebar from './Sidebar';

class Analysis extends Component {
    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }
    render(){
        return(
            <>
                <Navigationbar/>
                <Sidebar/>
                <div style={{textAlign:"center"}}>
                    
                    <br/> <br/>
                    <h2>
                        This is the analysis of your genetic data.
                    </h2>
                </div>  
            </>
            
        );
    };
}
export default Analysis;