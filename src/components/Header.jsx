import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
    const theme = useTheme();
    const { lang, setLang } = useLanguage();
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
      {/* <div>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="it">🇮🇹 Italiano</option>
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇪🇬 العربية</option>
      </select>
    </div> */}
        {/* Contenitore delle due immagini */}
          <Box sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              paddingX: "110px",
          }}
          >
        {/* Immagine sinistra */}
        <img src="/ia-wedding-invitation/img/header-img-sx.jpg" alt="decorazione sinistra" style={{ width: "200px", opacity: 0.9 , display:"none"}} />

        {/* Immagine destra */}
        <img src="/ia-wedding-invitation/img/header-img-dx.jpg" alt="decorazione destra" style={{ width: "250px", opacity: 0.9 }} />
      </Box>

      <Typography
        variant="h3"
        sx={{
        //   fontFamily: default,
          textAlign: "center",
          fontStyle: "italic",
          marginTop: "10px",
        }}
      >
        Irene & Anton
      </Typography>
    </Box>
  );
}
