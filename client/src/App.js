import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import { Container } from "@mui/material";
import { ContractProvider } from "./pages/Blockchain/Context";

import { Navbar, Footer, ScrollToTop, ScrollButton } from "./components";

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
  Post,
  NotFound,
} from "./pages";

export default function App() {
  const { checked } = useContext(Context);

  return (
    <ThemeProvider theme={checked ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container disableGutters={true} overflow="hidden" maxWidth="xl">
        <Router>
          <Navbar />

          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/minhaconta" element={<Dashboard />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criarconta" element={<CreateAccount />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/blockchain/*" element={<ContractProvider><Blockchain /></ContractProvider>} />            
            <Route path="/termos" element={<Terms />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
          <ScrollButton />
          <Footer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
