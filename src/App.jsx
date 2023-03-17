
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { SignIn } from "./components/firebase/auth/SignIn";
import { SignUp } from "./components/firebase/auth/SignUp";
import { AuthDetails } from "./components/firebase/auth/AuthDetails";






function App() {

  return (
   
      <div className="App">
        
          <Header />
          <Outlet/>
          <Photos/>
          <SignIn/>
          <SignUp/>
          <AuthDetails/>
      </div>
   
    
  )
}

export  {App};
