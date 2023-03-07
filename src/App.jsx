
import Header from './components/Header';
import { Outlet,Link } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { createContext,useEffect,useState } from 'react';

const picturesContext = createContext();



function App() {

const [pictures, setPictures] = useState([]);


useEffect(
  ()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(data=>data.json())
    .then(data=>setPictures(data))
  },[]
);


  return (
   
      <div className="App">
        <picturesContext.Provider value={pictures}>
          <Header />
          <Outlet/>
          <Photos pictures = {pictures}/>

        </picturesContext.Provider> 
        
      </div>
   
    
  )
}

export  {App,picturesContext };
