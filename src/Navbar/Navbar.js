import { AppBar, Autocomplete, Button, Grid, Tab, Tabs, TextField, Toolbar, Typography, useMediaQuery,useTheme } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { Link } from 'react-router-dom';

const state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                ]

const Navbar = ({links}) => {
    const theme = useTheme();
    console.log(theme);
    const[value,setValue] = useState()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    console.log(isMatch);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
    }
  return (
    <AppBar id='navbar' sx={{backgroundColor:'white'}}>
    <Toolbar>
        {isMatch ?(
            <>
            <DrawerComp links={links}/>
             <Typography  sx={{color:'inherit' ,marginLeft:'auto'}}>
                    <AccountBalanceIcon/>
                </Typography>
            
            </>
        ):
        (<Grid sx={{placeItems:"center" ,paddingTop:"12px"}} container>
            <Grid item xs={3}>
                <Typography sx={{marginLeft:10}}>
                    <img src='https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/d6/bad4e75b994d49897a95a6e7b6363b/5e91326f658012bfeb00102fe790edcd.png' width={90} height={80}/>
                </Typography>
            </Grid>
           
           
            <Grid item xs={8}>
                    <Box display="flex">
                    <Tabs 
                        textColor='primary'
                        indicatorColor='primary'
                        value={value}
                        onChange={(e,val)=>setValue(val)}
                        sx={{marginBottom:"14px",marginLeft:"auto"}}
                    >
                <Tab component={Link} to="/live"   sx={{color:"black",fontWeight:"bold"}} label="live" />
               
                <Tab component={Link} to="/match"   sx={{color:"black",fontWeight:"bold"}} label="match" />
                <Tab component={Link} to="/upcoming"   sx={{color:"black",fontWeight:"bold"}} label="Next Match" />
                <Tab component={Link} to="/league"   sx={{color:"black",fontWeight:"bold"}} label="league" />
                <Tab component={Link} to="/topPlayer"   sx={{color:"black",fontWeight:"bold"}} label="topPlayer" />
                <Tab component={Link} to="/news"   sx={{color:"black",fontWeight:"bold"}} label="news" />
                
               
                {/* <Tab component={Link} to="/auctions" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Auctions" />
                <Tab component={Link} to="/sell" onClick={() => sessionStorage.clear('activeTab')}  sx={{color:"black",fontWeight:"bold"}} label="Sell" /> */}
               
            </Tabs>
                        
                    </Box>
            </Grid>
          
        </Grid>
        
        )
        
        }

    </Toolbar>
</AppBar>
  )
}

export default Navbar