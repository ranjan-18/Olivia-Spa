import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Location from './pages/Location';
import Services from './pages/Services';
import About from './pages/About';
import Header from './components/Header';
import Navbar from './components/Navbar';

const router= createBrowserRouter(
[
  {
    path: '/',
    element: <div>
  
      <Home/>
    </div>
  },
  {
    path: '/location',
    element: <div>
      <Location/>
    </div>
  },
  {
    path: '/services',
   
    element: <div>
    
      <Services/>
    </div>
  },
  {
    path: '/about',
    element: <div>
  
      <About/>
    </div>
  },
  ]
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App