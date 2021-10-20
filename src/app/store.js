import { configureStore } from "@reduxjs/toolkit";
import generationsReducer from "../features/generation/generationsSlice";
import generationReducer from "../features/generation/generationSlice";

export const store = configureStore({
  reducer: {
    generations: generationsReducer,
    generation: generationReducer,
  },
});
