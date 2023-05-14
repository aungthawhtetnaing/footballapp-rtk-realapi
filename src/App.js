
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import League from './Leagues/League';
import LiveList from './Leagues/LiveList';
import Match from './Leagues/Match';
import TopPlayers from './Leagues/TopPlayers';
import UpComing from './Leagues/UpComing';
import Navbar from './Navbar/Navbar';

const theme=createTheme({
  palette:{
    primary:{
      main:"#E67505"
    }
  },
  typography:{
    fontFamily:"Quicksand",
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})
function App() {

  // Clear sessionStorage on beforeunload event
  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar /> 
          <Routes>
          <Route path="/league" element={<League/>} />
          <Route path="/match" element={<Match/>} />
          <Route path="/upcoming" element={<UpComing/>} />
          <Route path="/live" element={<LiveList/>} />
          <Route path="/topPlayer" element={<TopPlayers/>} />
          </Routes>
          
          <br/><br/><br/>
          
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App
