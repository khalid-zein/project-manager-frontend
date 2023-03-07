import { BrowserRouter} from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
