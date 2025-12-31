import Footer from './Footer';
import Header from './Header';
import CarouselLinks from "./CarouselLinks";
import Rispondi from "./Rispondi";
import useConfig from "../hooks/useConfig";
import { Box, Typography } from "@mui/material";

export default function Invite() {

  const { config, loading, error } = useConfig();

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
            fontFamily: "Georgia, serif",
            marginBottom: "10px",
          }}
        >
          <strong>{config.weddingDate}</strong>
        </Typography>
      </Box>
      <CarouselLinks />
      <Rispondi config={config} />
      <Footer />
    </div>
  );
}
