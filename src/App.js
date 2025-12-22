import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Invite from "./components/Invite";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/ia-wedding-invitation" element={<Cover />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
}

