import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Invite from "./components/Invite";
import Regalo from "./components/Regalo";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./Theme";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <LanguageSelector />
      <HashRouter>
      <Box sx={{ width: "100%", maxWidth: "430px", margin: "0 auto", padding: "0", }} >
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
      </Box>
      </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

