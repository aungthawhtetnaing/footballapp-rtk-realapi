import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { liveListFootball } from '../Redux/Components/liveListSlice'

const Match = () => {
    const livelistT=useSelector(state=>state.live)
    const liveList=livelistT.liveList
    console.log("liveList//////", liveList);
    const dispatch=useDispatch()
    // const imageUrl = 'https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/d6/bad4e75b994d49897a95a6e7b6363b/5e91326f658012bfeb00102fe790edcd.png';

    
    useEffect(()=>{
        dispatch(liveListFootball())
    },[])
  return (
    <div >
        <h1 style={{marginTop:"120px"}}>
      
        {Object.keys(liveList)?.map((key)=>(
        
        <Card sx={{width:900,margin:"auto",marginTop:"15px"}}  >
               <CardActionArea> 
                   <CardContent>
                   <Typography >
                   <Typography >
                     
                     <span style={{fontSize:"20px",fontWeight:"bold"}}>{liveList[key].country_leagues}</span>-{liveList[key].country}
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
                    {liveList[key].home}
                    </Typography>
                        
                    {/* </CardMedia> */}
            </Grid>
            <Grid item xs={4} sx={{fontWeight:"bold",margin:"auto"}}>
            <Grid item xs={5} sx={{fontWeight:"bold",margin:"auto"}}>
            ESTIMATED 
             </Grid>  
             <Grid item xs={5} sx={{marginLeft:"100px",fontSize:"30px",fontWeight:"bold",}}>
              {liveList[key].score}
               &nbsp;&nbsp;</Grid>
               <Grid item xs={5} sx={{margin:"auto",fontSize:"30px",fontWeight:"bold",}}>
               <Typography  color="text.secondary">
                    {new Date(liveList[key].startTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </Typography>
               </Grid>
               <Grid item xs={5} sx={{marginLeft:"115px",fontSize:"30px",fontWeight:"bold",}}>
               <Typography  color="text.secondary" >
                    {liveList[key].minutes}
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
                     {liveList[key].away}
                     </Typography>
                    {/* </CardMedia> */}
            </Grid>
        </Grid>
                   
                   
                    </Box>
                    
                    </Typography>
                   
                   
                    <Typography variant="body2" component="div" color="text.secondary">
                    <Typography  color="text.secondary">
                    {new Date(liveList[key].periodTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
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

export default Match