import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./app.css";

import { Routes, Route } from "react-router-dom";

import theme from './styles/theme';
import HomePage from './pages/public-pages/home-page';
import ContactsPage from './pages/public-pages/contacts-page';
import LoginPage from './pages/visitor-pages/login-page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
