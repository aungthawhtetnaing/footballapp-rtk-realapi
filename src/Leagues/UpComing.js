import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upComingFootball } from '../Redux/Components/upComingSlice';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const UpComing = () => {
    const upComing = useSelector(state=>state.coming)
    const coming = upComing.upComing

    console.log("coming.........",coming);

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(upComingFootball())
    },[])
  return (
    <div >
    <h1 style={{marginTop:"120px"}}>
  
    {Object.keys(coming)?.map((key)=>(
    
    <Card sx={{width:900,margin:"auto",marginTop:"15px"}}  >
           <CardActionArea> 
               <CardContent>
               <Typography >
               <Typography >
                 
                 <span style={{fontSize:"20px",fontWeight:"bold"}}>{coming[key].country_leagues}</span>-{coming[key].country}
               </Typography>
               
               <Typography variant="body2" color="text.secondary">
                   
               </Typography>
               <br/>
               </Typography>
              
               <Typography>
               <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} sx={{fontWeight:"bold"}}>
        {/* <CardMedia
                component="img"
                height="140"
                sx={{width:100,height:100}}
                
                alt="green iguana"
                > */}
                <Typography >
                {coming[key].home}
                </Typography>
                    
                {/* </CardMedia> */}
        </Grid>
        <Grid item xs={4} sx={{fontWeight:"bold",margin:"auto"}}>
        <Grid item xs={5} sx={{fontWeight:"bold",margin:"auto"}}>
        ESTIMATED 
         </Grid>  
         <Grid item xs={5} sx={{marginLeft:"120px",fontSize:"30px",fontWeight:"bold",}}>
          {coming[key].score}
           &nbsp;&nbsp;</Grid>
           <Grid item xs={5} sx={{margin:"auto",fontSize:"30px",fontWeight:"bold",}}>
           <Typography  color="text.secondary">
                {new Date(coming[key].startTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </Typography>
           </Grid>
           <Grid item xs={5} sx={{marginLeft:"115px",fontSize:"30px",fontWeight:"bold",}}>
           <Typography  color="text.secondary" >
                {coming[key].minutes}
                </Typography>
           </Grid>
              
        </Grid>
        
        <Grid item xs={4} sx={{fontWeight:"bold"}}>
        {/* <CardMedia
                component="img"
                height="140"
                sx={{width:100,height:100,marginLeft:'auto'}}
                
                alt="green iguana"
                > */}
                 <Typography sx={{paddingLeft:"100px"}}>
                 {coming[key].away}
                 </Typography>
                {/* </CardMedia> */}
        </Grid>
    </Grid>
               
               
                </Box>
                
                </Typography>
               
               
                <Typography variant="body2" component="div" color="text.secondary">
                <Typography  color="text.secondary">
                {new Date(coming[key].periodTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </Typography>
                
                </Typography>
                </CardContent>
            </CardActionArea>
            
            </Card>
                


            



        
))}

    </h1>
</div>

  )
}

export default UpComing