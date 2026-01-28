import "./App.css";
import { useEffect } from "react";
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

  // ⭐ Redirect su refresh
  useEffect(() => {
    const handleHashChange = () => {
    const hash = window.location.hash; // es: "#/ar" o "#/ar/invite"

    // 1. Riconosci se l'URL contiene una lingua
    const match = hash.match(/^#\/(it|en|ar)(\/.*)?$/);

    if (match) {
      const lang = match[1]; // "it", "en", "ar"
      const rest = match[2] || "/"; // "/invite", "/regalo", oppure "/"

      // salva la lingua
      localStorage.setItem("preferredLang", lang);

      // rimuovi la lingua dall'URL e vai alla route reale
      window.location.hash = "#" + rest;
      return;
    }

    // 2. Comportamento precedente: refresh su /invite o /regalo → torna alla home
    // if (hash && hash !== "#/") {
    //   window.location.hash = "#/";
    // }

    // 2. Redirect SOLO se è un refresh 
    const nav = performance.getEntriesByType("navigation")[0]; 
    const isReload = nav?.type === "reload"; 
    if (isReload && hash !== "#/") { 
      window.location.hash = "#/"; 
    };

  };

  handleHashChange();
  window.addEventListener("hashchange", handleHashChange);
  return () => window.removeEventListener("hashchange", handleHashChange);

  }, []);


  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        

        <HashRouter>
          <LanguageSelector />
          <Box sx={{ width: "100%", maxWidth: "430px", margin: "0 auto", padding: "0" }}>
            <Routes>
              <Route path="/" element={<Cover />} />
              <Route path="/:lang" element={<Cover />} />

              <Route path="/invite" element={<Invite />} />
              <Route path="/regalo" element={<Regalo />} />
            </Routes>
          </Box>
        </HashRouter>

      </LanguageProvider>
    </ThemeProvider>
  );
}
