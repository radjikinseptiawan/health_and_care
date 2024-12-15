/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Fab, Paper, Skeleton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import details from '../../utils/detailsBody.json'
import { ArrowBackIosNew, Calculate } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton'
import resource from '../../utils/resource.json'
import AOS from 'aos'
import 'aos/dist/aos.css';

interface DataIndeksTubuh {
  keterangan : string,
  deskripsi : string
}

interface ImageResouce{
  source : string
}

export default function Calculator() : JSX.Element{
    const [weight,setWeight] = useState<number | any >()
    const [height,setHeight] = useState<number | any >()
    const [result,setResult] = useState<number | any>(0)
    const [pending,setPending] = useState<boolean>(false)
    const [description,setDescription] = useState< DataIndeksTubuh >({
      keterangan : details[4]?.keterangan, 
      deskripsi : details[4]?.Deskripsi
    })
    const [resourcer,setResourcer] = useState< ImageResouce >({
      source : "None.svg"
    })
   

    useEffect(()=>{
      AOS.init(
        {
          duration:800,
          offset:100,
          easing:'ease-in-out',
          once:true
        }
      )
    },[])


    useEffect(()=>{
      setTimeout(()=>{
        setPending(false)
      },3000)

      return ()=>{
        setWeight('')
        setHeight('')
      }
    },[pending,result,description])

    const pendingFunction = ()=>{
      setPending(true)
      return
    }

    const updatePhotos = (bmi : number)=>{
      if(bmi <= 18.5){
        setResourcer(
          {
            source : resource[1].source
          }
        )
      }else if(bmi > 18.5 && bmi < 24.9){
        setResourcer(
            {
              source : resource[2].source
            }
        )
      }else if(bmi >= 25 && bmi < 30 ){
        setResourcer(
          {
            source : resource[3].source
          }
        )
      }else{
        setResourcer(
          {
            source : resource[4].source
          }
        )
      }
    }

    const calcIbm = ()=>{
    pendingFunction()
    setResult(null)
    if(height && weight){
        const heighter : number = height / 100
        const result : number = weight / (heighter ** 2)
        result.toFixed(2)
        setResult(result)
        setWeight('')
        setHeight('')
        updateDescription(result)
        updatePhotos(result)
    }
    }
  
    const updateDescription = (bmi: number) => {
      if (bmi <= 18.5) {
        setDescription({ keterangan: details[0].keterangan, deskripsi: details[0].Deskripsi });
      } else if (bmi > 18.5 && bmi < 24.9) {
        setDescription({ keterangan: details[1].keterangan, deskripsi: details[1].Deskripsi });
      } else if (bmi >= 25 && bmi < 30) {
        setDescription({ keterangan: details[2].keterangan, deskripsi: details[2].Deskripsi });
      } else if(bmi >= 30) {
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
  
    return(
    <>
    <Box sx={{display:'flex', justifyContent:"center"}} data-aos ="fade-down">
      <Paper sx={{p:2, textAlign:'center', width:600}}>
        <h1>Indeks Massa Badan</h1>
        <br/>
        <TextField type="number" label="Masukkan Berat Badan" required sx={{mt:2,mb:2,width:300}} value={weight} placeholder="Masukkan Berat Badan (kg)" helperText="Berat badan dalam satuan kg" onChange={inputWeightValue}/>
        <br/>
        <TextField type="number" label="Masukkan Tinggi Badan" required sx={{mt:2,mb:2,width:300}} value={height} placeholder="Masukkan Tinggi Badan (cm)" onChange={inputHeightValue} helperText="Tinggi badan dalam satuan cm" />
        <br/>
        {pending ? <LoadingButton loading variant="contained" sx={{p:2}}/> : <Button variant="contained" startIcon={<Calculate/>} onClick={calcIbm}>Calc</Button> }
        {pending ? <h2>Menghitung...</h2> :<h2>Hasil Hitung</h2>}
      {pending ? 
        <Skeleton variant="rounded" height={120}/>
      :
      <> 
      <h2>{result !== null ? result.toFixed(2) : '0.00'}</h2>
      {description && (
          <>
            <img src={resourcer.source} width={resource[0].source ? '80px':'500px'}/>
            <h3>{description.keterangan}</h3>
            <p>{description.deskripsi}</p>
          </>
        )}
      </>
      }
      </Paper>
    </Box>
    
    <Fab sx={{position:"fixed",bottom:10, ml:2,mb:2}} href="/" size="large" color={"primary"}>
          <ArrowBackIosNew/>
    </Fab>
    </>
)
}