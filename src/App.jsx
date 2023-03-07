
import Header from './components/Header';
import { Outlet,Link } from 'react-router-dom';

import { createContext,useEffect } from 'react';

const pictures = createContext('');



function App() {


useEffect(
  ()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(data=>data.json())
    .then(data=>console.log(data))
  },[]
);


  return (
   
      <div className="App">
        <pictures.Provider value={true}>
          <Header />
            <Link to="/cart">
              <h1>Cart</h1>
            </Link>
          <Outlet/>
        </pictures.Provider> 
        
      </div>
   
    
  )
}

export  {App };
