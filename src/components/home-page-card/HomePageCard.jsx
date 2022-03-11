import React from "react";
import { Paper, Box, Button, Typography } from "@mui/material";

import BasicDatePicker from "./DatePicker";
import Places from "./Places";

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
          <Places />
          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <BasicDatePicker />
            <BasicDatePicker />
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "center", pb: 3}}>
        <Button variant="contained">
          Continue</Button>
          </Box>
      </Paper>
    </Box>
  );
};

export default HomePageCard;
