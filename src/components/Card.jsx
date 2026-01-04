import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChurch } from "@fortawesome/free-solid-svg-icons";

export default function Card({ item , isDesktop}) {
    const iconMap = {
    "location-dot": faLocationDot,
    "church": faChurch,
  };
  return (
    <Box
      sx={{
        width: "220px",
        height: "220px",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
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
          }}
        >
          {item.faIconLocation && (
            <FontAwesomeIcon
              icon={iconMap[item.faIconLocation]}
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
              fontSize: "12px",
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              backgroundColor: "rgba(136, 156, 130,0.4)",
              width: "100%",
            }}
          >
            {item.time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
