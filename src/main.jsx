import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from "./error-page";
import  Cart  from "./pages/Cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/carttt",
        element: <Cart/>
      },
    ],
  },
  {
    path:"/cart",
    element: <Cart/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)
