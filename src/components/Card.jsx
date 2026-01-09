import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch, faGift, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function Card({ item, isVideo }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const videoRef = useRef(null);

  const iconMap = {
    "location-dot": faLocationDot,
    "church": faChurch,
    "present": faGift,
  };

  const toggleAudio = () => {
    const v = videoRef.current;
              if (v) {
                const newState = !audioEnabled;
                v.muted = !newState;
                v.play();
                setAudioEnabled(newState);
              }
  }
  return (
    <Box
      sx={{
        width: isVideo ? "300px" : "220px",
        height: isVideo ? "300px" : "220px",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundImage: isVideo ? null : `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        boxShadow: isVideo ? "0 4px 20px rgba(0,0,0,0.75)" : "0 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      {!isVideo &&
        <>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                textAlign:"center"
              }}
            >
              {item.faIcon && (
                <FontAwesomeIcon
                  icon={iconMap[item.faIcon]}
                  style={{ marginRight: "8px" }}
                />
              )}
              <br />
              {item.title}
            </Typography>

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  backgroundColor: "rgba(136, 156, 130,0.4)",
                  width: "100%",
                  textAlign:"center"
                }}
              >
                {item.time}
              </Typography>
            </Box>
          </Box>
        </>
      }
      {/* video card */}
      {isVideo &&
        <>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* ICONA AUDIO ON/OFF */}
            <Box sx={{ 
              position: "absolute",
              bottom: 12, right: 12, //posizione icona audio
              zIndex: 10, 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              width: 22, 
              height: 22, 
              borderRadius: "50%", 
              // background: "rgba(255,255,255,0.2)", 
              // backdropFilter: "blur(4px)", 
              transition: "0.3s", "&:hover": { background: "rgba(255,255,255,0.3)" }, }} 
              onClick={toggleAudio}
            >
              {audioEnabled ? (
                <VolumeUpIcon sx={{ fontSize: 18, color: "white" }} />
              ) : (
                <VolumeOffIcon sx={{ fontSize: 18, color: "white" }} />
              )}
            </Box>
            {/* VIDEO */}
            <video 
            ref={videoRef} 
            playsInline 
            muted 
            autoPlay 
            loop 
            style={{ 
              width: "300px", 
              height: "300px", 
              objectFit: "cover", 
              display: "block", }}
              onClick={toggleAudio} >
              <source src="/video/saveTheDate.mp4" type="video/mp4" />
            </video>
          </Box>

        </>
      }
    </Box>
  );
}
