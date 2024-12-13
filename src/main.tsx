import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Calc from './pages/calc.tsx'

const route = createBrowserRouter([
  {
    path :"/",
    element : <Home></Home>
  },{
    path:"/BMICalc",
    element : <Calc></Calc>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
