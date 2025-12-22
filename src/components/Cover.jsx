import { Box, Typography, ButtonBase } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cover() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => navigate("/invite"), 800); // dopo l’animazione apri l’invito
  };

  return (
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
          top: { xs: "42%", md: "45%" },
          left: "65%",
          transform: "translateX(-50%)",
          width: { xs: 270, md: 180 },
          height: { xs: 140, md: 90 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Box
          component="span"
          sx={{
            position: "absolute",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            color: "#a8c176",
            letterSpacing: "0",
            fontSize: "16px",
            transformOrigin: "bottom center",
          }}
        >
          {"clicca qui per aprire".split("").map((char, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: {
                  xs: `rotate(${i * 6 - 65}deg) translateY(-90px)`,
                  md: `rotate(${i * 6 - 65}deg) translateY(-100px)`
                }
              }}
            >
              {char}
            </Box>
          ))}
        </Box>
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
            fontFamily: "Georgia, serif",
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
  );
}
