import React from 'react';
import './App.css';
import { Homepage } from './Pages/Homepage/Homepage';
import {BrowserRouter, Route} from 'react-router-dom'
import { DisplayItem } from './Pages/itemDisplayer';
import Neolithic from './Pages/Neolithic/Neolithic';
import Navbar from './Pages/Nav-bar/nav-bar'




function App() {
  return (
    <BrowserRouter>    
    <div> 
        
        <Route exact path="/" component={Homepage} />
        <a href="/Neolithic">Click me</a>
<Route path="/Neolithic" component={Neolithic} />

    </div>
    </BrowserRouter>
  );
}

export default App;
