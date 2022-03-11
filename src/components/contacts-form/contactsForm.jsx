import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import theme from '../../styles/theme'

const ContactsForm = () => {
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
      <Paper elevation={3} sx={{borderRadius: 2}}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          You can get in touch with us by leaving your message here:
        </Typography>
        <Box sx={{ gap: 2, display: "flex", flexDirection: "column", mx: 2 }}>
          <TextField
            id="outlined-textarea"
            label="Message Text"
            placeholder="Message: max 200 symbols "
            multiline
            
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField id="name" label="name" variant="outlined" />
            <TextField id="e-mail" label="e-mail" variant="outlined" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <Button variant="contained" sx={{ borderRadius: 2, backgroundColor: theme.palette.secondary.main }}>
            SEND
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactsForm;
