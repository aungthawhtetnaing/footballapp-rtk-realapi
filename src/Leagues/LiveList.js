import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inPlayingFootball } from '../Redux/Components/inPlayingSlice';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const LiveList = () => {
    const inPlay = useSelector(state=>state.inPlay)
    const play=inPlay.inPlaying

    console.log("inPlaying .........",inPlay);

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(inPlayingFootball())
    },[])
  return (
    <div >
    <h1 style={{marginTop:"120px"}}>
  
    {Object.keys(play)?.map((key)=>(
    
    <Card sx={{width:900,margin:"auto",marginTop:"15px"}}  >
           <CardActionArea> 
               <CardContent>
               <Typography >
               <Typography >
                 
                 <span style={{fontSize:"20px",fontWeight:"bold"}}>{play[key].country_leagues}</span>-{play[key].country}
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
                {play[key].home}
                </Typography>
                    
                {/* </CardMedia> */}
        </Grid>
        <Grid item xs={4} sx={{fontWeight:"bold",margin:"auto"}}>
        <Grid item xs={5} sx={{fontWeight:"bold",margin:"auto"}}>
        ESTIMATED 
         </Grid>  
         <Grid item xs={5} sx={{marginLeft:"100px",fontSize:"30px",fontWeight:"bold",}}>
          {play[key].score}
           &nbsp;&nbsp;</Grid>
           <Grid item xs={5} sx={{margin:"auto",fontSize:"30px",fontWeight:"bold",}}>
           <Typography  color="text.secondary">
                {new Date(play[key].startTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </Typography>
           </Grid>
           <Grid item xs={5} sx={{marginLeft:"115px",fontSize:"30px",fontWeight:"bold",}}>
           <Typography  color="text.secondary" >
                {play[key].minutes}
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
                 {play[key].away}
                 </Typography>
                {/* </CardMedia> */}
        </Grid>
    </Grid>
               
               
                </Box>
                
                </Typography>
               
               
                <Typography variant="body2" component="div" color="text.secondary">
                <Typography  color="text.secondary">
                {new Date(play[key].periodTime * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
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

export default LiveList