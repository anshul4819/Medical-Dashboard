import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './components/Apps';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import FileUploadComponent from './components/FileUploadComponent';
import AnalysisComponent from './components/Analysis';
import Login from './components/Login'
import Uploaded from './components/FileUploaded';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="apps" element={<Apps />}/>
      <Route path="profile" element={<Profile />} />
      <Route path="fileupload" element={<FileUploadComponent />} /> 
      <Route path="analysis" element={<AnalysisComponent />} /> 
      <Route path="fileuploaded" element={<Uploaded />} /> 

    </Routes>  
  </BrowserRouter>
);