import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";
import useConfig from "../hooks/useConfig";

export default function Regalo() {
  const { config, loading, error } = useConfig();
  const theme = useTheme();

  if (loading) return null;
  if (error) return <p>Errore: {error}</p>;

  return (
    <>
      <Header />

      <Container maxWidth="sm" sx={{ mt: 6, mb: 10, textAlign: "center" }}>
        
        {/* Frase iniziale */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: "22px",
            fontStyle: "italic",
            color: "#444",
            mb: 4,
            lineHeight: 1.5,
          }}
        >
          {config?.regalo.page.heroText}
          </Typography>

        {/* Box IBAN */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            backgroundImage: `url("/ia-wedding-invitation/img/fedi.png")`, // tua immagine
            backgroundSize: "cover",
            backgroundPosition: "center",
            // padding: "32px 20px",
          }}
        >
          {/* Overlay grigio opaco per i dati */}
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.30)", // grigio scuro opaco
              backdropFilter: "blur(2px)",         // leggero effetto vetro
              borderRadius: "12px",
              padding: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: "bold",
                mb: 1,
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              IBAN
            </Typography>

            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "18px",
                letterSpacing: "1px",
                mb: 2,
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              {config?.regalo.page.iban}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "16px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              {config?.regalo.page.ibanName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "18px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              {config?.regalo.page.banca}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: "18px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              {config?.regalo.page.bic_swift}
            </Typography>
          </Box>
        </Box>

      </Container>

      <Footer />
    </>
  );
}
