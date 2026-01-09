import Slider from "react-slick";
import { Box, useMediaQuery ,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


export default function CarouselLinks({ config }) {
  
  const isDesktop = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  const items = [
    {
      title: `${config.chiesa.name}`,
      emoji: `${config.chiesa.emoji}`,
      faIcon: `${config.chiesa.faIcon}`,
      url: `${config.chiesa.url}`,
      isExternal: true,
      img: `${config.chiesa.img}`,
      time: `${config.chiesa.time}`,
    },
    {
      title: `${config.location.name}`,
      emoji: `${config.location.emoji}`,
      faIcon: `${config.location.faIcon}`,
      url: `${config.location.url}`,
      isExternal: true,
      img: `${config.location.img}`,
      time: `${config.location.time}`,
    },
    {
      title: `${config.regalo.name}`,
      url: `${config.regalo.url}`,
      faIcon: `${config.regalo.faIcon}`,
      isExternal: false,
      img: `${config.regalo.img}`,
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: isDesktop,
    centerMode: true,
    initialSlide: 0,
    focusOnSelect: true,
    centerPadding: "19%",

    autoplay: true, 
    autoplaySpeed: 5000,
    // pauseOnHover: true, 
    // pauseOnFocus: true, 
    // pauseOnDotsHover: true,
  };
  if (!config) return null;
  return (
    <Box sx={{ width: "100%", maxWidth: "100%", margin: "30px 0 0 0" }}>
      <Typography
        sx={{
          fontSize: "18px",
          // fontFamily: "Georgia, serif",
          // marginBottom: "10px",
          margin:"0 0 0 -10px",
          textAlign:"center"
        }}
      >
        {config.carouselText}
      </Typography>
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
