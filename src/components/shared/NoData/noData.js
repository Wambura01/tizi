import React from "react";

import { Box, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function NoData({ text }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 0",
        }}
      >
        <SentimentVeryDissatisfiedIcon
          sx={{ fontSize: "4rem", marginRight: ".5rem", color: "gray" }}
        />
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "gray" }}
        >
          {text}
        </Typography>
      </Box>
    </div>
  );
}

export default NoData;
