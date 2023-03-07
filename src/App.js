import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signup' element={ <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
