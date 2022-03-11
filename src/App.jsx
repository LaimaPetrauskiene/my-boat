import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";




import theme from "./styles/theme";
import HomePage from "./pages/public-pages/home-page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <HomePage />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
