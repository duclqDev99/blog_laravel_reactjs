import logo from './logo.svg';
import './App.css';
import './styles/adminPages/css/style.css'
import './styles/adminPages/css/bootstrap.min.css'
import './styles/adminPages/css/owl.carousel.css'
import './styles/adminPages/css/tempusdominus-bootstrap-4.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import AdminPages from "./pages/adminPages";
import UserPages from "./pages/userPages";



function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminPages/>} />
                <Route path="/" element={<UserPages/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
