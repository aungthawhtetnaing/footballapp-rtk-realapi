import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { height } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { leagueFootball } from '../Redux/Components/leagueSlice';



const League = () => {
    const dispatch = useDispatch()

    const leagueFb=useSelector(state=>state.league);
    const league = leagueFb.leagues
    console.log('league /////',league);
  //   const league=leagueFb.leagues.response
  //   let leagueT=null?null:'';
  //   if (league && league.length > 0) {
  //      leagueT = league[0].league;
     
  //   }
  //   console.log('league?????',league);
  //   console.log('league from league.js?????',leagueT);
    
  //   const standing=leagueT.standings
  //   console.log('standing.....',standing);

  //   let standingcl=null
  //   if (standing && standing.length > 0) {
  //     standingcl = standing[0];
  //     console.log('standing.....',standingcl);
    
  //  }

    useEffect(()=>{
        dispatch(leagueFootball())
    },[])
  return (
    <div style={{marginTop:"120px"}}>
      
       <TableContainer >
      <Table sx={{ minWidth: 650 ,margin:"auto",width:"1000px" }} aria-label="simple table">
        <TableHead>
        <TableRow sx={{ width: 1140,margin:"auto",tableLayout: "auto" ,"& td": { border: 0 },"& th": { border: 0 }}}>
            {/* <TableCell component="th"  style={{display: 'flex', alignItems: 'center'}} >
             <img src={leagueT.flag} style={{width:"20px",height:"20px", flexShrink: 0,}}/>&nbsp;{leagueT.country}&nbsp;&nbsp;&nbsp;
             <img src={leagueT.logo} style={{width:"20px",height:"20px"}}/>&nbsp;{leagueT.name}
            </TableCell> */}
            
            {/* <TableCell align="right">{leagueT.season} </TableCell> */}
          </TableRow>
          <TableRow sx={{fontWeight:"bold"}}>
          <TableCell>Rank</TableCell>
            <TableCell>Club</TableCell>
            <TableCell align="right">MP</TableCell>
            <TableCell align="right">W</TableCell>
            {/* <TableCell align="right">D&nbsp;(g)</TableCell> */}
            <TableCell align="right">l</TableCell>
            {/* <TableCell align="right">GF&nbsp;(g)</TableCell>
            <TableCell align="right">GA&nbsp;(g)</TableCell> */}
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {league?.map((row) => (
            <TableRow
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell>{row.Position}</TableCell>
              <TableCell component="th" scope="row" style={{display: 'flex', alignItems: 'center'}}>
               <img src={row.SquadLogo} style={{width:"23px",height:"23px", marginRight: '10px'}}/>&nbsp;{row.Name}
              </TableCell>
              <TableCell align="right">{row.Played}</TableCell>
              <TableCell align="right">{row.Winned}</TableCell>
              {/* <TableCell align="right">{row.all.draw}</TableCell> */}
              <TableCell align="right">{row.Loosed}</TableCell>
              {/* <TableCell align="right">{row.all.goals.for}</TableCell> */}
              {/* <TableCell align="right">{row.all.goals.against}</TableCell> */}
              <TableCell align="right">{row['Goal Difference']}</TableCell>
              <TableCell align="right">{row.Points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default League