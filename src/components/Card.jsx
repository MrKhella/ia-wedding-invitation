import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch , faGift , faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Card({ item, isVideo }) {
  const iconMap = {
    "location-dot": faLocationDot,
    "church": faChurch,
    "present": faGift,
  };
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
            <video
              autoPlay
              loop
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source
                src="/ia-wedding-invitation/video/saveTheDate.mp4"
                type="video/mp4"
              />
            </video>
          </Box>

        </>
      }
    </Box>
  );
}
