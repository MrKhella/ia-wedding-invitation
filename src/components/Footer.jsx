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
      {/* TITOLO */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight:"bold",
          // fontFamily: "Georgia, serif",
          // marginTop: "70px",
          // marginBottom: "5px",
          textAlign: "center",
        }}
        dangerouslySetInnerHTML={{ __html:config?.calendar.textBox}}
      />
      {/* BOX PROMEMORIA CALENDAR */}
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
            src="/icons/google-calendar.png"
            alt="Google Calendar"
            style={{ width: "140px", height: "48px" }}
          />
        </a>

        {/* APPLE CALENDAR (ICS) */}
        <a href="/IA-wedding-reminder.ics" download="IA-wedding-reminder.ics">

          <img
            src="/icons/apple-calendar.png"
            alt="Apple Calendar"
            style={{ width: "140px", height: "48px" }}
          />
        </a>
        <br />
        
      </Box>
      
      <Box
            sx={{
              textAlign: "center",
              margin: "30px",
              opacity: 0.8,
            }}
          >
      <Typography
        sx={{
          fontFamily: "Parisienne, cursive",
          fontSize: "32px",
          textShadow:"0 4px 20px rgba(136, 156, 130)" 
        }}
      >
        {config.footerText}
      </Typography>
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
                  src="/img/footer-img.jpg"
                  alt="footer"
                  style={{ width: "250px", opacity: 0.9 }}
              />
          </Box>

    </Box>
  );
}
