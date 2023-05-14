import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    upComing:[],
    loading:false,
    error:''
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bab988cc9dmsh3fdfe715a26e7f3p11d7a6jsn4cda3928a509',
		'X-RapidAPI-Host': 'football-betting-odds1.p.rapidapi.com'
	}
};

  export const upComingFootball = createAsyncThunk('coming/upComingFootball', async () => {
   return fetch('https://football-betting-odds1.p.rapidapi.com/provider2/live/upcoming', options)
   .then(response => response.json())
   .then(response => response)
   .catch(err => console.error(err));
  })

const upComingSlice = createSlice({
    name:"coming",
    initialState,
    extraReducers:{
        [upComingFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [upComingFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.upComing =action.payload ;
          },
          [upComingFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default upComingSlice.reducer