import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    matches:[],
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

  export const matchFootball = createAsyncThunk('match/matchFootball', async () => {
   return fetch('https://api-football-beta.p.rapidapi.com/fixtures?date=2020-02-06', options)
   .then(response => response.json())
   .then(response => response)
   .catch(err => console.error(err));
  })

const matchFootballSlice = createSlice({
    name:"match",
    initialState,
    extraReducers:{
        [matchFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [matchFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.matches =action.payload ;
          },
          [matchFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default matchFootballSlice.reducer