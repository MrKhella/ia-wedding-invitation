import Footer from './Footer';
import Header from './Header';
import CarouselLinks from "./CarouselLinks";
import Rispondi from "./Rispondi";
import useConfig from "../hooks/useConfig";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Invite() {

  const { config, loading, error } = useConfig();
  const theme = useTheme();

  if (loading) return null; // oppure un loader 
  if (error) return <p>Errore: {error}</p>;

  return (
    <div id="invite" className="page active">
      <Header />
      <Box sx={{ textAlign: "center", margin: "10px"}}>
        <Typography
          sx={{
            fontSize: "22px",
            fontFamily: "Georgia, serif",
            marginBottom: "10px",
            padding:"0 30px"
          }}
        >
          {config.introText}
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontFamily: theme.typography.fonts.dancingScript,
            marginBottom: "10px",
          }}
        >
          <strong>{config.weddingDate}</strong>
        </Typography>
        {/* <img src="/ia-wedding-invitation/saveDate.png" alt=""  width={400} height={100}/> */}
      </Box>
      <CarouselLinks />
      <Rispondi config={config} />
      <Footer />
    </div>
  );
}
