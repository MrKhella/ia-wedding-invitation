import Footer from './Footer';
import Header from './Header';
import CarouselLinks from "./CarouselLinks";
import Rispondi from "./Rispondi";
import useConfig from "../hooks/useConfig";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from './Card';

export default function Invite() {

  
  const theme = useTheme();

  const { config, loading, error } = useConfig();
  if (loading) return null; // oppure un loader 
  if (error) return <p>Errore: {error}</p>;
  if (!config) return null;

  return (
    <div id="invite" className="page active" style={{ direction: config.direction || "ltr" }}>
      <Header />
      <Box sx={{ textAlign: "center", margin: "10px" }}>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }} >
          <Card isVideo={true} />
        </Box>

        <Typography
          sx={{
            fontSize: "22px",
            fontFamily: "Georgia, serif",
            marginBottom: "10px",
            padding:"30px"
          }}
        >
          {config.introText}
        </Typography>
        <Typography
          sx={{
            fontSize: "36px",
            fontFamily: theme.typography.fonts.dancingScript,
            marginBottom: "10px",
          }}
        >
          <strong>{config.weddingDate}</strong>
        </Typography>
        {/* <img src="/ia-wedding-invitation/saveDate.png" alt=""  width={400} height={100}/> */}
      </Box>
      <CarouselLinks config={config} />
      <Rispondi config={config} />

      <Box
            sx={{
              textAlign: "center",
              margin: "30px",
              opacity: 0.8,
            }}
          >
      <Typography
        sx={{
          fontFamily: "Parisienne, cursive",
          fontSize: "32px",
          textShadow:"0 4px 20px rgba(136, 156, 130)" 
        }}
      >
        “ {config.footerText} ”
      </Typography>
      </Box>
      <Footer config={config} />
    </div>
  );
}
