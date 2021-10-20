import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  generations: [],
};

export const fetchGenerations = createAsyncThunk(
  "generations/fetchGenerations",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation");
    const data = await response.json();
    return data.results;
  }
);

export const generationsSlice = createSlice({
  name: "generations",
  initialState,
  reducers: {
    /*
    fetchGenerations: (state) => {
      fetch("https://pokeapi.co/api/v2/generation")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          // state.generations = data.results;
        });
    },
	*/
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenerations.fulfilled, (state, action) => {
      state.generations = [...state.generations, action.payload];
    });
  },
});

// export const { fetchGenerations } = generationsSlice.actions;

export default generationsSlice.reducer;