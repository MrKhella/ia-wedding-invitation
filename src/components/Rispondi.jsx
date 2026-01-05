import { Box, Typography } from "@mui/material";

export default function Rispondi({ config }) {
  const { phone, question , yesMessage, noMessage , deathLineText } = config.whatsapp;

  if (!config) return null;
  return (
    <Box sx={{ textAlign: "center", marginTop: "0" , padding: "20px"}}>
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
          style={{ width: "100px", background: "rgba(136, 156, 130)" , boxShadow:"0 4px 20px rgba(0,0,0,0.25)" }}
        >
          {config.whatsapp.yesButton}
        </a>

        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(noMessage)}`}
          className="btn"
          style={{ width: "100px", background: "#999" , boxShadow:"0 4px 20px rgba(0,0,0,0.25)"  }}
        >
          {config.whatsapp.noButton}
        </a>
      </Box>

      <Typography
        sx={{
          fontSize: "15px",
        }}
      >
        {config.whatsapp.deathLineText}
        <br /><strong>{config.whatsapp.deathLineDate}</strong>
      </Typography>
      {/* BOX PROMEMORIA CALENDAR */}
      <Box sx={{ marginTop: "20px" }}>
        <a
          href={`data:text/calendar;charset=utf8,${encodeURIComponent(
            `BEGIN:VCALENDAR
              VERSION:2.0
              BEGIN:VEVENT
              URL:https://mrkhella.github.io/ia-wedding-invitation/
              DTSTART:${config.calendar.start}
              DTEND:${config.calendar.end}
              SUMMARY:${config.calendar.title}
              DESCRIPTION:${config.calendar.description}
              LOCATION:${config.calendar.location}
              END:VEVENT
              END:VCALENDAR`
          )}`}
          download="I&A-wedding-reminder.ics"
          className="btn"
          style={{
            display: "block",
            width: "100%",
            background: "rgba(136, 156, 130)",
            padding: "12px 0",
            borderRadius: "8px",
            marginTop: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          {config.calendar.buttonText}
        </a>
      </Box>


    </Box>
  );
}
