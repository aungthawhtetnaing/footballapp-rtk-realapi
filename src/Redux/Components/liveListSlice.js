import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    liveList:[],
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

  export const liveListFootball = createAsyncThunk('live/liveListFootball', async () => {
   return fetch('https://football-betting-odds1.p.rapidapi.com/provider2/live/list', options)
   .then(response => response.json())
   .then(response => response)
   .catch(err => console.error(err));
  })

const liveListSlice = createSlice({
    name:"live",
    initialState,
    extraReducers:{
        [liveListFootball.pending]:(state)=>{
            state.loading = true;
            state.error = '';
          },
          [liveListFootball.fulfilled]:(state,action)=>{
            state.loading = false;
            state.liveList =action.payload ;
          },
          [liveListFootball.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
          },
    }
})

export default liveListSlice.reducer