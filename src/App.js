import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Invite from "./components/Invite";
import Regalo from "./components/Regalo";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "./Theme";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <LanguageSelector />
      <HashRouter>
      <Container 
          maxWidth={false} sx={{ maxWidth: "430px", margin: "0 auto" ,padding:"20px" }}
        >
        <Routes>
          <Route path="/" element={
            <Cover />
            } />
          {/* <Route path="/ia-wedding-invitation" element={
            <Cover />
            } /> */}
          <Route path="/invite" element={
            <Invite />
        } />
          <Route path="/regalo" element={<Regalo />} />
        </Routes>
      </Container>
      </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

