import React, { Component } from 'react';
import './Login.css';
import {Container, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"
class Login extends Component {
    userData;
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            psw: ''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ psw: e.target.value })
    }
    onSubmit(e) {
        // const navigate = useNavigate();
        e.preventDefault()
        this.setItem({
            name: '',
            email: '',
            psw: ''
        })
        // navigate('/fileupload');

    }
    // React Life Cycle
    componentDidMount() {
        
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                psw: this.userData.psw,
            })
        } 
        else {
            this.setState({
                name: '',
                email: '',
                psw: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render(){
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">geneone.AI</Navbar.Brand>
              </Container>
            </Navbar>

            <form onSubmit = {this.onSubmit} action="action_page.php" style={{flex:'2', border:'1px solid #ccc'}}>
                <div className="container">
                <br/>
                <br/>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor='name'><b>Name</b></label>
                <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.onChangeName} name="name" required/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.onChangePassword} required/>
            
                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            
                <label>
                    <input type="checkbox" name="remember" style={{marginBottom:'15px'}}/> Remember me
                </label>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <Link to="/apps"><button type="submit"  className="signupbtn" >Sign Up</button></Link>
                </div>
                </div>
            </form>
            </>
        );
    }
    
}

export default Login;