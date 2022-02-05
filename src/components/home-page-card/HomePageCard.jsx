import React from "react";
import { Paper, Box, TextField, Typography } from "@mui/material";

import BasicDatePicker from "./DatePicker";

const HomePageCard = () => {
  return (
    <Box
      sx={{
        width: 400,

        position: "absolute",
        top: 300,
        left: 250,
        margin: 2,
        padding: 2,
      }}
    >
      <Paper elevation={3}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          Best solution for your yacht charter
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            margin: 2,
            flexDirection: "column",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Place of departure"
            variant="outlined"
          >
            Place of departure
          </TextField>
          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <BasicDatePicker />
            <BasicDatePicker />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default HomePageCard;
