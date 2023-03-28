import { useContext} from 'react';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { Hero } from "./components/Hero";
import { Context } from "./Context";
import { ClickedImage } from './components/ClickedImage';
import { PopUp } from './components/PopUp'; 





function App() {

  const {pictureOpen,search,showPopUp} = useContext(Context);

  return (
   
      <div className="App">
        
          <Header />
        {showPopUp && <PopUp/>}
         {!search && <Hero/>}
          <Outlet/>
          <Photos/>
          {pictureOpen.opened && <ClickedImage
                                    photo={pictureOpen.picture}
                                  />}
          
          
      </div>
   
    
  )
}

export  {App};
