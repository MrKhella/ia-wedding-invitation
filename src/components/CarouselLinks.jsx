import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

export default function CarouselLinks() {
  const items = [
    {
      title: "Location",
      emoji: "📍",
      url: "https://www.google.com/maps/place/Casale+Consolini/@41.8421304,12.5702537,16z",
      img: "/ia-wedding-invitation/img/ricevimento.jpeg"
    },
    {
      title: "Chiesa",
      emoji: "⛪",
      url: "https://www.google.com/maps/place/Basilica+di+Santo+Stefano+Rotondo+al+Celio/",
      img: "/ia-wedding-invitation/img/chiesa.jpg"
    },
    {
      title: "Conferma Presenza",
      emoji: "✅",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdysbmjUpaO7lKltaZhDvMIwL9TgUX9sTmpc5dsQ-cZy3uMTw/viewform",
      img: "/ia-wedding-invitation/img/rsvp.jpg"
    }
  ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1, 
        swipeToSlide: true,
        arrows: false,
    };

  return (
    <Box sx={{ width: "100%", maxWidth: "900px", margin: "0 20px" }}>
      <Slider {...settings}>
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                width: "270px",      // card più larga
                height: "200px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "0 6px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.35)",
                }}
              />

              {/* Testo */}
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
                  {item.emoji} {item.title}
                </Typography>
              </Box>
            </Box>
          </a>
        ))}
      </Slider>
    </Box>
  );
}
