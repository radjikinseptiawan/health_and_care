import { Article } from '@mui/icons-material'
import details from '../../utils/detailsBody.json'
import {Box, Paper} from '@mui/material'
export default function ArticleIBM() : JSX.Element{
  return (
    <Box sx={{display:'flex',justifyContent:"center"}}>
        <Paper sx={{p:2, width:600,mt:2}}>
        <Box sx={{display:'flex',alignItems:"center"}}>
            <Article color='primary' aria-label='Selengkapnya' sx={{mx:2}}/> <h3 style={{textDecoration:'underline'}}>Selengkapnya</h3> 
        </Box>
            {details.map(detail =>{
                return(
                    <>
                    <ul key={detail.id}>
                        <Paper sx={{p:4}}>
                        <li style={{listStyle:'none'}}>{detail.keterangan}</li>
                        <p>{detail.selangkapnya}</p>
                        </Paper>
                    </ul>
                    </>
                )
            })}
        </Paper>
    </Box>

  )
}
