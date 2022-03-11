import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./components/navbar/index";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
