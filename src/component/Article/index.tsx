import { Article } from '@mui/icons-material'
import details from '../../utils/detailsBody.json'
import {Box, Paper} from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ArticleIBM() : JSX.Element{
    useEffect(()=>{
        AOS.init({
            duration:800,
            offset:100,
            easing:'ease-in-out',
            once:false
        })
    },[])
  return (
    <Box sx={{display:'flex',justifyContent:"center"}} data-aos="fade-up">
        <Paper sx={{p:2, width:600,mt:2}}>
        <Box sx={{display:'flex',alignItems:"center"}}>
            <Article color='primary' aria-label='Selengkapnya' sx={{mx:2}}/> <h3 style={{textDecoration:'underline'}}>Selengkapnya</h3> 
        </Box>
            {details.map(detail =>{
                return(
                    <>
                    <ul key={detail.id}>
                        <Paper sx={{p:4, display:'flex',alignItems:"center",justifyItems:"center"}} data-aos="fade-right">
                        <Box sx={{mx:2}}>
                            <img src={detail.source} width={'60px'}/>
                        </Box>
                        <Box>
                            <li style={{listStyle:'none'}}>{detail.keterangan}</li>
                            <p>{detail.selangkapnya}</p>
                        </Box>
                        </Paper>
                    </ul>
                    </>
                )
            })}
        </Paper>
    </Box>

  )
}
