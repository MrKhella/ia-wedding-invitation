import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from './Footer';
import Header from './Header';
import useConfig from "../hooks/useConfig";

export default function Regalo() {
  const { config, loading, error } = useConfig();
  const theme = useTheme();

  if (loading) return null; // oppure un loader 
  if (error) return <p>Errore: {error}</p>;
  
  return (
    <>
    <Header />
    <h1>PAGINA REGALO</h1>
    <Footer />
    </>
  );
}
