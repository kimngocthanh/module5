
import './App.css';
import Header from './Header';
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListServices } from './services/components/Service';
import EditService from './services/components/EditService';
import CreateService from './services/components/CreateService';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ListServices />} />
          <Route path='/edit-service/:id' element={<EditService />} />
          <Route path='/create-service' element={<CreateService />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
