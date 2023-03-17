
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { SignIn } from "./components/firebase/auth/SignIn";
import { SignUp } from "./components/firebase/auth/SignUp";
import { AuthDetails } from "./components/firebase/auth/AuthDetails";
import { Hero } from "./components/Hero";






function App() {

  return (
   
      <div className="App">
        
          <Header />
          <Hero/>
          <Outlet/>
          <Photos/>
          {/* <SignIn/>
          <SignUp/> */}
          <AuthDetails/>
      </div>
   
    
  )
}

export  {App};
