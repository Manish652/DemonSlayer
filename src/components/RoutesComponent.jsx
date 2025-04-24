import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import Home from "./Home.jsx"
import About from "./About.jsx";
import Dashbord from "./Dashbord.jsx"
import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
const router = createBrowserRouter([
  {path:"/",
  element:<div>
    <NavBar/>
    <Home/>
  </div>
  },
  
  {
    path:"/about",
    element:<div>
      <NavBar/>
      <About/>
    </div>
  },
  
  {
    path:"/dashbord",
    element:<div>
      <NavBar/>
      <Dashbord/>
    </div>
  },

  {
    path:"/contact",
    element:<div>
      <NavBar/>
      <Contact/>
    </div>
  }

]);



function RoutesComponent() {
  return (
      
        <div className='bg-gray-900 w-full h-screen flex flex-col'>
          <RouterProvider router={router} />
        </div>
      
    )
}

export default RoutesComponent
