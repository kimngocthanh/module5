import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BookList from './components/ex2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/create';
import EditBook from './components/edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/create' element={<AddBook />} />
        <Route path='/edit/:id' element={<EditBook />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
