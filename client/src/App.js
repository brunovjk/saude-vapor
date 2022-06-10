import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar, Footer, ScrollToTop } from "./components";

import {
  Home,
  About,
  Search,
  Contact,
  Terms,
  Login,
  Styleguide,
  CreateAccount,
  Dashboard,
  Blockchain,
} from "./pages";

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider theme={checked ? darkTheme : lightTheme}>
      <Container disableGutters={true} overflow="hidden" maxWidth="xl">
        <CssBaseline />

        <Router>
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth} checked={checked} />

          <ScrollToTop />
          <Routes>
            {/* <Route path="/:blogId" element={<Blog />} />*/}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/minhaconta" element={<Dashboard />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/contato" element={<Contact />} />
            <Route
              path="/login"
              element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
            />
            <Route path="/criarconta" element={<CreateAccount />} />
            <Route path="/blockchain" element={<Blockchain />} />

            <Route path="/termos" element={<Terms />} />
            <Route
              path="/styleguide"
              element={<Styleguide setChecked={setChecked} />}
            />
          </Routes>
          <Footer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
