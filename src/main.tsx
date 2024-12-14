import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import CalcPageBMI from './pages/BMICalc.tsx'
import CalorieCalc from './pages/CalorieCalc.tsx'

const route = createBrowserRouter([
  {
    path :"/",
    element : <Home></Home>
  },{
    path:"/BMICalc",
    element : <CalcPageBMI></CalcPageBMI>
  },{
    path:"/CalorieCalc",
    element : <CalorieCalc></CalorieCalc>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
