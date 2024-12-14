import { Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useState } from "react";


export default function SetGender() {
    const [isMan,setIsMan] = useState(true)
    const [weightBody,setWeightBody] = useState<number>(0)
    const [heightBody,setHeightBody] = useState<number>(0)
    const [age,setAge] = useState<number>(0)
    const [result,setResult] = useState<number | string>('???')

    const checkRadio = () : void =>{
        if(isMan){
            setIsMan(false)
        }else{
            setIsMan(true)
        }
    }
    const chooseMode = (weightBody : number,heightBody : number ,age : number ) =>{
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
        
        <Paper sx={{p:4,mt:2}}>
            <h1>{result == '???' ? 'Nilai Belum Di Definiskan' : 'Nilai Terdefinisi'}</h1>
            <h2>{result}</h2>
        </Paper>
    </Box>
    

    </>
  )
}
