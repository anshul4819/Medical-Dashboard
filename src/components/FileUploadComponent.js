import React, { Component } from 'react';
import axios from 'axios';
import "./FileUploadComponent.css";
import Navigationbar from './Navbar';
import Sidebar from './Sidebar';

export default class FileUploadComponent extends Component {
 
  constructor(props) {
    super(props);
 
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        image: ''
    }
  }
 
  onFileChange(e) {
      this.setState({ image: e.target.files[0] })
  }
 
  onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('image', this.state.image)
      axios.post("http://127.0.0.1:9443/upload/filedata", formData, {
      }).then(res => {
          console.log(res)
      })
  }


 
  render() {
    return (
      
      <>
        <Navigationbar/>
        <Sidebar/>
        <div className="container">
          
          <div>
            <br/><br/>
            <h3>Upload your genetic data JSON file here</h3>
          </div>
          <hr/>
          <div style={{marginTop:'40px'}}>
          <div className="col-md-4 offset-md-4">
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <input type="file" onChange={this.onFileChange} />
              </div>
              <div className="form-group">
                  <button className="button button1" type="submit">Upload</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </>
    )
  }
}