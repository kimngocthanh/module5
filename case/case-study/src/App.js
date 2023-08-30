
import './App.css';
import Header from './Header';
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListServices } from './services/components/Service';
import EditService from './services/components/EditService';
import CreateService from './services/components/CreateService';
import Customer from './customers/components/Customer';
import AddCustomer from './customers/components/AddCustomer';
import EditCustomer from './customers/components/EditCustomer';
import Contact from './contacts/components/Contact';
import CreateContact from './contacts/components/CreateContact';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ListServices />} />
          <Route path='/edit-service/:id' element={<EditService />} />
          <Route path='/create-service' element={<CreateService />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/customer-create' element={<AddCustomer />} />
          <Route path='/edit-customer/:id' element={<EditCustomer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact-create' element={<CreateContact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
