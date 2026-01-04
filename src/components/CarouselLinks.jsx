import Slider from "react-slick";
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


export default function CarouselLinks({ config }) {
  
  const isDesktop = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  const items = [
    {
      title: `${config.chiesa.name}`,
      emoji: `${config.chiesa.emoji}`,
      faIconLocation: `${config.location.faIcon}`,
      url: `${config.chiesa.url}`,
      isExternal: true,
      img: `${config.chiesa.img}`,
      time: `${config.chiesa.time}`,
    },
    {
      title: `${config.location.name}`,
      emoji: `${config.location.emoji}`,
      faIconLocation: `${config.location.faIcon}`,
      url: `${config.location.url}`,
      isExternal: true,
      img: `${config.location.img}`,
      time: `${config.location.time}`,
    },
    {
      title: "Regalo",
      emoji: "✅",
      url: "/regalo",
      isExternal: false,
      img: "/ia-wedding-invitation/img/regalo.jpg",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 1.2 : 1.6,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: isDesktop,
    centerMode: true,
    centerPadding: isDesktop ? "55px" : "-5px",
  };
  if (!config) return null;
  return (
    <Box sx={{ width: "100%", maxWidth: "360px", margin: "0 auto 0 40px" }}>
      <Slider {...settings}>
        {items.map((item, i) => 
        (item.isExternal ?
          (
            <a key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none"
              }} >
              <Card item={item} isDesktop={isDesktop}/>
            </a>
          ) 
          : (
            <Box
              key={i}
              onClick={() => navigate(item.url)}
              sx={{ cursor: "pointer" }} >

              <Card item={item} isDesktop={isDesktop}/>

            </Box>)))}
      </Slider>
    </Box>
  );
}
