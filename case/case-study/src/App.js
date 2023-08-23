
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import Service from './components/Service';
import EditService from './components/EditService';
import CreateService from './components/CreateService';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Service />} />
          <Route path='/create' element={<CreateService />} />
          <Route path='/edit' element={<EditService />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
