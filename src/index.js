import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './components/Apps';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import Navigationbar from './components/Navbar';
import FileUploadComponent from './components/FileUploadComponent';
import AnalysisComponent from './components/Analysis';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navigationbar/>
    <Routes>
      
      <Route path="/" element={<Apps />} />
      <Route path="profile" element={<Profile />} />
      <Route path="fileupload" element={<FileUploadComponent />} /> 
      <Route path="analysis" element={<AnalysisComponent />} /> 
    </Routes>  
  </BrowserRouter>
);