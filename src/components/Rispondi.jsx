import { Box, Typography } from "@mui/material";

export default function Rispondi({ config }) {
  const { phone, question, yesMessage, noMessage, deathLineText } = config.whatsapp;

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
        {config.whatsapp.deathLineText}
        <br /><strong>{config.whatsapp.deathLineDate}</strong>
      </Typography>
      {/* BOX PROMEMORIA CALENDAR */}
      {/* TITOLO */}
      <Typography
        sx={{
          fontSize: "16px",
          fontFamily: "Georgia, serif",
          marginTop: "30px",
          marginBottom: "5px",
          textAlign: "center",
        }}
        dangerouslySetInnerHTML={{ __html:config?.calendar.textBox}}
      />
      <Box
        sx={{
          // marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* GOOGLE CALENDAR */}
        <a
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            config.calendar.title
          )}&dates=${config.calendar.start}/${config.calendar.end}&details=${encodeURIComponent(
            `${config.calendar.description}\n\nLink: ${config.calendar.link}`
          )}&location=${encodeURIComponent(config.calendar.location)}`}
          target="_blank"
          rel="noopener noreferrer"
        >

          <img
            src="/ia-wedding-invitation/icons/google-calendar.png"
            alt="Google Calendar"
            style={{ width: "140px", height: "48px" }}
          />
        </a>

        {/* APPLE CALENDAR (ICS) */}
        <a
          href={`data:text/calendar;charset=utf8,${encodeURIComponent(
            `BEGIN:VCALENDAR
              VERSION:2.0
              BEGIN:VEVENT
              DTSTART:${config.calendar.start}
              DTEND:${config.calendar.end}
              SUMMARY:${config.calendar.title}
              DESCRIPTION:${config.calendar.description}
              URL:${config.calendar.link}
              LOCATION:${config.calendar.location}
              END:VEVENT
              END:VCALENDAR`
          )}`}
          download="IA-wedding-reminder.ics"
        >

          <img
            src="/ia-wedding-invitation/icons/apple-calendar.png"
            alt="Apple Calendar"
            style={{ width: "140px", height: "48px" }}
          />
        </a>
      </Box>



    </Box>
  );
}
