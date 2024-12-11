/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Input, InputLabel, Paper } from "@mui/material";
import React, { useState } from "react";
import details from '../utils/detailsBody.json'

export default function Calc() {
  const [weight,setWeight] = useState<number | any >()
  const [height,setHeight] = useState<number | any >()
  const [result,setResult] = useState<number | any>(0)
  const [description,setDescription] = useState<{keterangan : string, deskripsi : string} | null >(null)
 
  const calcIbm = ()=>{
  setResult(null)
  if(height && weight){
      const heighter : number = height / 100
      const result : number = weight / (heighter ** 2)
      result.toFixed(2)
      setResult(result)
      setWeight('')
      setHeight('')
      updateDescription(result)
  }
  }

  const updateDescription = (bmi: number) => {
    if (bmi <= 18.5) {
      setDescription({ keterangan: details[0].keterangan, deskripsi: details[0].Deskripsi });
    } else if (bmi > 18.5 && bmi < 24.9) {
      setDescription({ keterangan: details[1].keterangan, deskripsi: details[1].Deskripsi });
    } else if (bmi >= 25 && bmi < 30) {
      setDescription({ keterangan: details[2].keterangan, deskripsi: details[2].Deskripsi });
    } else {
      setDescription({ keterangan: details[3].keterangan, deskripsi: details[3].Deskripsi });
    }
  };

  const inputWeightValue = (event : React.ChangeEvent<HTMLInputElement>) : void =>{
   const getValue : number = Number(event.target.value)
   setWeight(getValue) 
  }

  const inputHeightValue = (event : React.ChangeEvent<HTMLInputElement>) : void =>{
    const getHeight : number = Number(event.target.value)
    setHeight(getHeight)
    console.log(height)
  }

  return (
    <>
    <Box sx={{display:'flex', justifyContent:"center"}}>
      <Paper sx={{p:2, textAlign:'center', width:600}}>
        <h1>Indeks Massa Badan</h1>
        <br/>
        <InputLabel>Masukkan Berat Badans</InputLabel>
        <Input type="number" sx={{mt:2,mb:2,width:300}} value={weight} placeholder="Masukkan Berat Badan (kg)" onChange={inputWeightValue}/>
        <br/>
        <InputLabel>Masukkan Tinggi Badan</InputLabel>
        <Input type="number" sx={{mt:2,mb:2,width:300}} value={height} placeholder="Masukkan Tinggi Badan (cm)" onChange={inputHeightValue}/>
        <br/>
        <Button variant="contained" onClick={calcIbm}>Calc</Button>
        <h2>Hasil Hitung</h2>
        <h2>{result !== null ? result.toFixed(2) : '-'}</h2>
        {description && (
            <>
              <h3>{description.keterangan}</h3>
              <p>{description.deskripsi}</p>
            </>
          )}
      </Paper>
    </Box>
    </>
  )
}
