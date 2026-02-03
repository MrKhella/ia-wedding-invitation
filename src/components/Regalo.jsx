import { Box, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import useConfig from "../hooks/useConfig";

export default function Regalo() {

  const { config, loading, error } = useConfig();
    if (loading) return null; // oppure un loader 
    if (error) return <p>Errore: {error}</p>;
    if (!config) return null;

  return (
        <div id="invite" className="fade-in" style={{ direction: config.direction || "ltr" }}>

      <Header />

      <Container 
      // maxWidth="sm" 
      sx={{ 
        textAlign: "center",
        paddingX:"20px"
      }}>
        
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
            backgroundImage: `url("/img/fedi.png")`, // tua immagine
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
                fontFamily: "monospace",
                fontSize: "22px",
                fontWeight: "bold",
                // mb: 1,
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              IBAN
            </Typography>

            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "16px",
                letterSpacing: "1px",
                // mb: 1,
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
            >
              {config?.regalo.page.iban}
            </Typography>

            <Typography
              sx={{
                whiteSpace: "pre-line",
                fontFamily: "monospace",
                fontSize: "16px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
                direction:"ltr"
              }}
              dangerouslySetInnerHTML={{ __html:config?.regalo.page.ibanName}}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "16px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
              dangerouslySetInnerHTML={{ __html:config?.regalo.page.banca}}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "16px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
              dangerouslySetInnerHTML={{ __html:config?.regalo.page.bic_swift}}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "16px",
                textShadow:"0 2px 4px rgba(0,0,0,1)",
              }}
              dangerouslySetInnerHTML={{ __html:config?.regalo.page.causale}}
            />
          </Box>
        </Box>

      </Container>

      <Footer config={config}/>
    </div>
  );
}
