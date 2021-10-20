import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  generation: {
	  species: [],
	  version: []
  },
};

export const fetchGenerationByURL = createAsyncThunk(
  "generations/fetchGenerationByURL",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
	const speciesRes = data.pokemon_species
	const versionsRes = data.version_groups
	const species = speciesRes.map(s => s.name)
	const versions = versionsRes.map(v => v.name)
    console.log(species, versions);
    return {species, versions};
  }
);

export const generationSlice = createSlice({
  name: "generation",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGenerationByURL.fulfilled, (state, action) => {
      state.generation = action.payload;
    });
  },
});

export default generationSlice.reducer;
