/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Paper, Button } from "@mui/material"
import dataHome from '../../utils/data.json'
import { useState,useEffect } from "react"

interface screenInfo {
  width : number,
  height:number,
  availWidth : number,
  availHeight : number
  }
  
  const windowInfo : screenInfo = {
    width : window.screen.width,
    height : window.screen.height,
    availWidth : window.screen.availWidth,
    availHeight :window.screen.availHeight
  }

export default function MenuBox () : JSX.Element {
  const [windowSize,setWindowSize] = useState<number>(windowInfo.availWidth)
  const [cssInfo,setCssInfo] = useState<string>('')

  useEffect(()=>{
    const resize = () =>{
      const newWidth = window.screen.availWidth
      setWindowSize(newWidth)
      setCssInfo(newWidth < 500 ? "column" : "row")
    }
  
    window.addEventListener('resize',resize)
  
    resize()
  
    return ()=>{
      window.removeEventListener("resize",resize)
    }
   },[])
  
   const handleButton1 = () : void =>{
    window.location.href = "/"
   }
  
    return(
    <>
    <Box sx={{ml:2, textDecoration:'underline'}}><h1>Menu</h1></Box>
     <Box sx={{display:'flex',flexDirection: cssInfo}}>
        <Paper sx={{p:2,m:2, borderRadius:2}}>
        {dataHome.map((home)=>{
          return(
          <>
          <h1>{home.judul1}</h1>
          <p>{home.Deskripsi1}</p>
          </>
          )
        })}
        <Button variant="contained" href="/calc">Let`s try</Button>
        </Paper>
        <Paper sx={{p:2,m:2, borderRadius:2}}>
        
        {dataHome.map((home)=>{
          return(
          <>
          <h1>{home.judul2}</h1>
          <p>{home.Deskripsi2}</p>
          </>
          )
        })}
        <Button variant="contained">Let`s try</Button>
        </Paper>
      </Box>
     </>
    )
}