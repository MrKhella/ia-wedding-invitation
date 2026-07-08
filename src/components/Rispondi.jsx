import { Box, Typography } from "@mui/material";

export default function Rispondi({ config }) {
  const { phone, question, yesMessage, noMessage, deadLineText , enable } = config.whatsapp;

  if (!config) return null;
  return (
    <Box sx={{ textAlign: "center", marginTop: "0", padding: "20px" }}>
      <Typography
        sx={{
          fontSize: "22px",
          // fontFamily: "Georgia, serif",
          marginBottom: "10px",
        }}
      >
        {question}
      </Typography>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}>
        <a
          href={enable ? `https://wa.me/${phone}?text=${encodeURIComponent(yesMessage)}` : undefined}
          className="btn"
          style={{
            width: "100px",
            background: enable ? "rgba(132 204 109)" : "rgba(132 204 109, 0.4)",
            boxShadow: enable ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
            pointerEvents: enable ? "auto" : "none",
            opacity: enable ? 1 : 0.5,
          }}
        >

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // gap: "10px",
          }}>
            <img
              src="/icons/whatsapp-icon.png"
              alt=""
              style={{ width: "32px", height: "32px" }}
            />
            {config.whatsapp.yesButton}
          </Box>
        </a>

        <a
          href={enable ? `https://wa.me/${phone}?text=${encodeURIComponent(noMessage)}` : undefined}
          className="btn"
          style={{
            width: "100px",
            background: enable ? "#999" : "rgba(153,153,153,0.4)",
            boxShadow: enable ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
            pointerEvents: enable ? "auto" : "none",
            opacity: enable ? 1 : 0.5,
          }}
        >

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // gap: "10px",
          }}>
            <img
              src="/icons/whatsapp-icon.png"
              alt=""
              style={{ width: "32px", height: "32px" }}
            />
            {config.whatsapp.noButton}
          </Box>
        </a>
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          // fontFamily:"Georgia"
        }}
      >
        {config.whatsapp.deadLineText}
        <br /><strong>{config.whatsapp.deadLineDate}</strong>
      </Typography>
      
    </Box>
  );
}
