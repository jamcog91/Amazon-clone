import './App.css';
import Header from './Header.js';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import NoPage from './NoPage';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Checkout" element={<Checkout />}></Route>
            <Route path="/*" element={<NoPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
};

export default App;
