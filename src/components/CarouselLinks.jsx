import Slider from "react-slick";
import { Box, Typography , useMediaQuery} from "@mui/material";
import useConfig from "../hooks/useConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChurch } from "@fortawesome/free-solid-svg-icons";


export default function CarouselLinks() {
    const { config, loading, error } = useConfig();
    const isDesktop = useMediaQuery("(min-width:768px)");
  
    if (loading) return null; // oppure un loader 
    if (error) return <p>Errore: {error}</p>;

  const items = [
    {
      title: `${config.chiesa.name}`,
      emoji: `${config.chiesa.emoji}`,
      faIconLocation: `${config.location.faIcon}`,
      url: `${config.chiesa.url}`,
      img: `${config.chiesa.img}`,
      time: `${config.chiesa.time}`,
    },
    {
      title: `${config.location.name}`,
      emoji: `${config.location.emoji}`,
      faIconLocation: `${config.location.faIcon}`,
      url: `${config.location.url}`,
      img: `${config.location.img}`,
      time: `${config.location.time}`,
    },
    {
      title: "Regalo",
      emoji: "✅",
      url: "/regalo",
      img: "/ia-wedding-invitation/img/regalo.jpg",
      isExternal: false
    }
  ];

  const iconMap = {
     "location-dot": faLocationDot, 
     "church": faChurch,
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1, 
        swipeToSlide: true,
        arrows: isDesktop,
        centerMode: true, centerPadding: "0px",
    };

  return (
    <Box sx={{ width: "100%", maxWidth: "360px", margin: "0 auto 0 40px"}}>
      <Slider {...settings}>
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target={!item.isExternal ? "_self" : "_blank"}
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                width: "220px",      // card più larga
                height: "220px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "0",
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
                  {item.faIconLocation && (
                    <FontAwesomeIcon
                      icon={iconMap[item.faIconLocation]}
                      style={{ marginRight: "8px" }}
                    />
                  )}
                  {item.faIconChurch && (
                    <FontAwesomeIcon
                      icon={iconMap[item.faIconLocation]}
                      style={{ marginRight: "8px" }}
                    />
                  )}

                 <br />{item.title}
                </Typography>
                <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Playfair Display, serif",
                    fontStyle: "italic",
                    backgroundColor:"rgba(89, 112, 59, 0.5)",
                    width:"100%",
                  }}
                >
                  {item.time}
                </Typography>
                </Box>
              </Box>
            </Box>
          </a>
        ))}
      </Slider>
    </Box>
  );
}
