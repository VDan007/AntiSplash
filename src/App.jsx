
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Photos } from "./pages/Photos"
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { AuthDetails } from "./components/auth/AuthDetails";






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
