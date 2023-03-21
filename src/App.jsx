import { useContext} from 'react';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { Hero } from "./components/Hero";
import { Context } from "./Context";
import { ClickedImage } from './components/ClickedImage';





function App() {

  const {pictures,pictureOpen} = useContext(Context);

  return (
   
      <div className="App">
        
          <Header />
          <Hero/>
          <Outlet/>
          <Photos/>
          {pictureOpen.opened && <ClickedImage
                                    photo={pictureOpen.picture}
                                  />}
          
          
      </div>
   
    
  )
}

export  {App};
