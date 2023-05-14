import { configureStore } from "@reduxjs/toolkit";
import leagueFootballReducer from "./Components/leagueSlice";
import matchFootballReducer from './Components/matchSlice';
import liveListReducer from "./Components/liveListSlice";
import upComingReducer from "./Components/upComingSlice"
import inPlayingReducer from "./Components/inPlayingSlice"
import topPlayerReducer from "./Components/topPlayerSlice";
const store=configureStore({
    reducer:{
        league:leagueFootballReducer,
        match:matchFootballReducer,
        live:liveListReducer,
        coming:upComingReducer,
        inPlay:inPlayingReducer,
        topPlayer:topPlayerReducer,
    }
})

export default store;