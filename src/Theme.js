import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // Font di default per tutto il sito
    fontFamily: "Playfair Display, Georgia, serif",

    // Set personalizzato
    fonts: {
      GeorgiaSerif: "Playfair Display, Georgia, serif",
      dancingScript: "Dancing Script, cursive",
      calligraphy: "Great Vibes, cursive",
      parisienne: "Parisienne, cursive",
    },
  },
});

export default theme;
