import { Box, Typography, ButtonBase , Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";
import useConfig from "../hooks/useConfig";

export default function Cover() {
const { config, loading, error } = useConfig();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const { lang, setLang } = useLanguage();

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => navigate("/invite"), 800); // dopo l’animazione apri l’invito
  };

  if (loading) return null; // oppure un loader 
  if (error) return <p>Errore: {error}</p>;
  if (!config) return null;

  const direction = config.direction || "ltr";
  const sigilloText = config.sigillo || "";

  // gestione corretta di caratteri Unicode (arabo incluso)
  const sigilloChars = Array.from(sigilloText);

  // se RTL, invertiamo l’ordine delle lettere
  const orderedChars =
    direction === "rtl" ? [...sigilloChars].reverse() : sigilloChars;

  // parametri per la curva
  const step = 6;
  const baseOffset = -65;
  // se vuoi invertire il verso della curva in RTL:
  // const angleMultiplier = direction === "rtl" ? -step : step;

  return (
    <>
    <div 
    style={{
      direction: config.direction || "ltr",
      position: "absolute",
      top: 20,
      right: 20,
      zIndex: 9999
    }}
  >
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="it">🇮🇹 Italiano</option>
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇪🇬 العربية</option>
      </select>
    </div>
    
    <Container maxWidth="md" sx={{ padding: 2 }}>
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f7f2ea",
        overflow: "hidden",
        perspective: "2000px", // <--- necessario per animazione 3D
      }}
    >
      {/* Triangolo orizzontale con animazione */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "70vw",
          height: "100vh",
          overflow: "visible",
          filter: "drop-shadow(0px 0px 25px rgba(0,0,0,0.25))",
        }}
      >
        <Box
          sx={{
            width: 0,
            height: 0,
            borderTop: "50vh solid transparent",
            borderBottom: "50vh solid transparent",
            borderLeft: "70vw solid white",
            transformOrigin: "left center",
            transition: "transform 0.8s ease-in-out",
            transform: isOpen ? "rotateY(-110deg)" : "rotateY(0deg)",
          }}
        />
      </Box>

      {/* Testo curvo sopra il sigillo */}
      <Box
  sx={{
    position: "absolute",
    top: { xs: "55%", md: "45%" },
    left: "65%",
    transform: "translateX(-50%)",
    width: { xs: 290, md: 180 },
    height: { xs: 180, md: 90 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  }}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 150"
    style={{
      position: "absolute",
      overflow: "visible",
    }}
  >
    <defs>
      <path
        id="sigillo-curve"
        d="M 20 20 Q 150 -260 280 15"
        fill="transparent"
      />
    </defs>

    <text
      fill="#a8c176"
      fontFamily={theme.typography.fonts.dancingScript}
      fontSize="18"
      fontWeight="bold"
      direction={config.direction || "ltr"}
    >
      <textPath
        href="#sigillo-curve"
        startOffset="50%"
        textAnchor="middle"
      >
        {config.sigillo}
      </textPath>
    </text>
  </svg>
</Box>


      {/* Sigillo con animazione */}
      <ButtonBase
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "65%",
          transform: isOpen
            ? "translate(-50%, -50%) scale(0.85)"
            : "translate(-50%, -50%)",
          transition: "transform 0.3s ease",
          width: { xs: 140, md: 180 },
          height: { xs: 140, md: 180 },
          borderRadius: "50%",
          backgroundImage:
            'url("/ia-wedding-invitation/img/sigillo.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            fontFamily: theme.typography.fonts.dancingScript,
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "36px" },
            color: "#fffbe6",
            letterSpacing: "2px",
          }}
        >
          I&nbsp;&&nbsp;A
        </Typography>
      </ButtonBase>
    </Box>
    </Container>
    </>
  );
}
