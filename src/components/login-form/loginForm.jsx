import React from "react";
import { Box, TextField, Paper, Button, Typography } from "@mui/material";
import theme from "../../styles/theme";

const loginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        width: 400,

        position: "absolute",
        top: 300,
        left: 250,
        margin: 2,
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          Log In
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mx:2 }}>
          <TextField
            required
            id="userName"
            label="user name"
            variant="outlined"
          />
          <TextField
            required
            id="password"
            label="password"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            SEND
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default loginForm;
