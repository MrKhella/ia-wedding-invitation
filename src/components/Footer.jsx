import { Box, Typography } from "@mui/material";

export default function Footer({config}) {

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "40px",
        padding: "0 30px",
        opacity: 0.8,
      }}
    >
      {/* BOX PROMEMORIA CALENDAR */}
      {/* TITOLO */}
      <Typography
        sx={{
          fontSize: "16px",
          fontFamily: "Georgia, serif",
          marginTop: "70px",
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
            `${config.calendar.description}\n ${config.calendar.link}`
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
          {/* Contenitore dell'immagine */}
          <Box
              sx={{
                  display: "flex",
                  justifyContent: "center",
                  // paddingRight: "20px",
              }}
          >
              <img
                  src="/ia-wedding-invitation/img/footer-img.jpg"
                  alt="footer"
                  style={{ width: "250px", opacity: 0.9 }}
              />
          </Box>

    </Box>
  );
}
