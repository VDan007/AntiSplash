
import Header from './components/Header';
import { Outlet,Link } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { createContext,useEffect,useState } from 'react';
import { ContextProvider } from './Context';






function App() {

  return (
   
      <div className="App">
        <ContextProvider>
          <Header />
          <Outlet/>
          <Photos/>
        </ContextProvider> 
        
      </div>
   
    
  )
}

export  {App};
