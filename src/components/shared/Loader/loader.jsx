import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularStatic() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="success" />
    </Box>
  );
}
