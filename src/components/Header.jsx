import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Header() {
    const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
        {/* Contenitore delle due immagini */}
          <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              justifyItems:"center",
              // paddingX: "110px",
          }}
          >
        {/* Immagine sinistra */}
        <img src="/ia-wedding-invitation/img/header-img-sx.jpg" alt="decorazione sinistra" style={{ width: "200px", opacity: 0.9 , display:"none"}} />

        {/* Immagine destra */}
        <img src="/ia-wedding-invitation/img/header-img-dx.jpg" alt="decorazione destra" style={{ width: "250px", opacity: 0.9 }} />
      </Box>

      <Typography
        variant="h3"
        sx={{
        //   fontFamily: default,
          textAlign: "center",
          fontStyle: "italic",
          margin: "10px",
          textShadow:"0 4px 20px rgba(136, 156, 130)" 
        }}
      >
        Irene & Anton
      </Typography>
    </Box>
  );
}
