import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "40px",
        padding: "0 30px",
        opacity: 0.8,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Parisienne, cursive",
          fontSize: "22px",
        }}
      >
        “La vostra presenza renderà indimenticabile questo giorno.”
      </Typography>

          {/* Contenitore dell'immagine */}
          <Box
              sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingRight: "20px",
              }}
          >
              <img
                  src="/ia-wedding-invitation/img/footer-img.jpg"
                  alt="footer"
                  style={{ width: "250px", opacity: 0.9 }}
              />
          </Box>

    </Box>
  );
}
