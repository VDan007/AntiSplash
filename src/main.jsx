import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from "./error-page";
import  Cart  from "./pages/Cart"
import { ContextProvider } from './Context';
import { SignIn } from './components/firebase/auth/SignIn';
import { SignUp } from './components/firebase/auth/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    
  },
  {
    path:"/cart",
    element: <Cart/>
  },
  { path:"/login",
    element: <SignIn/>
  },
  { path:"/join",
    element: <SignUp/>
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
)
