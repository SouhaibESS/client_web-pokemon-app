import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchGenerations } from "../features/generation/generationsSlice";
import { fetchGenerationByURL } from "../features/generation/generationSlice";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GenerationSelectBox() {
  const generations = useSelector((state) => state.generations.generations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenerations());
  }, []);

  useEffect(() => {}, [generations]);

  const handleChange = (e) => {
    console.log(e.target.value);
	const url = e.target.value
	dispatch(fetchGenerationByURL(url))
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Generation
        </InputLabel>
        <Select
          onChange={handleChange}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {generations[0] &&
            generations[0].map((g, index) => (
              <MenuItem key={index} value={g.url}>
                {g.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
