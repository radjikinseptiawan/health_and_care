/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Paper, Radio, RadioGroup, Skeleton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


export default function SetGender() {
    const [isMan,setIsMan] = useState(true)
    const [weightBody,setWeightBody] = useState<number | any>()
    const [heightBody,setHeightBody] = useState<number | any >()
    const [age,setAge] = useState<number | any>()
    const [result,setResult] = useState<number | string>('???')
    const [pending,setPending] = useState<boolean>(false)
    
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
        <Box sx={{mx:'auto', width:800}}>
        <Paper sx={{p:4}}>
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

        <Paper sx={{mt:2,p:2}}>
            <TextField
            label="Berat Badan"
            id="Berat-Badan"
            value={weightBody}
            sx={{m:1,width:'25ch'}}
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
    
            <TextField
            label="Tinggi Badan"
            id="Tinggi-Badan"
            sx={{m:1,width:'25ch'}}
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
            
            <TextField
            value={age}
            label="Umur"
            id="umur"
            sx={{m:1,width:'25ch'}}
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
        
        <Paper sx={{p:4,mt:2,display:'flex',justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
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
