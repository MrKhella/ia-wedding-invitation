import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const theme = useTheme();
  const { lang, setLang } = useLanguage();
  return (
    <Box
      sx={{
        padding: "20px 20px",
        paddingBottom: "10px",
      }}
    >
      {/* <Box
      sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          justifyItems: "center",
          paddingX:"10%"
      }}
    >
      <select name="comboLang" value={lang} onChange={e => setLang(e.target.value)}>
        <option value="it">🇮🇹 Italiano</option>
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇪🇬 العربية</option>
      </select>
    </Box> */}
      
        {/* Contenitore delle due immagini */}
          <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              justifyItems:"center",
              // paddingX: "110px",
          }}
          >
        {/* Immagine sinistra */}
        <img src="/img/header-img-sx.jpg" alt="decorazione sinistra" style={{ width: "200px", opacity: 0.9 , display:"none"}} />

        {/* Immagine destra */}
        <img src="/img/header-img-dx.jpg" alt="decorazione destra" style={{ width: "250px", opacity: 0.9 }} />
      </Box>

      <Typography
        variant="h3"
        sx={{
        //   fontFamily: default,
          textAlign: "center",
          fontStyle: "italic",
          margin: "10px",
          textShadow:"0 4px 20px rgba(136, 156, 130)" 
        }}
      >
        Irene & Anton
      </Typography>
    </Box>
  );
}
