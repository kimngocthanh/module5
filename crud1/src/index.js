import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import { ToastContainer } from 'react-toastify';
import Create from './components/Create';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='/create' element={<Create />} />
    </Routes>
    
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
