import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    topPlayer:[],
    loading:false,
    error:''
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bab988cc9dmsh3fdfe715a26e7f3p11d7a6jsn4cda3928a509',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

  export const topPlayerFootball = createAsyncThunk('player/topPlayerFootball', async () => {
   return fetch('https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=39', options)
   .then(response => response.json())
   .then(response => response)
   .catch(err => console.error(err));
  })

const topPlayerSlice = createSlice({
    name:"player",
    initialState,
    extraReducers:{
        [topPlayerFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [topPlayerFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.topPlayer =action.payload ;
          },
          [topPlayerFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default topPlayerSlice.reducer