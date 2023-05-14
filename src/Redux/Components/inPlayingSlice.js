import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    inPlaying:[],
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

  export const inPlayingFootball = createAsyncThunk('play/inPlayingFootball', async () => {
   return  fetch('https://football-betting-odds1.p.rapidapi.com/provider2/live/inplaying', options)
       .then(response => response.json())
       .then(response => response)
       .catch(err => console.error(err));
  })

const inPlayingSlice = createSlice({
    name:"play",
    initialState,
    extraReducers:{
        [inPlayingFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [inPlayingFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.inPlaying =action.payload ;
          },
          [inPlayingFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default inPlayingSlice.reducer