import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Invite from "./components/Invite";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/ia-wedding-invitation" element={<Cover />} />
          <Route path="/invite" element={
            <div id="app-wrapper">
            <Invite />
          </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

