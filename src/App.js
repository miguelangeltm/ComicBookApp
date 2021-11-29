import React from "react";
import { Route } from 'react-router-dom';
import Main from './components/Templates/Main/Main';
import Details from './components/Templates/Details/Details';
import "./app.css";

function App() {
  
  return (
   <div>
     <Route path='/' exact>
        <Main/>
     </Route>
     <Route path='/details/:id'>
        <Details/>
     </Route>

   </div>
  );
}

export default App;
