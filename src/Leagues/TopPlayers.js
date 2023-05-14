import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topPlayerFootball } from '../Redux/Components/topPlayerSlice';
import { Grid ,Typography,CardContent,CardMedia,CardActionArea,Card, TableContainer, Table, TableRow, TableCell, Button} from '@mui/material'
import { Box } from '@mui/system';
const TopPlayers = () => {
    const tplayer  = useSelector(state=>state.topPlayer)
    const topPlayer= tplayer.topPlayer.response
    console.log("TopPlayer.....",topPlayer);

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(topPlayerFootball())
    },[])
  return (
    <div style={{marginTop:"120px"}}>
           
        {topPlayer?.map(player=>(
        
            <div key={player.player.id}>
               <Card sx={{width:900,margin:"auto",marginTop:"15px"}}>
              
                <CardActionArea>
               
                   
                    <CardContent>
                    <Typography >
                    <Typography >
                      
                      <span style={{fontSize:"20px",fontWeight:"bold",display: 'flex', alignItems: 'center'}}>
                    <img src={player.statistics[0].team.logo} style={{width:"20px",height:"20px"}}/>
                      {player.statistics[0].team.name}&nbsp;&nbsp;&nbsp;
                      <span style={{fontSize:"20px",fontWeight:"bold"}}>{"("+player.player.firstname} {player.player.lastname+")"}</span></span>
                      
                    </Typography>
                    
                    <Typography variant="body2" style={{fontSize:"20px",fontWeight:"bold",display: 'flex', alignItems: 'center'}}>
                    {player.player.name}
                    </Typography>
                    <br/>
                    </Typography>
                   
                    <Typography>
                    <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    sx={{width:150}}
                    image={player.player.photo}
                    alt="green iguana"
                    />
                   
                    <Typography gutterBottom component="div" variant="h7"  >
                    {/* <span style={{fontWeight:"bold"}}>
                       ESTIMATED PRICE
                    </span><br/>{list.price}<br/><br/>
                    <span >{list.body_type}</span><br/>
                    {list.engine_size}
                    {list.emission_standard} */}
                    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{paddingLeft:"200px"}}>
                        <Grid item xs={4} sx={{fontWeight:"bold"}}>
                        Birth<br/>
                        {player.player.birth.date}
                        </Grid>
                        <Grid item xs={4} sx={{fontWeight:"bold"}}>
                        National<br/>
                        {player.player.nationality}
                        </Grid>
                        <Grid item xs={4} sx={{fontWeight:"bold"}}>
                        Height<br/>
                        {player.player.height}
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={4}>
                        age<br/>
                        {player.player.age}
                        </Grid>
                        <Grid item xs={4}>
                        Weight<br/>
                        {player.player.weight}
                        </Grid>
                        <Grid item xs={4}>
                        Goals<br/>
                        {player.statistics[0].goals.total}
                        </Grid>
                    </Grid>
                    </Typography>
                    </Box>
                    
                    </Typography>
                   
                   
                    <Typography variant="body2" component="div" color="text.secondary">
                    <Typography variant="body2" color="text.secondary">
                        Yellow:{player.statistics[0].cards.yellow}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Red:{player.statistics[0].cards.red}
                    </Typography>
                    </Typography>
                    </CardContent>
                </CardActionArea>
               
                </Card>
                    


                



            </div>
         ))} 
    </div>
  )
}

export default TopPlayers