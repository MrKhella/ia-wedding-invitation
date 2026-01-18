import React, { useState, useEffect , useRef } from "react";
import { useNavigate } from "react-router-dom";
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

  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // setVisible(true);
    const timer = setTimeout(() => { 
      try { 
        if (cardRef.current) { 
          cardRef.current.triggerClick(); 
          console.log("attivato"); 
        } 
      } catch (err) {
        console.warn("Video autoplay bloccato dal browser:", err); // qui NON fai nulla → il video resta mutato e non dà errori 
        }
    }, 2000); // 2 secondi 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return null; // oppure un loader 
  if (error) return <p>Errore: {error}</p>;
  if (!config) return null;

  return (
    <div id="invite" className="fade-in" style={{ direction: config.direction || "ltr" }}>
      <Header />
      <Box sx={{ textAlign: "center", margin: "10px" }}>

        <Typography
          sx={{
            fontSize: "18px",
            // fontFamily: "Georgia, serif",
            fontStyle: "italic",
            marginBottom: "30px",
            paddingX: "30px"
          }}
          dangerouslySetInnerHTML={{ __html: config.introText }}
        >
        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }} >
          <Card ref={cardRef} isVideo={true} />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            // fontFamily: "Georgia, serif",
            fontStyle: "italic",
            // marginBottom: "10px",
            padding: "30px 20px"
          }}
          dangerouslySetInnerHTML={{ __html: config.invitoText }}
        >
        </Typography>
        <hr />
        <Typography
          sx={{
            fontSize: "36px",
            fontFamily: theme.typography.fonts.dancingScript,
            marginBottom: "10px",
            textShadow:"0 4px 20px rgba(136, 156, 130)" 
          }}
        >
          <strong>{config.weddingDate}</strong>
        </Typography>
        <hr />
        {/* <img src="/ia-wedding-invitation/saveDate.png" alt=""  width={400} height={100}/> */}
      </Box>
      <CarouselLinks config={config} />

      <Rispondi config={config} />

      <Footer config={config} />
    </div>
  );
}