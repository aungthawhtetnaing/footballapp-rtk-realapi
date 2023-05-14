import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    leagues:[],
    loading:false,
    error:''
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bab988cc9dmsh3fdfe715a26e7f3p11d7a6jsn4cda3928a509',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};

  export const leagueFootball = createAsyncThunk('league/leagueFootball', async () => {
   return fetch('https://football98.p.rapidapi.com/premierleague/table', options)
   .then(response => response.json())
   .then(response => response)
   .catch(err => console.error(err));
  })

const leagueFootballSlice = createSlice({
    name:"league",
    initialState,
    extraReducers:{
        [leagueFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [leagueFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.leagues =action.payload ;
          },
          [leagueFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default leagueFootballSlice.reducer