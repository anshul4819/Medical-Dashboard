import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

class Apps extends Component {
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
        e.preventDefault()
        this.setItem({
            name: '',
            email: '',
            psw: ''
        })
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
            <form onSubmit = {this.onSubmit} action="action_page.php" style={{border:'1px solid #ccc'}}>
                <div className="container">
                <br/>
                <br/>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.onChangeName} name="name" required/>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.onChangePassword} required/>
            
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
            
                <label>
                    <input type="checkbox" checked="checked" name="remember" style={{marginBottom:'15px'}}/> Remember me
                </label>
            
                {/* <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p> */}

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn" >Sign Up</button>
                </div>
                </div>
            </form>
        );
    }
    
}

export default Apps;