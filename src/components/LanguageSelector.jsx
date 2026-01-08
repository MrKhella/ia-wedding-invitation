import { Box } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en", label: "🇬🇧" },
    { code: "it", label: "🇮🇹" },
    { code: "ar", label: "🇪🇬" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "3%",
        right: 0,
        zIndex: 999,
        display: "flex",
        gap: "12px",
        padding: "5px 10% 5px 5px",
        background: "rgba(133, 214, 108, 0.3)",
        backdropFilter: "blur(6px)",
        borderBottomLeftRadius: "12px",
        borderTopLeftRadius: "12px",
      }}
    >
      {languages.map((l) => (
        <Box
          key={l.code}
          onClick={() => setLang(l.code)}
          sx={{
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "22px",
            transition: "0.2s",
            border: lang === l.code ? "2px solid white" : "2px solid transparent",
            background: lang === l.code ? "rgba(255, 255, 255, 0.09)" : "transparent",
            "&:hover": {
              background: "rgba(255,255,255,0.25)",
            },
          }}
        >
          {l.label}
        </Box>
      ))}
    </Box>
  );
}
