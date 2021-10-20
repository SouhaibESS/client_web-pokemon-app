import React, { useEffect } from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function VersionsList() {
  const versions = useSelector((state) => state.generation.generation.versions);

  useEffect(() => {}, [versions]);

  const renderRows = () => {
    return versions.map((v) => (
      <Chip label={v} variant="outlined" />
    ));
  };

  return (
    <Stack direction="row" spacing={1}>
		{versions && renderRows()}
    </Stack>
  );
}
