/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Paper, Radio, RadioGroup, Skeleton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from 'aos'

export default function SetGender() {
    const [isMan,setIsMan] = useState(true)
    const [weightBody,setWeightBody] = useState<number | any>()
    const [heightBody,setHeightBody] = useState<number | any >()
    const [age,setAge] = useState<number | any>()
    const [result,setResult] = useState<number | string>('???')
    const [pending,setPending] = useState<boolean>(false)
    
    useEffect(()=>{
        AOS.init({
            duration:800,
            offset:100,
            easing:'ease-in-out',
            once:false
        })
    })


    useEffect(()=>{
        setTimeout(()=>{
            setPending(false)
        },3000)

        return ()=>{
        setHeightBody('')
        setWeightBody('')
        setAge('')
        }
    },[result])

    const pendingFunction = ()=>{
        setPending(true)
        return
    }

    const checkRadio = () : void =>{
        if(isMan){
            setIsMan(false)
        }else{
            setIsMan(true)
        }
    }
    const chooseMode = (weightBody : number,heightBody : number ,age : number ) =>{
       pendingFunction()
        if (isMan){
            const BMR = 88.362 + (13.397 * weightBody) + (4.799 * heightBody) - (5.677 * age)
            setResult(BMR.toFixed(2) + ' kcal')
            return result
        }else{
            const BMR = 447.593 + (9.247 * weightBody) + (3.098 * heightBody) - (4.330 * age)
            setResult(BMR.toFixed(2) + ' kcal')
            return result
        }
    }

    const weightBodyPross =  (event:React.ChangeEvent<HTMLInputElement>)=>{
        setWeightBody(parseInt(event.target.value))
        }

    const heightBodyPross = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setHeightBody(parseInt(event.target.value))}

    const ageBodyPross = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setAge(parseInt(event.target.value))
        }
        
    return (
    <>
        <Box sx={{display:'flex',justifyItems:'center',flexDirection:'column'}}>
        <Paper sx={{p:2,textAlign:"center",width:500}} data-aos="fade-down">
        <FormControl>
            <FormLabel sx={{textDecoration:"underline"}}>Gender kamu</FormLabel>
            <RadioGroup
            sx={{ml:2}}
            aria-labelledby="Masukkan Gender"
            defaultValue={"man"}
            name="radio-button"
            >
            <FormControlLabel label="Pria" value={"man"} control={<Radio size="medium"/>} onChange={checkRadio}/>
            <FormControlLabel label="Wanita" value={"woman"} control={<Radio size="medium"/>} onChange={checkRadio}/>
            </RadioGroup>
        </FormControl>
        </Paper>

        <Paper sx={{p:2,textAlign:"center",width:500}} data-aos="fade-down">
            <TextField
            label="Berat Badan"
            id="Berat-Badan"
            value={weightBody}
            sx={{mt:2,mb:2,width:300}}
            type="number"
            onChange={weightBodyPross}
            inputProps={{
                min:0,
                inputMode:'numeric'
            }}
            slotProps={{
                input:{
                    endAdornment :<InputAdornment position="end">kg</InputAdornment>
                }
            }}
            ></TextField>
            <br/>
            <TextField
            label="Tinggi Badan"
            id="Tinggi-Badan"
            sx={{mt:2,mb:2,width:300}}
            type="number"
            value={heightBody}
            onChange={heightBodyPross}
            inputProps={{
                min:0,
                inputMode:'numeric'
            }}
            slotProps={{
                input:{
                    endAdornment :<InputAdornment position="end">cm</InputAdornment>
                }
            }}
            ></TextField>
            <br/>            
            <TextField
            value={age}
            label="Umur"
            id="umur"
            sx={{mt:2,mb:2,width:300}}
            type="number"
            onChange={ageBodyPross}
            inputProps={{
                min:0,
                inputMode:'numeric'
            }}
            slotProps={{
                input:{
                    endAdornment :<InputAdornment position="end">Umur</InputAdornment>
                }
            }}
            ></TextField>
        <br></br>
        <Button variant="contained" color="primary" onClick={()=> chooseMode(weightBody,heightBody,age)}>Hitung</Button>
        </Paper>
        
        <Paper sx={{width:500,p:2,textAlign:"center",mt:2}} data-aos="fade-down">
           {pending ? <Typography variant="h5" gutterBottom>Menghitung...</Typography>: <Typography variant="h5" gutterBottom>
            Nilai Di Dapatkan</Typography>}
            {
            pending ? 
                <Skeleton variant="rounded" width={210} height={60} />
                :
                <Typography variant="subtitle1" gutterBottom>
                    {result}
                </Typography>
            }
        </Paper>
    </Box>
    

    </>
  )
}
