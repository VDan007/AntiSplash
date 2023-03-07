import React from "react";
import Header from './components/Header';
import { Outlet,Link } from 'react-router-dom';
import { ContextProvider } from './Context';



function App() {
  

  return (
   
      <div className="App">
        <Header/>
        <Link to="/cart">
          <h1>Cart</h1>
        </Link>
        <Outlet/>
      </div>
   
    
  )
}

export default App;
