import { Box, Typography } from "@mui/material";

export default function Rispondi({ config }) {
  const { phone, question, yesMessage, noMessage, deadLineText } = config.whatsapp;

  if (!config) return null;
  return (
    <Box sx={{ textAlign: "center", marginTop: "0", padding: "20px" }}>
      <Typography
        sx={{
          fontSize: "22px",
          fontFamily: "Georgia, serif",
          marginBottom: "10px",
        }}
      >
        {question}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(yesMessage)}`}
          className="btn"
          style={{ width: "100px", background: "rgba(136, 156, 130)", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
        >
          {config.whatsapp.yesButton}
        </a>

        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(noMessage)}`}
          className="btn"
          style={{ width: "100px", background: "#999", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
        >
          {config.whatsapp.noButton}
        </a>
      </Box>

      <Typography
        sx={{
          fontSize: "15px",
        }}
      >
        {config.whatsapp.deadLineText}
        <br /><strong>{config.whatsapp.deadLineDate}</strong>
      </Typography>
      
    </Box>
  );
}
