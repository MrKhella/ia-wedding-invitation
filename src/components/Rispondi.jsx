import { Box, Typography } from "@mui/material";

export default function Rispondi({ config }) {
  const { phone, question , yesMessage, noMessage , deathLineText } = config.whatsapp;

  if (!config) return null;
  return (
    <Box sx={{ textAlign: "center", marginTop: "30px" , padding:"0 30px"}}>
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
          style={{ width: "100px", background: "#a8c176" }}
        >
          SI
        </a>

        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(noMessage)}`}
          className="btn"
          style={{ width: "100px", background: "#999" }}
        >
          NO
        </a>
      </Box>
    </Box>
  );
}
