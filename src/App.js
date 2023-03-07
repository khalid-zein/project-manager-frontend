import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
