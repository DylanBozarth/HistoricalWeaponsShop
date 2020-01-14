import React from 'react';
import './App.css';
import { Homepage } from './Pages/Homepage/Homepage';
import {BrowserRouter, Route} from 'react-router-dom'
import Neolithic from './Pages/Item-Pages/Neolithic/Neolithic';
import Bronze from '../src/Pages/Item-Pages/Bronze/Bronze'
import Iron from '../src/Pages/Item-Pages/Iron/Iron'
import Roman from '../src/Pages/Item-Pages/Roman/Roman'
import EarlyMiddle from '../src/Pages/Item-Pages/EarlyMiddle/EarlyMiddle'
import HighMiddle from '../src/Pages/Item-Pages/HighMiddle/HighMiddle'
import Archery from '../src/Pages/Item-Pages/Archery/Archery'
import Fantasy from '../src/Pages/Item-Pages/Fantasy/Fantasy'





function App() {
  return (
    <BrowserRouter>    
    <div> 
        
        <Route exact path="/" component={Homepage} />
<Route path="/Neolithic" component={Neolithic} />
<Route path="/bronzeage" component={Bronze} /> 
<Route path="/ironage" component={Iron} /> 
<Route path="/Romanera" component={Roman} /> 
<Route path="/EarlyMiddleAges" component={EarlyMiddle} /> 
<Route path="/LateMiddleAges" component={HighMiddle} /> 

<Route path="/Archery" component={Archery} /> 
<Route path="/Fantasy" component={Fantasy} /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
