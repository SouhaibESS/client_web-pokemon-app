import React, { useEffect } from "react";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useSelector } from "react-redux";

export default function GenerationsList() {
  const species = useSelector((state) => state.generation.generation.species);

  function renderRows() {
    return species.map((s) => {
      return (
        <ListItem component="div" disablePadding>
          <ListItemButton>
            <ListItemText primary={s} />
          </ListItemButton>
        </ListItem>
		);
    });
  }
  useEffect(() => {
    console.log(species);
  }, [species]);

  return (
    <Box
      sx={{
        width: "80%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      style={{
        margin: "auto",
      }}
    >
      <List
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {species && renderRows()}
      </List>
    </Box>
  );
}
