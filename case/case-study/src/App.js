
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import Service from './components/Service';
import EditService from './components/EditService';
import CreateService from './components/CreateService';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from './components/Customer';
import EditCustomer from './components/EditCustomer';
import AddCustomer from './components/AddCustomer';
import Contact from './components/CreateContact';
import CreateContact from './components/CreateContact';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Service />} />
          <Route path='/service/create' element={<CreateService />} />
          <Route path='/service/edit' element={<EditService />} />
          <Route path='/customer/list' element={<Customer />} />
          <Route path='/customer/edit' element={<EditCustomer />} />
          <Route path='/customer/add' element={<AddCustomer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/add' element={<CreateContact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
